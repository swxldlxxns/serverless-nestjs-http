import { registerAs } from '@nestjs/config';

import { EnvironmentVariablesInterface } from '/opt/src/interfaces/environment-variables.interface';

export default registerAs(
  'config',
  (): EnvironmentVariablesInterface => ({
    jwksUri: process.env.JWKS_URI,
  }),
);
