import { Injectable } from '@angular/core';
import { ConsoleWriter } from './console-writer.service';

const loggerFactory = (writer: ConsoleWriter) => {
  return new LoggerService(true, writer);
};

@Injectable({
  providedIn: 'root',
  useFactory: loggerFactory,
  deps: [ConsoleWriter]
})
export class LoggerService {
  constructor(private isEnabled: boolean, private writer: ConsoleWriter) {}

  log(msg: string) {
    if (this.isEnabled) {
      this.writer.write(msg);
    }
  }
}
