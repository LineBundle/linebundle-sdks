# ChatMessages

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `list` | GET | `/api/v1/chat/{room_id}/messages/` | List Messages |
| `delete` | DELETE | `/api/v1/chat/messages/{message_id}` | Delete Message |
| `getCount` | GET | `/api/v1/chat/{room_id}/messages/count` | Get Message Count |
| `markRead` | PATCH | `/api/v1/chat/{room_id}/read` | Mark Messages As Read |
| `getUnreadCount` | GET | `/api/v1/chat/{room_id}/unread-count` | Get Unread Count |