import { Injectable } from '@nestjs/common';

@Injectable()
export class MainService {
  getHello(string: string): string {
    return `Hello ${string}!`;
  }
}
