# CombinedMetadataResponse

Combined response with all metadata types.

## Example Usage

```typescript
import { CombinedMetadataResponse } from "openapi/models";

let value: CombinedMetadataResponse = {
  triggers: [
    {
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
    },
  ],
  conditions: [
    {
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
    },
  ],
  actions: [
    {
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
    },
  ],
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `triggers`                                          | [models.TaskMetadata](../models/task-metadata.md)[] | :heavy_check_mark:                                  | N/A                                                 |
| `conditions`                                        | [models.TaskMetadata](../models/task-metadata.md)[] | :heavy_check_mark:                                  | N/A                                                 |
| `actions`                                           | [models.TaskMetadata](../models/task-metadata.md)[] | :heavy_check_mark:                                  | N/A                                                 |