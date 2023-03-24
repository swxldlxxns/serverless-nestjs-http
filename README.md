<p style="text-align:center"><img src="https://docs.nestjs.com/assets/logo-small.svg" width="100" alt="logo nest"> <img src="https://getcommandeer.com/_nuxt/img/4a7600a.png" width="110" alt="logo serverless"></p>


# Description
> This project is with Serverless Framework and NestJs, Serverless is with Lambdas functions and with lambda layers.

## AWS

- Config aws credentials
- Set stack name, profile and domain in ServerlessScripts.js
- module.exports.stackName = () => 'serverless-nestjs-http';
- module.exports.profile = () => `profile_${this.stage()}`;
- module.exports.domainName = () => `api-${this.stage()}.domain.com`;

## Installation
```sh
$ npm install
```
## Test
```sh
$ npm run validate
```
## Deploy
```sh
$ npm run deploy
```

## Example invoke
```
{
  "resource": "/",
  "path": "/authorization/",
  "httpMethod": "GET",
  "multiValueHeaders": {
    "Authorization": [
      "Bearer T0k3N"
    ]
  },
  "requestContext": {
    "httpMethod": "GET"
  }
}
```
