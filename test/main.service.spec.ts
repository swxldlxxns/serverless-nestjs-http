import { Test, TestingModule } from '@nestjs/testing';

import { MainService } from '/opt/src/services/main.service';

describe('AppService', () => {
  let service: MainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MainService],
    }).compile();

    service = module.get<MainService>(MainService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return Hello String', () => {
    const string = 'test';

    expect(service.getHello('test')).toEqual(`Hello ${string}!`);
  });
});
