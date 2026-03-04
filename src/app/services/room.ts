import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private rooms: Room[] = [
    { id: 1, name: '101', type: 'Single', price: 80, available: true },
    { id: 2, name: '102', type: 'Single', price: 85, available: true },
    { id: 3, name: '103', type: 'Single', price: 90, available: true },
    
    { id: 4, name: '201', type: 'Double', price: 120, available: true },
    { id: 5, name: '202', type: 'Double', price: 130, available: true },
    { id: 6, name: '203', type: 'Double', price: 135, available: true },
    
    { id: 7, name: '301', type: 'Suite', price: 200, available: true },
    { id: 8, name: '302', type: 'Suite', price: 220, available: true },
    { id: 9, name: '303', type: 'Suite', price: 240, available: true },
    
    { id: 10, name: '401', type: 'Suite', price: 260, available: true }
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