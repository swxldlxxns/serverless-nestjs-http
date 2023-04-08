import { Test, TestingModule } from '@nestjs/testing';

import { MainService } from '../services/main.service';
import { MainController } from './main.controller';

describe('AppController', () => {
  let mainController: MainController;
  let mainService: MainService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MainController],
      providers: [MainService],
    }).compile();

    mainController = app.get<MainController>(MainController);
    mainService = app.get<MainService>(MainService);
  });

  it('should return "Hello String!"', () => {
    const string = 'test';
    const result = `Hello ${string}!`;

    jest
      .spyOn(mainService, 'getHello')
      .mockImplementation((): string => result);
    expect(mainController.getHello({ string })).toBe(result);
  });
});
