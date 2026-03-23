# AutomationRules

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `getMetadata` | GET | `/api/v1/automation/metadata` | Get all metadata |
| `getConditions` | GET | `/api/v1/automation/metadata/conditions` | Get condition metadata |
| `create` | POST | `/api/v1/automation/rules` | Create Rule |
| `list` | GET | `/api/v1/automation/rules` | List Rules |
| `get` | GET | `/api/v1/automation/rules/{rule_id}` | Get Rule |
| `update` | PUT | `/api/v1/automation/rules/{rule_id}` | Update Rule |
| `patch` | PATCH | `/api/v1/automation/rules/{rule_id}` | Patch Rule |
| `delete` | DELETE | `/api/v1/automation/rules/{rule_id}` | Delete Rule |
| `execute` | POST | `/api/v1/automation/rules/{rule_id}/execute` | Execute Rule |
| `getExecutions` | GET | `/api/v1/automation/rules/{rule_id}/executions` | Get Rule Executions |