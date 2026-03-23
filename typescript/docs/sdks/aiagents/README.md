# AiAgents

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `getOrgCosts` | GET | `/api/v1/ai/costs` | Get organization-wide cost summary |

---

## `getOrgCosts`

Get organization-wide cost summary

**GET** `/api/v1/ai/costs`

**Signature:** `lb.aiAgents.getOrgCosts({ query?: \{ start_date, end_date \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `start_date` | query | string | null |  | Start date filter (ISO format) |
| `end_date` | query | string | null |  | End date filter (ISO format) |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `summary` | object |  |
| `by_user` | Array<object> | Cost breakdown by user |

---
