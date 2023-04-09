import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

import config from '/opt/src/config';
import { MainController } from '/opt/src/controllers/main.controller';
import { MainService } from '/opt/src/services/main.service';
import { JwtStrategy } from '/opt/src/strategies/jwt.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
  ],
  controllers: [MainController],
  providers: [JwtStrategy, JwtService, MainService],
})
export class MainModule {}
