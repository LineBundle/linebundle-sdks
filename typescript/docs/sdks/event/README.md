# Event

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `get` | GET | `/api/v1/event/{event_id}` | Get Event By Id |
| `update` | PUT | `/api/v1/event/{event_id}` | Update Event |
| `getSectionSettings` | GET | `/api/v1/event/{event_id}/section/settings` | Get Section Settings |
| `unpublishVersion` | POST | `/api/v1/event/{event_id}/versions/unpublish` | Unpublish Event (Mark as Draft) |
| `compareVersions` | GET | `/api/v1/event/{event_id}/versions/compare` | Compare Event Versions |
| `getLatestVersion` | GET | `/api/v1/event/{event_id}/versions/latest` | Get Latest Event Version |
| `getVersion` | GET | `/api/v1/event/{event_id}/versions/{transaction_id}` | Get Event Version |