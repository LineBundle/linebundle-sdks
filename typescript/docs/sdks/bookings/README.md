# Bookings

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `list` | GET | `/api/v1/booking` | Get Bookings |
| `getById` | GET | `/api/v1/booking/{booking_id}` | Get Booking By Id |
| `update` | PUT | `/api/v1/booking/{booking_id}` | Update Booking |
| `delete` | DELETE | `/api/v1/booking/{booking_id}` | Delete Booking |
| `checkAvailability` | POST | `/api/v1/booking/check-availability` | Check Availability |
| `getPlaceSchedule` | GET | `/api/v1/booking/places/{place_id}/schedule` | Get Place Schedule |