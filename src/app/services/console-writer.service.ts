import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsoleWriter {
  public write(msg: string) {
    console.log(msg);
  }
}
