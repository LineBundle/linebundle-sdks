# SpaceContacts

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `getContactsBySpace` | GET | `/api/v1/spaces/{space_id}/contacts` | Get Space Contacts |
| `add` | POST | `/api/v1/spaces/{space_id}/contacts` | Add Contact To Space |
| `getSpacesByContact` | GET | `/api/v1/contacts/{contact_id}/spaces` | Get Contact Spaces |
| `get` | GET | `/api/v1/space-contacts/{space_contact_id}` | Get Space Contact |
| `remove` | DELETE | `/api/v1/space-contacts/{space_contact_id}` | Remove Contact From Space |
| `addBulk` | POST | `/api/v1/spaces/{space_id}/contacts/bulk` | Bulk Add Contacts To Space |
| `bulkDelete` | DELETE | `/api/v1/spaces/{space_id}/contacts/bulk` | Bulk Remove Contacts From Space |
| `count` | GET | `/api/v1/spaces/{space_id}/contacts/count` | Count Space Contacts |