# 🏨 Hotel Room Booking Engine

A simple **Hotel Room Booking Engine** built with **Angular 17, TypeScript, RxJS, and Bootstrap**.
The application allows users to view available hotel rooms and book them using a modal form with validation.

---

# 🚀 Objective

This project demonstrates the ability to:

* Build a responsive UI using **Angular and Bootstrap**
* Implement **Angular Reactive Forms**
* Use **component-based architecture**
* Manage application state using **Angular services**
* Simulate API calls using **RxJS**
* Write **clean, reusable, and modular code**

---

# ✨ Features

### 🛏 Room List Page

Displays available hotel rooms with the following details:

* Room Name (e.g., 101, 102, 103)
* Room Type (Single, Double, Suite)
* Room Price
* Availability Status (Available / Booked)

---

### 📅 Book Room Modal

Clicking **Book Room** opens a modal with a booking form.

Form fields include:

* Guest Name
* Check-in Date
* Check-out Date

Validation rules:

* All fields are required
* Check-out date must be **after check-in date**

---

### ✅ Booking Confirmation

After submitting the booking form:

* A **success notification** is displayed
* Room availability updates to **Booked**
* The **Book Room button becomes disabled**

---

# ⭐ Bonus Features Implemented

* Angular **Reactive Forms**
* **Reusable RoomCardComponent**
* **Bootstrap responsive layout**
* **Room filtering by type**
* **Custom form validation**
* **Check-out date restriction**
* **localStorage persistence**
* **Loading spinner while fetching rooms**
* **Success notification UI**

---

# 🛠 Tech Stack

| Technology     | Purpose                      |
| -------------- | ---------------------------- |
| Angular 17     | Frontend Framework           |
| TypeScript     | Strong typing                |
| RxJS           | Simulating API responses     |
| Bootstrap 5    | UI layout and styling        |
| Reactive Forms | Form validation and handling |
| LocalStorage   | Persist booking state        |

---

# 📂 Project Structure

```
src/app

models
 └ room.model.ts

services
 └ room.ts

rooms
 ├ room-list
 │ ├ room-list.ts
 │ ├ room-list.html
 │ └ room-list.scss
 │
 └ book-room-modal
   ├ book-room-modal.ts
   ├ book-room-modal.html
   └ book-room-modal.scss

shared
 └ room-card
   ├ room-card.ts
   ├ room-card.html
   └ room-card.scss
```

This modular architecture separates:

* **Data models**
* **Business logic**
* **UI components**
* **Reusable components**

---

# 📡 Mock API

The project simulates an API using **RxJS `of()`** inside the service layer.

Example:

```typescript
getRooms(): Observable<Room[]> {
  return of(this.rooms);
}
```

This mimics fetching room data from a backend.

---

# 💾 Booking Persistence

Bookings are stored using **localStorage**, allowing room status to remain booked after refreshing the page.

Example:

```typescript
localStorage.setItem('rooms', JSON.stringify(this.rooms));
```

---

# 📱 Responsive Design

The application uses **Bootstrap Grid** to ensure the UI works across devices:

* Desktop
* Tablet
* Mobile

---

# ▶️ Running the Project

Install dependencies:

```
npm install
```

Start the development server:

```
ng serve
```

Open the application in your browser:

```
http://localhost:4200
```

---

# 📸 Application Workflow

1. View the list of available hotel rooms
2. Filter rooms by type
3. Click **Book Room**
4. Fill in booking details
5. Submit the form
6. Receive confirmation notification
7. Room status updates to **Booked**

---

# 👨‍💻 Author

**Muhammad Arif Zaim Zailani**

Frontend Developer (Angular)

GitHub:
https://github.com/ArifZaim
