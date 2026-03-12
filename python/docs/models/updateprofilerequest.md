# UpdateProfileRequest

Profile update - only avatar and username can be changed locally.
Note: first_name and last_name are managed by external auth (Zitadel).


## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `username`              | *OptionalNullable[str]* | :heavy_minus_sign:      | Username                |
| `avatar_url`            | *OptionalNullable[str]* | :heavy_minus_sign:      | Avatar URL              |