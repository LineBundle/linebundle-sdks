# SpaceEvents

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `get` | GET | `/api/v1/spaces/{space_id}/events` | Get Space Events |
| `add` | POST | `/api/v1/spaces/{space_id}/events` | Add Event To Space |
| `getEventSpaces` | GET | `/api/v1/events/{event_id}/spaces` | Get Event Spaces |
| `getById` | GET | `/api/v1/space-events/{space_event_id}` | Get Space Event |
| `removeEvent` | DELETE | `/api/v1/space-events/{space_event_id}` | Remove Event From Space |
| `bulkAdd` | POST | `/api/v1/spaces/{space_id}/events/bulk` | Bulk Add Events To Space |
| `bulkRemove` | DELETE | `/api/v1/spaces/{space_id}/events/bulk` | Bulk Remove Events From Space |
| `count` | GET | `/api/v1/spaces/{space_id}/events/count` | Count Space Events |