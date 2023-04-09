module.exports.profile = () => `profile_${this.stage()}`;
module.exports.region = () => 'us-east-1';
module.exports.stage = () => 'dev';
module.exports.nodePath = () => './:/opt/node_modules';
module.exports.stackName = () => 'serverless-nestjs-http';
module.exports.domainName = () => `api-${this.stage()}.domain.com`;
module.exports.logRetentionInDays = () => 14;
module.exports.jwksUri = () =>
  'https://login.microsoftonline.com/common/discovery/keys';
