import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RoomService } from '../../services/room';
import { Room } from '../../models/room.model';

import { BookRoomModal } from '../book-room-modal/book-room-modal';
import { RoomCard } from '../../shared/room-card/room-card';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    BookRoomModal,
    RoomCard
  ],
  templateUrl: './room-list.html',
  styleUrl: './room-list.scss'
})
export class RoomList implements OnInit {

  rooms: Room[] = [];

  selectedRoomId: number | null = null;

  showModal = false;

  selectedType: string = 'All';

  successMessage: string | null = null;

  isLoading = true;

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {

    this.roomService.getRooms().subscribe(data => {

      this.rooms = data;

      this.isLoading = false;

    });

  }

  openBooking(roomId: number) {

    this.selectedRoomId = roomId;

    this.showModal = true;

  }

  closeModal() {

    this.showModal = false;

  }

  confirmBooking(data: {
    guestName: string
    checkIn: string
    checkOut: string
  }) {

    if (this.selectedRoomId !== null) {

      this.roomService.bookRoom(this.selectedRoomId);

      this.successMessage = `Booking successful for ${data.guestName}!`;

    }

    this.showModal = false;

  }

  get filteredRooms(): Room[] {

    if (this.selectedType === 'All') {
      return this.rooms;
    }

    return this.rooms.filter(
      room => room.type === this.selectedType
    );

  }

}