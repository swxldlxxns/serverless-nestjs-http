import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { MainController } from '/opt/src/main.controller';
import { MainService } from '/opt/src/main.service';
import { JwtStrategy } from '/opt/src/strategies/jwt.strategy';

@Module({
  controllers: [MainController],
  providers: [JwtStrategy, JwtService, MainService],
})
export class MainModule {}
