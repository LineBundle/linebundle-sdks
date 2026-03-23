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

---

## `getMetadata`

Get all metadata

**GET** `/api/v1/automation/metadata`

**Signature:** `lb.automationRules.getMetadata()`

*No parameters.*


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `triggers` | Array<object> |  |
| `conditions` | Array<object> |  |
| `actions` | Array<object> |  |

---

## `getConditions`

Get condition metadata

**GET** `/api/v1/automation/metadata/conditions`

**Signature:** `lb.automationRules.getConditions()`

*No parameters.*


**Returns:**

**Response:** `Array<object>`

---

## `create`

Create Rule

**POST** `/api/v1/automation/rules`

**Signature:** `lb.automationRules.create({ body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `name` | body | string | ✓ |  |
| `description` | body | string | null |  |  |
| `scope` | body | string | ✓ | EVENT, TIMELINE, SPACE, ORGANIZATION |
| `scope_id` | body | string (uuid) | null |  |  |
| `enabled` | body | boolean |  |  |
| `priority` | body | integer |  |  |
| `conditions` | body | object | ✓ | Condition group structure |
| `actions` | body | Array<object> | ✓ | List of actions |
| `schedule` | body | object | ✓ | Schedule configuration |
| `constraints` | body | object | null |  |  |
| `metadata` | body | object | null |  |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string (uuid) |  |
| `org_id` | string (uuid) | null |  |
| `creator_id` | string |  |
| `name` | string |  |
| `description` | string | null |  |
| `scope` | string |  |
| `scope_id` | string (uuid) | null |  |
| `enabled` | boolean |  |
| `priority` | integer |  |
| `conditions` | object |  |
| `actions` | Array<object> |  |
| `schedule` | object |  |
| `constraints` | object | null |  |
| `rule_metadata` | object | null |  |
| `version` | integer |  |
| `created_at` | string (date-time) |  |
| `updated_at` | string (date-time) |  |
| `scope_mode` | string | null |  |

---

## `list`

List Rules

**GET** `/api/v1/automation/rules`

**Signature:** `lb.automationRules.list({ query?: \{ enabled_only, scope, scope_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `enabled_only` | query | boolean |  |  |
| `scope` | query | string | null |  |  |
| `scope_id` | query | string | null |  |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `rules` | Array<object> |  |
| `total` | integer |  |

---

## `get`

Get Rule

**GET** `/api/v1/automation/rules/{rule_id}`

**Signature:** `lb.automationRules.get({ path: \{ rule_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `rule_id` | path | string (uuid) | ✓ |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string (uuid) |  |
| `org_id` | string (uuid) | null |  |
| `creator_id` | string |  |
| `name` | string |  |
| `description` | string | null |  |
| `scope` | string |  |
| `scope_id` | string (uuid) | null |  |
| `enabled` | boolean |  |
| `priority` | integer |  |
| `conditions` | object |  |
| `actions` | Array<object> |  |
| `schedule` | object |  |
| `constraints` | object | null |  |
| `rule_metadata` | object | null |  |
| `version` | integer |  |
| `created_at` | string (date-time) |  |
| `updated_at` | string (date-time) |  |
| `scope_mode` | string | null |  |

---

## `update`

Update Rule

**PUT** `/api/v1/automation/rules/{rule_id}`

**Signature:** `lb.automationRules.update({ path: \{ rule_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `rule_id` | path | string (uuid) | ✓ |  |
| `name` | body | string | null |  |  |
| `description` | body | string | null |  |  |
| `enabled` | body | boolean | null |  |  |
| `priority` | body | integer | null |  |  |
| `conditions` | body | object | null |  |  |
| `actions` | body | Array<object> | null |  |  |
| `schedule` | body | object | null |  |  |
| `constraints` | body | object | null |  |  |
| `metadata` | body | object | null |  |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string (uuid) |  |
| `org_id` | string (uuid) | null |  |
| `creator_id` | string |  |
| `name` | string |  |
| `description` | string | null |  |
| `scope` | string |  |
| `scope_id` | string (uuid) | null |  |
| `enabled` | boolean |  |
| `priority` | integer |  |
| `conditions` | object |  |
| `actions` | Array<object> |  |
| `schedule` | object |  |
| `constraints` | object | null |  |
| `rule_metadata` | object | null |  |
| `version` | integer |  |
| `created_at` | string (date-time) |  |
| `updated_at` | string (date-time) |  |
| `scope_mode` | string | null |  |

---

## `patch`

Patch Rule

**PATCH** `/api/v1/automation/rules/{rule_id}`

**Signature:** `lb.automationRules.patch({ path: \{ rule_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `rule_id` | path | string (uuid) | ✓ |  |
| `name` | body | string | null |  |  |
| `description` | body | string | null |  |  |
| `enabled` | body | boolean | null |  |  |
| `priority` | body | integer | null |  |  |
| `conditions` | body | object | null |  |  |
| `actions` | body | Array<object> | null |  |  |
| `schedule` | body | object | null |  |  |
| `constraints` | body | object | null |  |  |
| `metadata` | body | object | null |  |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string (uuid) |  |
| `org_id` | string (uuid) | null |  |
| `creator_id` | string |  |
| `name` | string |  |
| `description` | string | null |  |
| `scope` | string |  |
| `scope_id` | string (uuid) | null |  |
| `enabled` | boolean |  |
| `priority` | integer |  |
| `conditions` | object |  |
| `actions` | Array<object> |  |
| `schedule` | object |  |
| `constraints` | object | null |  |
| `rule_metadata` | object | null |  |
| `version` | integer |  |
| `created_at` | string (date-time) |  |
| `updated_at` | string (date-time) |  |
| `scope_mode` | string | null |  |

---

## `delete`

Delete Rule

**DELETE** `/api/v1/automation/rules/{rule_id}`

**Signature:** `lb.automationRules.delete({ path: \{ rule_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `rule_id` | path | string (uuid) | ✓ |  |

---

## `execute`

Execute Rule

**POST** `/api/v1/automation/rules/{rule_id}/execute`

**Signature:** `lb.automationRules.execute({ path: \{ rule_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `rule_id` | path | string (uuid) | ✓ |  |
| `trigger_type` | body | string |  |  |
| `trigger_context` | body | object |  |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `execution_id` | string (uuid) |  |
| `status` | string |  |
| `conditions_met` | boolean | null |  |
| `condition_results` | Array<object> | null |  |
| `action_results` | Array<object> | null |  |
| `error` | string | null |  |
| `cached` | boolean |  |

---

## `getExecutions`

Get Rule Executions

**GET** `/api/v1/automation/rules/{rule_id}/executions`

**Signature:** `lb.automationRules.getExecutions({ path: \{ rule_id \}, query?: \{ limit \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `rule_id` | path | string (uuid) | ✓ |  |
| `limit` | query | integer |  |  |


**Returns:**

**Response:** `Array<object>`

---
