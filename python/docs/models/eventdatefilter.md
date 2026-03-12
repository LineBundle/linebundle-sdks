# EventDateFilter

Date-based filtering options for events.


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `start_date`                                                         | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_minus_sign:                                                   | Filter events starting after this date                               |
| `end_date`                                                           | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_minus_sign:                                                   | Filter events ending before this date                                |
| `created_after`                                                      | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_minus_sign:                                                   | Filter events created after this date                                |
| `created_before`                                                     | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_minus_sign:                                                   | Filter events created before this date                               |
| `date_operator`                                                      | [Optional[models.FilterOperator]](../models/filteroperator.md)       | :heavy_minus_sign:                                                   | Supported filter operators for building query conditions.            |