import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

@Component({
  selector: 'app-book-room-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './book-room-modal.html',
  styleUrl: './book-room-modal.scss'
})
export class BookRoomModal {

  @Output() closeModal = new EventEmitter<void>();

  @Output() confirm = new EventEmitter<{
    guestName: string
    checkIn: string
    checkOut: string
  }>();

  bookingForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.bookingForm = this.fb.group(
      {
        guestName: ['', Validators.required],
        checkIn: ['', Validators.required],
        checkOut: ['', Validators.required]
      },
      { validators: this.dateValidator }
    );

  }

  // ⭐ Custom validator
  dateValidator(group: AbstractControl): ValidationErrors | null {

    const checkIn = group.get('checkIn')?.value;
    const checkOut = group.get('checkOut')?.value;

    if (!checkIn || !checkOut) {
      return null;
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      return { invalidDateRange: true };
    }

    return null;

  }

  close() {
    this.closeModal.emit();
  }

  confirmBooking() {

    if (this.bookingForm.invalid) {
      return;
    }

    const formValue = this.bookingForm.value;

    this.confirm.emit({
      guestName: formValue.guestName,
      checkIn: formValue.checkIn,
      checkOut: formValue.checkOut
    });

  }

}