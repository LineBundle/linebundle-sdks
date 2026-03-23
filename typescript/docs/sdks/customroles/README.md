# CustomRoles

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `list` | GET | `/api/v1/roles` | List Roles Endpoint |
| `create` | POST | `/api/v1/roles` | Create Role Endpoint |
| `get` | GET | `/api/v1/roles/{role_id}` | Get Role Endpoint |
| `update` | PUT | `/api/v1/roles/{role_id}` | Update Role Endpoint |
| `addPermission` | POST | `/api/v1/roles/{role_id}/permissions` | Add Permission Endpoint |
| `setPermissions` | PUT | `/api/v1/roles/{role_id}/permissions` | Set Permissions Endpoint |
| `removePermission` | DELETE | `/api/v1/roles/{role_id}/permissions/{permission_code}` | Remove Permission Endpoint |
| `getMyPermissions` | GET | `/api/v1/roles/me/permissions` | Get My Permissions Endpoint |
| `assignToUser` | POST | `/api/v1/roles/users/{user_id}/roles` | Assign Role To User Endpoint |
| `removeUserRole` | DELETE | `/api/v1/roles/users/{user_id}/roles/{role_id}` | Remove Role From User Endpoint |