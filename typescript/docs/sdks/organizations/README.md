# Organizations

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `create` | POST | `/api/v1/organizations` | Create Organization |
| `list` | GET | `/api/v1/organizations` | List Organizations |
| `getCurrent` | GET | `/api/v1/organizations/me` | Get Current Organization |
| `getInvites` | GET | `/api/v1/organizations/{org_id}/invites` | Get Organization Invites Endpoint |
| `createInvite` | POST | `/api/v1/organizations/{org_id}/invites` | Create Invite |
| `deleteInvite` | DELETE | `/api/v1/organizations/{org_id}/invites/{invite_id}` | Delete Invite |
| `getById` | GET | `/api/v1/organizations/{org_id}` | Get Organization By Id |
| `update` | PUT | `/api/v1/organizations/{org_id}` | Update Organization |
| `archive` | DELETE | `/api/v1/organizations/{org_id}` | Archive Organization Endpoint |