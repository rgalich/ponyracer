import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import * as Webstomp from 'webstomp-client';

@Injectable({
  providedIn: 'root'
})
export class WsService {

  constructor() { }

  connect<T>(channel): Observable<T> {
    return Observable.create(observer => {
      const connection: WebSocket = new WebSocket(`${environment.wsBaseUrl}/ws`);
      const stompClient: Webstomp.Client = Webstomp.over(connection);
      // TODO connect the stomp client
      // TODO subscribe to the specific channel and store the subscription
      // TODO handle incoming messages
      // TODO handle the unsubscription
    });
  }
}
