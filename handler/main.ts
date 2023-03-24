import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import serverlessExpress from '@vendia/serverless-express';
import { APIGatewayEvent, Context, Handler } from 'aws-lambda';
import { useContainer } from 'class-validator';

import { MainModule } from '/opt/src/main.module';
import { log } from '/opt/src/utils';

const SERVICE_NAME = 'Handler';

let cachedServer;

exports.handler = async function (
  event: APIGatewayEvent,
  context: Context,
): Promise<Handler> {
  if (!cachedServer) {
    const nestApp = await NestFactory.create(MainModule, { logger: false });

    nestApp.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transformOptions: {
          enableImplicitConversion: true,
        },
      }),
    );
    useContainer(nestApp.select(MainModule), { fallbackOnErrors: true });

    await nestApp.init();
    cachedServer = serverlessExpress({
      app: nestApp.getHttpAdapter().getInstance(),
    });
  }

  log('INFO', { SERVICE_NAME, context, event });

  return cachedServer(event, context);
};
