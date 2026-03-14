# CreateOnlineMeetingRequest

## Example Usage

```typescript
import { CreateOnlineMeetingRequest } from "@linebundle-sdk/ts/models";

let value: CreateOnlineMeetingRequest = {
  title: "<value>",
  description: "tender lest persecute towards tomorrow chatter",
  visibility: 565670,
  placeType: "online_meeting",
  meetingUrl: "https://utter-hydrolyze.net",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `title`            | *string*           | :heavy_check_mark: | Place title        |
| `description`      | *string*           | :heavy_check_mark: | Place description  |
| `visibility`       | *number*           | :heavy_check_mark: | Visibility level   |
| `keywords`         | *string*[]         | :heavy_minus_sign: | Keywords           |
| `placeType`        | *"online_meeting"* | :heavy_check_mark: | Place type         |
| `meetingUrl`       | *string*           | :heavy_check_mark: | Meeting URL        |