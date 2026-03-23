# Space

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `testAuth` | GET | `/api/v1/space/test-auth` | Test Auth |
| `update` | PUT | `/api/v1/space/{space_id}` | Update Space |
| `publish` | PATCH | `/api/v1/space/{space_id}/publish` | Publish Space |
| `archive` | PATCH | `/api/v1/space/{space_id}/archive` | Archive Space |
| `updateMemberRole` | PATCH | `/api/v1/space/{space_id}/members/{user_id}` | Update Space Member Role |
| `transfer` | POST | `/api/v1/space/{space_id}/transfer` | Transfer Space |
| `bulkUpdateParent` | PATCH | `/api/v1/space/bulk-parent` | Bulk Update Space Parent |
| `getLatestVersion` | GET | `/api/v1/space/{space_id}/versions/latest` | Get latest published space version |
| `assignUserToRole` | POST | `/api/v1/space/spaces/{space_id}/members/{user_id}/roles` | Assign User To Space Role |
| `getUserRoles` | GET | `/api/v1/space/spaces/{space_id}/members/{user_id}/roles` | Get User Space Roles |