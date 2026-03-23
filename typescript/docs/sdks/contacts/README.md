# Contacts

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `list` | GET | `/api/v1/contacts` | List Contacts |
| `create` | POST | `/api/v1/contacts` | Create Contact |
| `search` | GET | `/api/v1/contacts/search` | Search Contacts |
| `get` | GET | `/api/v1/contacts/{contact_id}` | Get Contact |
| `update` | PUT | `/api/v1/contacts/{contact_id}` | Update Contact |
| `delete` | DELETE | `/api/v1/contacts/{contact_id}` | Delete Contact |
| `toggleFavorite` | PATCH | `/api/v1/contacts/{contact_id}/favorite` | Toggle Favorite |