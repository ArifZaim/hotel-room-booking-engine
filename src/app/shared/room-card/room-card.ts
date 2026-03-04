import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room } from '../../models/room.model';

@Component({
  selector: 'app-room-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-card.html',
  styleUrl: './room-card.scss'
})
export class RoomCard {

  @Input() room!: Room;

  @Output() book = new EventEmitter<number>();

  bookRoom() {
    this.book.emit(this.room.id);
  }

}