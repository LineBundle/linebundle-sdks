# PublishEventWithNotificationsRequest

## Example Usage

```typescript
import { PublishEventWithNotificationsRequest } from "@linebundle-sdk/ts/models";

let value: PublishEventWithNotificationsRequest = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `notifyAttendees`                                                           | *boolean*                                                                   | :heavy_minus_sign:                                                          | Whether to notify attendees about the publication                           |
| `notificationChannels`                                                      | *string*[]                                                                  | :heavy_minus_sign:                                                          | List of channels to use for notification (e.g., 'EMAIL', 'SMS', 'WHATSAPP') |