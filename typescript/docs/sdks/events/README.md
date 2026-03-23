# Events

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `list` | GET | `/api/v1/event` | Get Event List |
| `create` | POST | `/api/v1/event` | Create Event |
| `listCalendar` | GET | `/api/v1/event/calendar` | Get Calendar Events |
| `getSocialFeed` | GET | `/api/v1/event/social/feed` | Get Social Feed |
| `filterAdvanced` | POST | `/api/v1/event/filter` | Filter Events Advanced |
| `listBySpace` | GET | `/api/v1/event/space/{space_id}` | Get Events By Space |
| `delete` | DELETE | `/api/v1/event/{event_id}` | Delete Event |
| `patchIdentification` | PATCH | `/api/v1/event/{event_id}/identification` | Patch Event Identification |
| `getSectionIdentification` | GET | `/api/v1/event/{event_id}/section/identification` | Get Section Identification |
| `getSectionContent` | GET | `/api/v1/event/{event_id}/section/content` | Get Section Content |
| `patchContent` | PATCH | `/api/v1/event/{event_id}/content` | Patch Event Content |
| `patchSettings` | PATCH | `/api/v1/event/{event_id}/settings` | Patch Event Settings |
| `getSettings` | GET | `/api/v1/event/{event_id}/settings` | Get Event Settings |
| `updateCover` | PATCH | `/api/v1/event/{event_id}/cover` | Update Cover |
| `publish` | PATCH | `/api/v1/event/{event_id}/publish` | Publish Event |
| `publishWithNotifications` | POST | `/api/v1/event/{event_id}/publish-with-notifications` | Publish Event With Notifications |
| `archive` | PATCH | `/api/v1/event/{event_id}/archive` | Archive Event |
| `transfer` | POST | `/api/v1/event/{event_id}/transfer` | Transfer Event |
| `publishVersion` | POST | `/api/v1/event/{event_id}/versions/publish` | Publish Event Version |
| `listVersions` | GET | `/api/v1/event/{event_id}/versions` | List Event Versions |
| `rollbackVersion` | POST | `/api/v1/event/{event_id}/versions/rollback` | Rollback Event to Version |
| `getTimezones` | GET | `/api/v1/event/timezones/` | Get Timezone Info |