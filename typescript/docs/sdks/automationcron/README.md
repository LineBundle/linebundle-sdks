# AutomationCron

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `triggerScheduled` | POST | `/api/v1/automation/api/v1/automation/cron/trigger-scheduled` | Trigger Scheduled Automation |
| `healthCheck` | GET | `/api/v1/automation/api/v1/automation/cron/health` | Cron Health Check |

---

## `triggerScheduled`

Trigger Scheduled Automation

**POST** `/api/v1/automation/api/v1/automation/cron/trigger-scheduled`

**Signature:** `lb.automationCron.triggerScheduled()`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `X-Automation-Key` | header | string | ✓ |  |


**Returns:**

**Response:** Successful Response

---

## `healthCheck`

Cron Health Check

**GET** `/api/v1/automation/api/v1/automation/cron/health`

**Signature:** `lb.automationCron.healthCheck()`

*No parameters.*


**Returns:**

**Response:** Successful Response

---
