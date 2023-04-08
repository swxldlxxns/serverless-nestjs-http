import { Body, Controller, Get, UseGuards } from '@nestjs/common';

import { AuthRequestDto } from '/opt/src/dtos/auth-request.dto';
import { log } from '/opt/src/utils';

import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { MainService } from '../services/main.service';

const SERVICE_NAME = 'MainController';

@Controller('authorization')
export class MainController {
  constructor(private readonly _mainService: MainService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  getHello(@Body() authRequest: AuthRequestDto): string {
    log('INFO', { SERVICE_NAME, authRequest });

    return this._mainService.getHello(authRequest.string);
  }
}
