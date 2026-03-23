# SpaceRoles

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `create` | POST | `/api/v1/space/spaces/{space_id}/roles/` | Create Space Role |
| `listRoles` | GET | `/api/v1/space/spaces/{space_id}/roles/` | List Space Roles |
| `get` | GET | `/api/v1/space/spaces/{space_id}/roles/{role_id}` | Get Space Role |
| `updateRole` | PUT | `/api/v1/space/spaces/{space_id}/roles/{role_id}` | Update Space Role |
| `delete` | DELETE | `/api/v1/space/spaces/{space_id}/roles/{role_id}` | Delete Space Role |
| `assignPermission` | POST | `/api/v1/space/spaces/{space_id}/roles/{role_id}/permissions` | Assign Permission To Space Role |
| `removePermission` | DELETE | `/api/v1/space/spaces/{space_id}/roles/{role_id}/permissions/{permission_id}` | Remove Permission From Space Role |