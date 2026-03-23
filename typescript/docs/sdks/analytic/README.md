# Analytic

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `getTotals` | GET | `/api/v1/analytic/counts` | Get Analytic Totals |
| `getDashboard` | GET | `/api/v1/analytic/dashboard` | Get Dashboard Analytics |

---

## `getTotals`

Get Analytic Totals

**GET** `/api/v1/analytic/counts`

**Signature:** `lb.analytic.getTotals()`

*No parameters.*


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `event` | object |  |
| `place` | object |  |
| `space` | object |  |

---

## `getDashboard`

Get Dashboard Analytics

**GET** `/api/v1/analytic/dashboard`

**Signature:** `lb.analytic.getDashboard()`

*No parameters.*


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `pulse` | object |  |
| `spaces` | Array<object> |  |
| `total_spaces` | integer |  |

---
