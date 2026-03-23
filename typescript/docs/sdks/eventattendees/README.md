# EventAttendees

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `get` | GET | `/api/v1/events/{event_id}/attendees` | Get Event Attendees |
| `add` | POST | `/api/v1/events/{event_id}/attendees` | Add Event Attendee |
| `addBulk` | POST | `/api/v1/events/{event_id}/attendees/bulk` | Add Event Attendees Bulk |
| `removeBulk` | DELETE | `/api/v1/events/{event_id}/attendees/bulk` | Remove Event Attendees Bulk |
| `update` | PUT | `/api/v1/events/{event_id}/attendees/{attendee_id}` | Update Event Attendee |
| `remove` | DELETE | `/api/v1/events/{event_id}/attendees/{attendee_id}` | Remove Event Attendee |
| `checkIn` | POST | `/api/v1/events/{event_id}/attendees/{attendee_id}/check-in` | Check In Attendee |
| `updateBulkStatus` | PATCH | `/api/v1/events/{event_id}/attendees/bulk/status` | Update Attendees Status Bulk |