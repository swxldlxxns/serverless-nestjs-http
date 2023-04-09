import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { passportJwtSecret } from 'jwks-rsa';
import { ExtractJwt, Strategy } from 'passport-jwt';

import config from '/opt/src/config';
import { UserLoginInfoInterface } from '/opt/src/interfaces/user-login-info.interface';
import { log } from '/opt/src/utils';

const SERVICE_NAME = 'JwtStrategy';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(@Inject(config.KEY) { jwksUri }: ConfigType<typeof config>) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKeyProvider: passportJwtSecret({ jwksUri }),
      algorithms: ['RS256'],
    });
  }

  validate(payload: UserLoginInfoInterface) {
    log('INFO', { SERVICE_NAME, payload });

    return payload;
  }
}
