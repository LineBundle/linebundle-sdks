# Spaces

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `list` | GET | `/api/v1/space/` | Get Space List |
| `createSpace` | POST | `/api/v1/space/` | Create Space |
| `getById` | GET | `/api/v1/space/{space_id}` | Get Space By Id |
| `deleteById` | DELETE | `/api/v1/space/{space_id}` | Delete Space |
| `createWithParent` | POST | `/api/v1/space/with-parent` | Create Space With Parent |
| `publishVersion` | POST | `/api/v1/space/{space_id}/publish` | Publish space |
| `getMembers` | GET | `/api/v1/space/{space_id}/members` | Get Space Members |
| `addMember` | POST | `/api/v1/space/{space_id}/members` | Add Space Member |
| `removeMember` | DELETE | `/api/v1/space/{space_id}/members/{user_id}` | Remove Space Member |
| `getJoinableByUser` | GET | `/api/v1/space/by-user/{user_id}/joinable` | Get Joinable Spaces By User |
| `join` | POST | `/api/v1/space/{space_id}/join` | Join Space |
| `listChildren` | GET | `/api/v1/space/{space_id}/children` | Get Space Children |
| `getParent` | GET | `/api/v1/space/{space_id}/parent` | Get Space Parent |
| `updateParent` | PATCH | `/api/v1/space/{space_id}/parent` | Update Space Parent |
| `detachParent` | DELETE | `/api/v1/space/{space_id}/parent` | Detach Space From Parent |
| `getHierarchy` | GET | `/api/v1/space/{space_id}/hierarchy` | Get Space Hierarchy |
| `unpublish` | POST | `/api/v1/space/{space_id}/unpublish` | Unpublish space |
| `listVersions` | GET | `/api/v1/space/{space_id}/versions` | List space versions |
| `getVersion` | GET | `/api/v1/space/{space_id}/versions/{version_number}` | Get specific space version |
| `compareVersions` | GET | `/api/v1/space/{space_id}/versions/compare` | Compare space versions |
| `rollback` | POST | `/api/v1/space/{space_id}/rollback` | Rollback space to version |
| `removeUserFromRole` | DELETE | `/api/v1/space/spaces/{space_id}/members/{user_id}/roles/{space_role_id}` | Remove User From Space Role |