import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private rooms: Room[] = [
    { id: 1, name: '101', type: 'Single', price: 100, available: true },
    { id: 2, name: '102', type: 'Double', price: 150, available: true },
    { id: 3, name: '103', type: 'Suite', price: 250, available: false },
    { id: 4, name: '201', type: 'Single', price: 120, available: true },
    { id: 5, name: '202', type: 'Double', price: 180, available: true }
  ];

  constructor() {

    // ⭐ SSR Safe localStorage check
    if (typeof window !== 'undefined') {

      const savedRooms = localStorage.getItem('rooms');

      if (savedRooms) {
        this.rooms = JSON.parse(savedRooms);
      }

    }

  }

  getRooms(): Observable<Room[]> {
    return of(this.rooms);
  }

  bookRoom(roomId: number): void {

    const room = this.rooms.find(room => room.id === roomId);

    if (room) {
      room.available = false;
    }

    // ⭐ Save booking only in browser
    if (typeof window !== 'undefined') {
      localStorage.setItem('rooms', JSON.stringify(this.rooms));
    }

  }

}