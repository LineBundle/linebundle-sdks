# Health

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `checkAutomation` | GET | `/api/v1/automation/health` | Automation Health Check |
| `check` | GET | `/health` | Health Check |

---

## `checkAutomation`

Automation Health Check

**GET** `/api/v1/automation/health`

**Signature:** `lb.health.checkAutomation()`

*No parameters.*


**Returns:**

**Response:** Successful Response

---

## `check`

Health Check

**GET** `/health`

**Signature:** `lb.health.check({ query?: \{ shallow, deep \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `shallow` | query | boolean |  |  |
| `deep` | query | boolean |  |  |


**Returns:**

**Response:** Successful Response

---
