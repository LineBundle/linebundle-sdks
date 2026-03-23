# EventTimeline

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `get` | GET | `/api/v1/event/{event_id}/timeline` | Get event timeline |
| `getPublished` | GET | `/api/v1/event/{event_id}/timeline/published` | Get published event timeline |
| `createMilestone` | POST | `/api/v1/event/{event_id}/timeline/milestones` | Create and link milestone |
| `linkMilestone` | POST | `/api/v1/event/{event_id}/timeline/link` | Link existing event |
| `unlink` | DELETE | `/api/v1/event/{event_id}/timeline/{milestone_event_id}` | Unlink milestone |