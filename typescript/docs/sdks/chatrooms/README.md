# ChatRooms

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `createDirect` | POST | `/api/v1/chat/rooms/direct` | Create Direct Room |
| `createGroup` | POST | `/api/v1/chat/rooms/group` | Create Group Room |
| `list` | GET | `/api/v1/chat/rooms/` | List User Rooms |
| `getById` | GET | `/api/v1/chat/rooms/{room_id}` | Get Room By Id |
| `update` | PATCH | `/api/v1/chat/rooms/{room_id}` | Update Room |
| `addMember` | POST | `/api/v1/chat/rooms/{room_id}/members` | Add Member To Room |
| `listMembers` | GET | `/api/v1/chat/rooms/{room_id}/members` | List Room Members |
| `removeMember` | DELETE | `/api/v1/chat/rooms/{room_id}/members/{user_id}` | Remove Member From Room |