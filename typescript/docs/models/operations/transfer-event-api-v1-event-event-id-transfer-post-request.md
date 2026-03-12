# TransferEventApiV1EventEventIdTransferPostRequest

## Example Usage

```typescript
import { TransferEventApiV1EventEventIdTransferPostRequest } from "openapi/models/operations";

let value: TransferEventApiV1EventEventIdTransferPostRequest = {
  eventId: 422659,
  body: {
    targetOrgId: "e55fc775-e09e-4e85-9a9e-a9d9a80f4973",
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `eventId`                                                             | *number*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `body`                                                                | [models.TransferEventRequest](../../models/transfer-event-request.md) | :heavy_check_mark:                                                    | N/A                                                                   |