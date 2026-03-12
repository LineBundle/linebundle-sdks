# TaskMetadata

Metadata describing an automation task (trigger, condition, or action).

## Example Usage

```typescript
import { TaskMetadata } from "openapi/models";

let value: TaskMetadata = {
  taskType: "send_email_notification",
  category: "action",
  name: "Send Email",
  description: "Send an email notification to specified recipient",
  icon: "Mail",
  tags: [
    "notification",
    "email",
  ],
  configSchema: {
    "properties": {
      "recipient_email": {
        "description": "Email address of recipient",
        "format": "email",
        "title": "Recipient Email",
        "type": "string",
      },
      "subject": {
        "description": "Email subject line",
        "title": "Subject",
        "type": "string",
      },
      "body": {
        "description": "Email body content",
        "title": "Message",
        "type": "string",
        "ui_component": "textarea",
      },
    },
    "required": [
      "subject",
      "body",
    ],
    "type": "object",
  },
  examples: [
    {
      "config": {
        "body": "Your event {event_name} starts in {hours} hours",
        "subject": "Event starting soon: {event_name}",
      },
      "name": "Event reminder",
    },
  ],
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `taskType`                                                                  | *string*                                                                    | :heavy_check_mark:                                                          | Unique task identifier (e.g., 'send_email_notification')                    |
| `category`                                                                  | [models.Category](../models/category.md)                                    | :heavy_check_mark:                                                          | Task category                                                               |
| `name`                                                                      | *string*                                                                    | :heavy_check_mark:                                                          | Human-readable task name                                                    |
| `description`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | Task description for users                                                  |
| `icon`                                                                      | *string*                                                                    | :heavy_minus_sign:                                                          | Icon identifier (lucide-react icon name)                                    |
| `tags`                                                                      | *string*[]                                                                  | :heavy_minus_sign:                                                          | Tags for categorization                                                     |
| `configSchema`                                                              | Record<string, *any*>                                                       | :heavy_check_mark:                                                          | JSON Schema defining task configuration structure                           |
| `uiConfig`                                                                  | Record<string, *any*>                                                       | :heavy_minus_sign:                                                          | UI-specific configuration (layout hints, grouping, etc.)                    |
| `examples`                                                                  | Record<string, *any*>[]                                                     | :heavy_minus_sign:                                                          | Example configurations for this task                                        |
| `requiresOrgContext`                                                        | *boolean*                                                                   | :heavy_minus_sign:                                                          | Whether task requires organization context (not available in personal mode) |
| `requiresEventScope`                                                        | *boolean*                                                                   | :heavy_minus_sign:                                                          | Whether task requires event scope                                           |
| `version`                                                                   | *string*                                                                    | :heavy_minus_sign:                                                          | Task version                                                                |