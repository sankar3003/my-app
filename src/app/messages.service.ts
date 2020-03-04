import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
messages: any=[];


constructor() { }
add(message: string) {
  this.messages.push(message);
}

clear() {
  this.messages = [];
}
}
