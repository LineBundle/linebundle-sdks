# AI

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `deleteSession` | DELETE | `/api/v1/ai/sessions/{session_id}` | Delete AI agent session |

---

## `deleteSession`

Delete AI agent session

**DELETE** `/api/v1/ai/sessions/{session_id}`

**Signature:** `lb.aI.deleteSession({ path: \{ session_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `session_id` | path | string (uuid) | ✓ |  |

---
