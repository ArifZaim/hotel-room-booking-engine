import { Component } from '@angular/core';
import { RoomList } from './rooms/room-list/room-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RoomList],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  title = 'hotel-booking-engine';
}