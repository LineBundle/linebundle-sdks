# PublishEventWithNotificationsRequest


## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `notify_attendees`                                                          | *Optional[bool]*                                                            | :heavy_minus_sign:                                                          | Whether to notify attendees about the publication                           |
| `notification_channels`                                                     | List[*str*]                                                                 | :heavy_minus_sign:                                                          | List of channels to use for notification (e.g., 'EMAIL', 'SMS', 'WHATSAPP') |