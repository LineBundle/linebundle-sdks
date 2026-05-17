# Events

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `attachments.remove` | DELETE | `/api/v1/attachments/{id}` | Remove an attachment |
| `list` | GET | `/api/v1/events` | List events |
| `create` | POST | `/api/v1/events` | Create an event |
| `calendar` | GET | `/api/v1/events/calendar` | List events overlapping a date range (calendar view) |
| `managerPermissions` | GET | `/api/v1/events/manager-permissions` | List all assignable event manager permissions |
| `acceptManagerInvite` | POST | `/api/v1/events/managers/accept` | Accept an event manager invite via token |
| `listPendingManagerInvites` | GET | `/api/v1/events/managers/pending` | List pending event manager invites for the current user |
| `createWithSeries` | POST | `/api/v1/events/with-series` | Create an event and optionally a recurring series in one atomic call |
| `activity.list` | GET | `/api/v1/events/{event_id}/activity` | List activity for an event |
| `activity.append` | POST | `/api/v1/events/{event_id}/activity` | Append an activity row |
| `attachments.list` | GET | `/api/v1/events/{event_id}/attachments` | List attachments on an event |
| `attachments.add` | POST | `/api/v1/events/{event_id}/attachments` | Attach a file / reference to an event |
| `participants.list` | GET | `/api/v1/events/{event_id}/participants` | List participants on an event |
| `participants.add` | POST | `/api/v1/events/{event_id}/participants` | Add a participant to an event |
| `delete` | DELETE | `/api/v1/events/{id}` | Delete an event |
| `get` | GET | `/api/v1/events/{id}` | Get an event |
| `patch` | PATCH | `/api/v1/events/{id}` | Partial-update an event (merge-patch) |
| `update` | PUT | `/api/v1/events/{id}` | Update an event |
| `archive` | POST | `/api/v1/events/{id}/archive` | Archive an event |
| `listAttendees` | GET | `/api/v1/events/{id}/attendees` | List event attendees |
| `addAttendee` | POST | `/api/v1/events/{id}/attendees` | Add an attendee to an event |
| `bulkRemoveAttendees` | DELETE | `/api/v1/events/{id}/attendees/bulk` | Bulk remove attendees from an event |
| `bulkAddAttendees` | POST | `/api/v1/events/{id}/attendees/bulk` | Bulk add attendees to an event |
| `bulkUpdateAttendeeStatus` | PATCH | `/api/v1/events/{id}/attendees/bulk/status` | Bulk update attendee statuses |
| `removeAttendee` | DELETE | `/api/v1/events/{id}/attendees/{contact_id}` | Remove an attendee from an event |
| `updateAttendeeStatus` | PATCH | `/api/v1/events/{id}/attendees/{contact_id}` | Update attendee status |
| `checkInAttendee` | POST | `/api/v1/events/{id}/attendees/{contact_id}/check-in` | Check in an attendee |
| `listAutomations` | GET | `/api/v1/events/{id}/automations` | List automations attached to an event |
| `createAutomation` | POST | `/api/v1/events/{id}/automations` | Create an automation attached to an event |
| `automationTemplates` | GET | `/api/v1/events/{id}/automations/templates` | List event automation templates |
| `deleteAutomation` | DELETE | `/api/v1/events/{id}/automations/{rule_id}` | Delete an event automation |
| `getAutomation` | GET | `/api/v1/events/{id}/automations/{rule_id}` | Get an event automation |
| `updateAutomation` | PUT | `/api/v1/events/{id}/automations/{rule_id}` | Update an event automation |
| `executeAutomation` | POST | `/api/v1/events/{id}/automations/{rule_id}/execute` | Run an event automation now |
| `listAutomationExecutions` | GET | `/api/v1/events/{id}/automations/{rule_id}/executions` | List execution history for an event automation |
| `uploadCover` | PUT | `/api/v1/events/{id}/cover` | Upload event cover image (multipart/form-data, field: file) |
| `discard` | POST | `/api/v1/events/{id}/discard` | Discard draft, keep published version |
| `listDocuments` | GET | `/api/v1/events/{id}/documents` | List documents linked to an event |
| `removeDocument` | DELETE | `/api/v1/events/{id}/documents/{document_id}` | Unlink a document from an event |
| `addDocument` | POST | `/api/v1/events/{id}/documents/{document_id}` | Link a document to an event |
| `getDraft` | GET | `/api/v1/events/{id}/draft` | Get draft version of an event |
| `startEdit` | POST | `/api/v1/events/{id}/edit` | Start editing (creates draft clone) |
| `listLinks` | GET | `/api/v1/events/{id}/links` | List cross-reference links for this event |
| `addLink` | POST | `/api/v1/events/{id}/links` | Link another event as a cross-reference |
| `removeLink` | DELETE | `/api/v1/events/{id}/links/{target_id}` | Remove a cross-reference link |
| `listManagers` | GET | `/api/v1/events/{id}/managers` | List managers for an event |
| `addManager` | POST | `/api/v1/events/{id}/managers` | Add a manager to an event |
| `inviteManager` | POST | `/api/v1/events/{id}/managers/invite` | Invite a manager to an event by email |
| `removeManager` | DELETE | `/api/v1/events/{id}/managers/{user_id}` | Remove a manager from an event |
| `getManager` | GET | `/api/v1/events/{id}/managers/{user_id}` | Get a single event manager |
| `updateManager` | PUT | `/api/v1/events/{id}/managers/{user_id}` | Update an event manager's permissions |
| `listMilestones` | GET | `/api/v1/events/{id}/milestones` | List milestones for an event |
| `addMilestone` | POST | `/api/v1/events/{id}/milestones` | Add a milestone event to a base event |
| `removeMilestone` | DELETE | `/api/v1/events/{id}/milestones/{milestone_event_id}` | Remove a milestone from an event |
| `patchMilestoneLifecycle` | PATCH | `/api/v1/events/{id}/milestones/{milestone_event_id}` | Update milestone lifecycle status or reset to automatic mode |
| `updateMilestone` | PUT | `/api/v1/events/{id}/milestones/{milestone_event_id}` | Update milestone sequence |
| `publish` | POST | `/api/v1/events/{id}/publish` | Publish an event |
| `deleteSeries` | DELETE | `/api/v1/events/{id}/series` | Remove from series (scope: this | future | all) |
| `getSeries` | GET | `/api/v1/events/{id}/series` | Get series rule and all occurrences for a recurring event |
| `patchSeries` | PATCH | `/api/v1/events/{id}/series` | Update series fields. Cascades to occurrences without overrides. |
| `createSeries` | POST | `/api/v1/events/{id}/series` | Convert an event into the anchor of a new recurring series |
| `inviteSeriesManager` | POST | `/api/v1/events/{id}/series/manager` | Invite series manager |
| `listOccurrences` | GET | `/api/v1/events/{id}/series/occurrences` | List occurrences of the series this event belongs to (paginated) |
| `publishSeries` | POST | `/api/v1/events/{id}/series/publish` | Publish series |
| `listSpaces` | GET | `/api/v1/events/{id}/spaces` | List spaces this event belongs to |
| `addSpace` | POST | `/api/v1/events/{id}/spaces` | Add event to a space |
| `removeSpace` | DELETE | `/api/v1/events/{id}/spaces/{space_id}` | Remove event from a space |
| `transition` | POST | `/api/v1/events/{id}/transition` | Transition an event to a new state per its template's state machine |
| `participants.remove` | DELETE | `/api/v1/participants/{id}` | Remove a participant |

---

## `attachments.remove`

Remove an attachment

**DELETE** `/api/v1/attachments/{id}`

**Signature:** `lb.events.attachments.remove({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Attachment record ID |

---

## `list`

List events

**GET** `/api/v1/events`

**Signature:** `lb.events.list({ query?: \{ page, size, search, sort_by, sort_dir, status, visibility, start_dt_after, start_dt_before, space_ids, template, template_in \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `page` | query | integer |  | Page number (1-based) |
| `size` | query | integer |  | Items per page |
| `search` | query | string |  | Search term |
| `sort_by` | query | string |  | Field to sort by |
| `sort_dir` | query | `"asc"` | `"desc"` |  | Sort direction |
| `status` | query | `"published"` | `"draft"` |  | Filter by publish status. Omit to return both published and standalone drafts. |
| `visibility` | query | integer |  | Filter by visibility level: 10=private, 20=members-only, 30=organization, 40=public. Omit or pass 0 to return all visibl |
| `start_dt_after` | query | string (date-time) |  | Return only events whose start date is at or after this datetime (UTC ISO-8601). Omit for no lower bound. |
| `start_dt_before` | query | string (date-time) |  | Return only events whose start date is at or before this datetime (UTC ISO-8601). Omit for no upper bound. |
| `space_ids` | query | ['array', 'null'] |  | Filter to events belonging to any of these space IDs (repeatable). Omit or pass empty to return events from all spaces. |
| `template` | query | string |  | Filter to events of this exact template id (e.g. 'announcement'). Omit for no filter. |
| `template_in` | query | ['array', 'null'] |  | Filter to events whose template is in this list (repeatable). Combined with Template via OR if both are set. |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `items` | ['array', 'null'] | List of results |
| `page` | integer | Current page (1-based) |
| `size` | integer | Page size |
| `total` | integer | Total matching records |

---

## `create`

Create an event

**POST** `/api/v1/events`

**Signature:** `lb.events.create({ body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `address` | body | string |  | Venue address |
| `description` | body | string |  | Event description |
| `end_dt` | body | string (date-time) |  | End datetime (UTC) |
| `keywords` | body | ['array', 'null'] |  | Search keywords |
| `latitude` | body | number |  | Venue latitude |
| `longitude` | body | number |  | Venue longitude |
| `metadata` | body | object |  | Flexible metadata (theme, cover, etc.) |
| `parent_event_id` | body | integer |  | Parent event ID |
| `start_dt` | body | string (date-time) |  | Start datetime (UTC) |
| `template` | body | string |  | Event template id (kind). Server defaults to 'generic' when omitted. |
| `template_version` | body | integer |  | Pin to a specific template version. When omitted, server uses the registry's latest. |
| `timezone` | body | string |  | IANA timezone |
| `title` | body | string | ✓ | Event title |
| `visibility` | body | integer |  | Visibility: 10=private, 20=members-only, 30=organization, 40=public |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `address` | string | Venue address |
| `created_at` | string (date-time) | Created timestamp |
| `created_dt` | string (date-time) | Business creation date |
| `creator_id` | string | Creator profile ID |
| `description` | string | Event description |
| `description_override` | string | Local description override |
| `end_dt` | string (date-time) | End datetime (UTC) |
| `id` | integer | Event ID |
| `is_deleted` | boolean | Soft-deleted flag |
| `is_locked` | boolean | Locked from editing |
| `keywords` | ['array', 'null'] | Search keywords |
| `latitude` | number | Venue latitude |
| `longitude` | number | Venue longitude |
| `metadata` | object | Flexible JSONB metadata (theme, cover, etc.) |
| `metadata_override` | object | Local metadata override (merged with series metadata) |
| `org_id` | string | Organization ID |
| `parent_event_id` | integer | Parent event ID (milestones) |
| `priority` | integer | Open numeric priority axis used by priority-aware templates. |
| `published_at` | string (date-time) | When last published |
| `published_id` | integer | For draft rows: ID of the published row this was cloned from |
| `series_id` | integer | Series ID; set when this event is part of a recurring series |
| `series_index` | integer | Position within the series (0 = anchor occurrence) |
| `series_title` | string | Canonical title from the series master row |
| `spaces` | ['array', 'null'] | Spaces this event belongs to (populated in list responses) |
| `start_dt` | string (date-time) | Start datetime (UTC) |
| `state` | string | Current node of the template's state machine; nil when the template has none. |
| `status` | `"draft"` | `"published"` | `"archived"` | Publish status |
| `template` | string | Event template id (kind discriminator). Defaults to 'generic'. |
| `template_version` | integer | Schema version of the chosen template. 0 = legacy/pre-template; 1+ = explicit. |
| `timezone` | string | IANA timezone |
| `title` | string | Event title |
| `title_override` | string | Local title override (takes precedence over series title) |
| `updated_at` | string (date-time) | Updated timestamp |
| `version` | integer | Version counter, incremented on each publish |
| `visibility` | integer | Visibility: 10=private, 20=members-only, 30=organization, 40=public |

---

## `calendar`

List events overlapping a date range (calendar view)

**GET** `/api/v1/events/calendar`

**Signature:** `lb.events.calendar({ query?: \{ start_date, end_date, sort_by, sort_order \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `start_date` | query | string | ✓ | Range start date (YYYY-MM-DD) |
| `end_date` | query | string | ✓ | Range end date (YYYY-MM-DD, inclusive) |
| `sort_by` | query | string |  | Field to sort by (start_dt, title) |
| `sort_order` | query | `"asc"` | `"desc"` |  | Sort direction |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `items` | ['array', 'null'] | Events overlapping the requested date range |
| `next_cursor` | ['string', 'null'] | Always null — calendar results are not paginated |

---

## `managerPermissions`

List all assignable event manager permissions

**GET** `/api/v1/events/manager-permissions`

**Signature:** `lb.events.managerPermissions()`

*No parameters.*


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `permissions` | ['array', 'null'] | All assignable event manager permissions |

---

## `acceptManagerInvite`

Accept an event manager invite via token

**POST** `/api/v1/events/managers/accept`

**Signature:** `lb.events.acceptManagerInvite({ body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `token` | body | string | ✓ | Invite token from the email link |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `accepted_at` | string (date-time) | When the invite was accepted |
| `created_at` | string (date-time) | Created timestamp |
| `event_id` | integer | Event ID (when managing a specific occurrence) |
| `expires_at` | string (date-time) | When the pending invite expires (7 days from invite) |
| `id` | integer | Record ID |
| `invite_token` | string | Opaque token embedded in the invite email link |
| `invited_at` | string (date-time) | When the invite was (last) sent |
| `invited_by` | string | Profile ID of the user who sent the invite |
| `invited_email` | string | Email address the invite was sent to |
| `org_id` | string | Organization ID |
| `permissions` | ['array', 'null'] | Assigned event manager permissions |
| `role` | string | Pre-defined role bundle name (e.g. event_manager:full); NULL for custom permission combinations. |
| `series_id` | integer | Series ID (when managing all occurrences in a series) |
| `status` | `"pending"` | `"active"` | `"revoked"` | Lifecycle status: pending, active, revoked |
| `updated_at` | string (date-time) | Updated timestamp |
| `user_id` | string | Profile ID of the manager |

---

## `listPendingManagerInvites`

List pending event manager invites for the current user

**GET** `/api/v1/events/managers/pending`

**Signature:** `lb.events.listPendingManagerInvites()`

*No parameters.*


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `items` | ['array', 'null'] | List of pending event manager invitations |

---

## `createWithSeries`

Create an event and optionally a recurring series in one atomic call

**POST** `/api/v1/events/with-series`

**Signature:** `lb.events.createWithSeries({ body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `address` | body | string |  | Venue address |
| `description` | body | string |  | Event description |
| `end_dt` | body | string (date-time) |  | End datetime (UTC) |
| `keywords` | body | ['array', 'null'] |  | Search keywords |
| `latitude` | body | number |  | Venue latitude |
| `longitude` | body | number |  | Venue longitude |
| `metadata` | body | object |  | Flexible metadata |
| `parent_event_id` | body | integer |  | Parent event ID |
| `series` | body | object |  |  |
| `start_dt` | body | string (date-time) |  | Start datetime (UTC) |
| `timezone` | body | string |  | IANA timezone |
| `title` | body | string | ✓ | Event title |
| `visibility` | body | integer |  | Visibility: 10=private, 20=members-only, 30=organization, 40=public |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `event` | object |  |
| `occurrences` | ['array', 'null'] | All series occurrences including the anchor (only present when series was created) |

---

## `activity.list`

List activity for an event

**GET** `/api/v1/events/{event_id}/activity`

**Signature:** `lb.events.activity.list({ path: \{ event_id \}, query?: \{ kind, limit \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ | Parent event ID |
| `kind` | query | string |  | Filter to a single kind. Empty returns all kinds. |
| `limit` | query | integer |  | Max rows (default 200, max 1000). |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `items` | ['array', 'null'] |  |

---

## `activity.append`

Append an activity row

**POST** `/api/v1/events/{event_id}/activity`

**Signature:** `lb.events.activity.append({ path: \{ event_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ | Parent event ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `kind` | body | string | ✓ | Activity kind ('state_changed', 'edited', 'attachment_added', …). |
| `payload` | body | object |  | Kind-specific payload (free-form JSONB). |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `actor_id` | string | Who caused it; nil for system-originated rows (automation, scheduled jobs). |
| `at` | string (date-time) | When the activity happened (UTC). |
| `event_id` | integer | Parent event id. |
| `id` | integer | Record ID (bigserial — activity volume can grow large) |
| `kind` | string | Activity kind: 'state_changed', 'attachment_added', 'published', 'edited', etc. Open string — templates declare which ki |
| `org_id` | string | Organisation context. |
| `payload` | object | Kind-specific shape. JSONB at the storage layer. |

---

## `attachments.list`

List attachments on an event

**GET** `/api/v1/events/{event_id}/attachments`

**Signature:** `lb.events.attachments.list({ path: \{ event_id \}, query?: \{ kind \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ | Parent event ID |
| `kind` | query | string |  | Filter to a single kind. Empty returns all kinds. |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `items` | ['array', 'null'] |  |

---

## `attachments.add`

Attach a file / reference to an event

**POST** `/api/v1/events/{event_id}/attachments`

**Signature:** `lb.events.attachments.add({ path: \{ event_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ | Parent event ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `kind` | body | string | ✓ | Attachment kind ('image', 'document', 'proof_of_delivery'). Validated against the parent template's AllowedAttachmentKin |
| `metadata` | body | object |  | Kind-specific payload: mime, size, content_hash, … |
| `ref` | body | string | ✓ | Opaque storage identifier — URL, blob key, document_id depending on kind. |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `created_at` | string (date-time) | Created timestamp |
| `created_by` | string | Profile id of who attached it. |
| `event_id` | integer | Event scope — set when this attachment applies to a specific occurrence. |
| `id` | integer | Record ID |
| `kind` | string | Open string: 'image', 'document', 'signature', 'proof_of_delivery'. Validated against the parent template's AllowedAttac |
| `metadata` | object | Kind-specific payload: mime, size, content_hash, dimensions, … |
| `org_id` | string | Organisation context. |
| `ref` | string | Opaque storage identifier — URL, blob key, document_id depending on kind. |
| `series_id` | integer | Series scope — set when this attachment is shared across every occurrence in the series (study materials, etc.). |

---

## `participants.list`

List participants on an event

**GET** `/api/v1/events/{event_id}/participants`

**Signature:** `lb.events.participants.list({ path: \{ event_id \}, query?: \{ role, actor_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ | Parent event ID |
| `role` | query | string |  | Filter to a single role. Empty string returns all roles. |
| `actor_id` | query | string |  | Filter to a single actor across roles. Empty string returns all actors. |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `items` | ['array', 'null'] |  |

---

## `participants.add`

Add a participant to an event

**POST** `/api/v1/events/{event_id}/participants`

**Signature:** `lb.events.participants.add({ path: \{ event_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ | Parent event ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `actor_id` | body | string | ✓ | Profile id (people) or service-account id (vendor / courier) of the participant. |
| `role` | body | string | ✓ | Template-defined role: 'audience', 'recipient', 'vendor', 'courier', etc. |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `actor_id` | string | Profile id of the participant (people) or service-account id (vendor/courier). |
| `created_at` | string (date-time) | Created timestamp. |
| `created_by` | string | Profile id of who added this participant. |
| `event_id` | integer | Event scope — set when this row applies to a specific occurrence. |
| `id` | integer | Record ID |
| `org_id` | string | Organisation context. |
| `role` | string | Open string; semantics declared by the parent event's template (e.g. 'audience', 'recipient', 'vendor'). |
| `series_id` | integer | Series scope — set when this row applies to every occurrence inherited from the series. |

---

## `delete`

Delete an event

**DELETE** `/api/v1/events/{id}`

**Signature:** `lb.events.delete({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |

---

## `get`

Get an event

**GET** `/api/v1/events/{id}`

**Signature:** `lb.events.get({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `address` | string | Venue address |
| `created_at` | string (date-time) | Created timestamp |
| `created_dt` | string (date-time) | Business creation date |
| `creator_id` | string | Creator profile ID |
| `description` | string | Event description |
| `description_override` | string | Local description override |
| `end_dt` | string (date-time) | End datetime (UTC) |
| `id` | integer | Event ID |
| `is_deleted` | boolean | Soft-deleted flag |
| `is_locked` | boolean | Locked from editing |
| `keywords` | ['array', 'null'] | Search keywords |
| `latitude` | number | Venue latitude |
| `longitude` | number | Venue longitude |
| `metadata` | object | Flexible JSONB metadata (theme, cover, etc.) |
| `metadata_override` | object | Local metadata override (merged with series metadata) |
| `org_id` | string | Organization ID |
| `parent_event_id` | integer | Parent event ID (milestones) |
| `priority` | integer | Open numeric priority axis used by priority-aware templates. |
| `published_at` | string (date-time) | When last published |
| `published_id` | integer | For draft rows: ID of the published row this was cloned from |
| `series_id` | integer | Series ID; set when this event is part of a recurring series |
| `series_index` | integer | Position within the series (0 = anchor occurrence) |
| `series_title` | string | Canonical title from the series master row |
| `spaces` | ['array', 'null'] | Spaces this event belongs to (populated in list responses) |
| `start_dt` | string (date-time) | Start datetime (UTC) |
| `state` | string | Current node of the template's state machine; nil when the template has none. |
| `status` | `"draft"` | `"published"` | `"archived"` | Publish status |
| `template` | string | Event template id (kind discriminator). Defaults to 'generic'. |
| `template_version` | integer | Schema version of the chosen template. 0 = legacy/pre-template; 1+ = explicit. |
| `timezone` | string | IANA timezone |
| `title` | string | Event title |
| `title_override` | string | Local title override (takes precedence over series title) |
| `updated_at` | string (date-time) | Updated timestamp |
| `version` | integer | Version counter, incremented on each publish |
| `visibility` | integer | Visibility: 10=private, 20=members-only, 30=organization, 40=public |

---

## `patch`

Partial-update an event (merge-patch)

**PATCH** `/api/v1/events/{id}`

**Signature:** `lb.events.patch({ path: \{ id \}, query?: \{ scope \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `scope` | query | `"this"` | `"future"` | `"all"` |  | Series edit scope |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `address` | body | string |  | New venue address |
| `description` | body | string |  | New description |
| `end_dt` | body | string (date-time) |  | New end datetime (UTC) |
| `keywords` | body | ['array', 'null'] |  | Replace keyword list (omit to keep existing) |
| `latitude` | body | number |  | New venue latitude |
| `longitude` | body | number |  | New venue longitude |
| `metadata` | body | object |  | Merge into event metadata (omit to keep existing) |
| `priority` | body | integer |  | New priority value (template-defined semantics). |
| `start_dt` | body | string (date-time) |  | New start datetime (UTC) |
| `template` | body | string |  | Reject-only: must omit. Sending any value returns 409 (template is immutable). |
| `timezone` | body | string |  | New IANA timezone |
| `title` | body | string |  | New title |
| `visibility` | body | integer |  | New visibility: 10=private, 20=members-only, 30=organization, 40=public |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `address` | string | Venue address |
| `created_at` | string (date-time) | Created timestamp |
| `created_dt` | string (date-time) | Business creation date |
| `creator_id` | string | Creator profile ID |
| `description` | string | Event description |
| `description_override` | string | Local description override |
| `end_dt` | string (date-time) | End datetime (UTC) |
| `id` | integer | Event ID |
| `is_deleted` | boolean | Soft-deleted flag |
| `is_locked` | boolean | Locked from editing |
| `keywords` | ['array', 'null'] | Search keywords |
| `latitude` | number | Venue latitude |
| `longitude` | number | Venue longitude |
| `metadata` | object | Flexible JSONB metadata (theme, cover, etc.) |
| `metadata_override` | object | Local metadata override (merged with series metadata) |
| `org_id` | string | Organization ID |
| `parent_event_id` | integer | Parent event ID (milestones) |
| `priority` | integer | Open numeric priority axis used by priority-aware templates. |
| `published_at` | string (date-time) | When last published |
| `published_id` | integer | For draft rows: ID of the published row this was cloned from |
| `series_id` | integer | Series ID; set when this event is part of a recurring series |
| `series_index` | integer | Position within the series (0 = anchor occurrence) |
| `series_title` | string | Canonical title from the series master row |
| `spaces` | ['array', 'null'] | Spaces this event belongs to (populated in list responses) |
| `start_dt` | string (date-time) | Start datetime (UTC) |
| `state` | string | Current node of the template's state machine; nil when the template has none. |
| `status` | `"draft"` | `"published"` | `"archived"` | Publish status |
| `template` | string | Event template id (kind discriminator). Defaults to 'generic'. |
| `template_version` | integer | Schema version of the chosen template. 0 = legacy/pre-template; 1+ = explicit. |
| `timezone` | string | IANA timezone |
| `title` | string | Event title |
| `title_override` | string | Local title override (takes precedence over series title) |
| `updated_at` | string (date-time) | Updated timestamp |
| `version` | integer | Version counter, incremented on each publish |
| `visibility` | integer | Visibility: 10=private, 20=members-only, 30=organization, 40=public |

---

## `update`

Update an event

**PUT** `/api/v1/events/{id}`

**Signature:** `lb.events.update({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `address` | body | string |  | Venue address |
| `description` | body | string |  | Event description |
| `end_dt` | body | string (date-time) |  | End datetime (UTC) |
| `keywords` | body | ['array', 'null'] |  | Search keywords |
| `latitude` | body | number |  | Venue latitude |
| `longitude` | body | number |  | Venue longitude |
| `metadata` | body | object |  | Flexible metadata |
| `start_dt` | body | string (date-time) |  | Start datetime (UTC) |
| `timezone` | body | string |  | IANA timezone |
| `title` | body | string | ✓ | Event title |
| `visibility` | body | integer |  | Visibility level |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `address` | string | Venue address |
| `created_at` | string (date-time) | Created timestamp |
| `created_dt` | string (date-time) | Business creation date |
| `creator_id` | string | Creator profile ID |
| `description` | string | Event description |
| `description_override` | string | Local description override |
| `end_dt` | string (date-time) | End datetime (UTC) |
| `id` | integer | Event ID |
| `is_deleted` | boolean | Soft-deleted flag |
| `is_locked` | boolean | Locked from editing |
| `keywords` | ['array', 'null'] | Search keywords |
| `latitude` | number | Venue latitude |
| `longitude` | number | Venue longitude |
| `metadata` | object | Flexible JSONB metadata (theme, cover, etc.) |
| `metadata_override` | object | Local metadata override (merged with series metadata) |
| `org_id` | string | Organization ID |
| `parent_event_id` | integer | Parent event ID (milestones) |
| `priority` | integer | Open numeric priority axis used by priority-aware templates. |
| `published_at` | string (date-time) | When last published |
| `published_id` | integer | For draft rows: ID of the published row this was cloned from |
| `series_id` | integer | Series ID; set when this event is part of a recurring series |
| `series_index` | integer | Position within the series (0 = anchor occurrence) |
| `series_title` | string | Canonical title from the series master row |
| `spaces` | ['array', 'null'] | Spaces this event belongs to (populated in list responses) |
| `start_dt` | string (date-time) | Start datetime (UTC) |
| `state` | string | Current node of the template's state machine; nil when the template has none. |
| `status` | `"draft"` | `"published"` | `"archived"` | Publish status |
| `template` | string | Event template id (kind discriminator). Defaults to 'generic'. |
| `template_version` | integer | Schema version of the chosen template. 0 = legacy/pre-template; 1+ = explicit. |
| `timezone` | string | IANA timezone |
| `title` | string | Event title |
| `title_override` | string | Local title override (takes precedence over series title) |
| `updated_at` | string (date-time) | Updated timestamp |
| `version` | integer | Version counter, incremented on each publish |
| `visibility` | integer | Visibility: 10=private, 20=members-only, 30=organization, 40=public |

---

## `archive`

Archive an event

**POST** `/api/v1/events/{id}/archive`

**Signature:** `lb.events.archive({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |

---

## `listAttendees`

List event attendees

**GET** `/api/v1/events/{id}/attendees`

**Signature:** `lb.events.listAttendees({ path: \{ id \}, query?: \{ page, size \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `page` | query | integer |  | Page number (1-based) |
| `size` | query | integer |  | Items per page |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `items` | ['array', 'null'] | List of results |
| `page` | integer | Current page (1-based) |
| `size` | integer | Page size |
| `total` | integer | Total matching records |

---

## `addAttendee`

Add an attendee to an event

**POST** `/api/v1/events/{id}/attendees`

**Signature:** `lb.events.addAttendee({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `contact_id` | body | string | ✓ | Contact UUID |
| `notes` | body | string |  | Optional notes |
| `status` | body | `"invited"` | `"confirmed"` | `"declined"` | `"tentative"` | `"checked_in"` |  | Initial status |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `checked_in_at` | string (date-time) | Check-in time |
| `contact_id` | string | Contact UUID |
| `created_at` | string (date-time) | Created timestamp |
| `event_id` | integer | Event ID (when attending a specific occurrence) |
| `id` | integer | Attendee record ID |
| `invited_at` | string (date-time) | When invited |
| `is_checked_in` | boolean | Whether checked in |
| `notes` | string | Optional notes |
| `org_id` | string | Organization ID |
| `responded_at` | string (date-time) | When responded |
| `series_id` | integer | Series ID (when attending all occurrences in a series) |
| `status` | `"invited"` | `"confirmed"` | `"declined"` | `"tentative"` | `"checked_in"` | Attendance status |
| `updated_at` | string (date-time) | Updated timestamp |

---

## `bulkRemoveAttendees`

Bulk remove attendees from an event

**DELETE** `/api/v1/events/{id}/attendees/bulk`

**Signature:** `lb.events.bulkRemoveAttendees({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ |  |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `contact_ids` | body | ['array', 'null'] | ✓ | List of contact UUIDs |
| `status` | body | `"invited"` | `"confirmed"` | `"declined"` | `"tentative"` | `"checked_in"` |  | Attendance status |

---

## `bulkAddAttendees`

Bulk add attendees to an event

**POST** `/api/v1/events/{id}/attendees/bulk`

**Signature:** `lb.events.bulkAddAttendees({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ |  |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `contact_ids` | body | ['array', 'null'] | ✓ | List of contact UUIDs |
| `status` | body | `"invited"` | `"confirmed"` | `"declined"` | `"tentative"` | `"checked_in"` |  | Attendance status |

---

## `bulkUpdateAttendeeStatus`

Bulk update attendee statuses

**PATCH** `/api/v1/events/{id}/attendees/bulk/status`

**Signature:** `lb.events.bulkUpdateAttendeeStatus({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ |  |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `contact_ids` | body | ['array', 'null'] | ✓ | List of contact UUIDs |
| `status` | body | `"invited"` | `"confirmed"` | `"declined"` | `"tentative"` | `"checked_in"` | ✓ | New status |

---

## `removeAttendee`

Remove an attendee from an event

**DELETE** `/api/v1/events/{id}/attendees/{contact_id}`

**Signature:** `lb.events.removeAttendee({ path: \{ id, contact_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `contact_id` | path | string | ✓ | Contact UUID |

---

## `updateAttendeeStatus`

Update attendee status

**PATCH** `/api/v1/events/{id}/attendees/{contact_id}`

**Signature:** `lb.events.updateAttendeeStatus({ path: \{ id, contact_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `contact_id` | path | string | ✓ | Contact UUID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `status` | body | `"invited"` | `"confirmed"` | `"declined"` | `"tentative"` | `"checked_in"` | ✓ | New status |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `checked_in_at` | string (date-time) | Check-in time |
| `contact_id` | string | Contact UUID |
| `created_at` | string (date-time) | Created timestamp |
| `event_id` | integer | Event ID (when attending a specific occurrence) |
| `id` | integer | Attendee record ID |
| `invited_at` | string (date-time) | When invited |
| `is_checked_in` | boolean | Whether checked in |
| `notes` | string | Optional notes |
| `org_id` | string | Organization ID |
| `responded_at` | string (date-time) | When responded |
| `series_id` | integer | Series ID (when attending all occurrences in a series) |
| `status` | `"invited"` | `"confirmed"` | `"declined"` | `"tentative"` | `"checked_in"` | Attendance status |
| `updated_at` | string (date-time) | Updated timestamp |

---

## `checkInAttendee`

Check in an attendee

**POST** `/api/v1/events/{id}/attendees/{contact_id}/check-in`

**Signature:** `lb.events.checkInAttendee({ path: \{ id, contact_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ |  |
| `contact_id` | path | string | ✓ |  |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |

---

## `listAutomations`

List automations attached to an event

**GET** `/api/v1/events/{id}/automations`

**Signature:** `lb.events.listAutomations({ path: \{ id \}, query?: \{ page, size \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `page` | query | integer |  | Page number (1-based) |
| `size` | query | integer |  | Items per page |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `items` | ['array', 'null'] | List of results |
| `page` | integer | Current page (1-based) |
| `size` | integer | Page size |
| `total` | integer | Total matching records |

---

## `createAutomation`

Create an automation attached to an event

**POST** `/api/v1/events/{id}/automations`

**Signature:** `lb.events.createAutomation({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `actions` | body | ['array', 'null'] | ✓ |  |
| `description` | body | string |  |  |
| `enabled` | body | boolean |  |  |
| `name` | body | string | ✓ |  |
| `trigger` | body | object | ✓ |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `actions` | ['array', 'null'] |  |
| `created_at` | string (date-time) |  |
| `description` | string |  |
| `enabled` | boolean |  |
| `id` | string |  |
| `name` | string |  |
| `trigger` | object |  |
| `updated_at` | string (date-time) |  |

---

## `automationTemplates`

List event automation templates

**GET** `/api/v1/events/{id}/automations/templates`

**Signature:** `lb.events.automationTemplates({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |


**Returns:**

**Response:** `['array', 'null']`

---

## `deleteAutomation`

Delete an event automation

**DELETE** `/api/v1/events/{id}/automations/{rule_id}`

**Signature:** `lb.events.deleteAutomation({ path: \{ id, rule_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `rule_id` | path | string | ✓ | Automation rule ID |

---

## `getAutomation`

Get an event automation

**GET** `/api/v1/events/{id}/automations/{rule_id}`

**Signature:** `lb.events.getAutomation({ path: \{ id, rule_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `rule_id` | path | string | ✓ | Automation rule ID |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `actions` | ['array', 'null'] |  |
| `created_at` | string (date-time) |  |
| `description` | string |  |
| `enabled` | boolean |  |
| `id` | string |  |
| `name` | string |  |
| `trigger` | object |  |
| `updated_at` | string (date-time) |  |

---

## `updateAutomation`

Update an event automation

**PUT** `/api/v1/events/{id}/automations/{rule_id}`

**Signature:** `lb.events.updateAutomation({ path: \{ id, rule_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `rule_id` | path | string | ✓ | Automation rule ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `actions` | body | ['array', 'null'] | ✓ |  |
| `description` | body | string |  |  |
| `enabled` | body | boolean |  |  |
| `name` | body | string | ✓ |  |
| `trigger` | body | object | ✓ |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `actions` | ['array', 'null'] |  |
| `created_at` | string (date-time) |  |
| `description` | string |  |
| `enabled` | boolean |  |
| `id` | string |  |
| `name` | string |  |
| `trigger` | object |  |
| `updated_at` | string (date-time) |  |

---

## `executeAutomation`

Run an event automation now

**POST** `/api/v1/events/{id}/automations/{rule_id}/execute`

**Signature:** `lb.events.executeAutomation({ path: \{ id, rule_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `rule_id` | path | string | ✓ | Automation rule ID |

---

## `listAutomationExecutions`

List execution history for an event automation

**GET** `/api/v1/events/{id}/automations/{rule_id}/executions`

**Signature:** `lb.events.listAutomationExecutions({ path: \{ id, rule_id \}, query?: \{ page, size \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `rule_id` | path | string | ✓ | Automation rule ID |
| `page` | query | integer |  | Page number (1-based) |
| `size` | query | integer |  | Items per page |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `items` | ['array', 'null'] | List of results |
| `page` | integer | Current page (1-based) |
| `size` | integer | Page size |
| `total` | integer | Total matching records |

---

## `uploadCover`

Upload event cover image (multipart/form-data, field: file)

**PUT** `/api/v1/events/{id}/cover`

**Signature:** `lb.events.uploadCover({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `Content-Type` | header | string |  |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `address` | string | Venue address |
| `created_at` | string (date-time) | Created timestamp |
| `created_dt` | string (date-time) | Business creation date |
| `creator_id` | string | Creator profile ID |
| `description` | string | Event description |
| `description_override` | string | Local description override |
| `end_dt` | string (date-time) | End datetime (UTC) |
| `id` | integer | Event ID |
| `is_deleted` | boolean | Soft-deleted flag |
| `is_locked` | boolean | Locked from editing |
| `keywords` | ['array', 'null'] | Search keywords |
| `latitude` | number | Venue latitude |
| `longitude` | number | Venue longitude |
| `metadata` | object | Flexible JSONB metadata (theme, cover, etc.) |
| `metadata_override` | object | Local metadata override (merged with series metadata) |
| `org_id` | string | Organization ID |
| `parent_event_id` | integer | Parent event ID (milestones) |
| `priority` | integer | Open numeric priority axis used by priority-aware templates. |
| `published_at` | string (date-time) | When last published |
| `published_id` | integer | For draft rows: ID of the published row this was cloned from |
| `series_id` | integer | Series ID; set when this event is part of a recurring series |
| `series_index` | integer | Position within the series (0 = anchor occurrence) |
| `series_title` | string | Canonical title from the series master row |
| `spaces` | ['array', 'null'] | Spaces this event belongs to (populated in list responses) |
| `start_dt` | string (date-time) | Start datetime (UTC) |
| `state` | string | Current node of the template's state machine; nil when the template has none. |
| `status` | `"draft"` | `"published"` | `"archived"` | Publish status |
| `template` | string | Event template id (kind discriminator). Defaults to 'generic'. |
| `template_version` | integer | Schema version of the chosen template. 0 = legacy/pre-template; 1+ = explicit. |
| `timezone` | string | IANA timezone |
| `title` | string | Event title |
| `title_override` | string | Local title override (takes precedence over series title) |
| `updated_at` | string (date-time) | Updated timestamp |
| `version` | integer | Version counter, incremented on each publish |
| `visibility` | integer | Visibility: 10=private, 20=members-only, 30=organization, 40=public |

---

## `discard`

Discard draft, keep published version

**POST** `/api/v1/events/{id}/discard`

**Signature:** `lb.events.discard({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |

---

## `listDocuments`

List documents linked to an event

**GET** `/api/v1/events/{id}/documents`

**Signature:** `lb.events.listDocuments({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ |  |


**Returns:**

**Response:** `['array', 'null']`

---

## `removeDocument`

Unlink a document from an event

**DELETE** `/api/v1/events/{id}/documents/{document_id}`

**Signature:** `lb.events.removeDocument({ path: \{ id, document_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ |  |
| `document_id` | path | string | ✓ |  |

---

## `addDocument`

Link a document to an event

**POST** `/api/v1/events/{id}/documents/{document_id}`

**Signature:** `lb.events.addDocument({ path: \{ id, document_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ |  |
| `document_id` | path | string | ✓ |  |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |


**Returns:**

**Response:** Created

---

## `getDraft`

Get draft version of an event

**GET** `/api/v1/events/{id}/draft`

**Signature:** `lb.events.getDraft({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `address` | string | Venue address |
| `created_at` | string (date-time) | Created timestamp |
| `created_dt` | string (date-time) | Business creation date |
| `creator_id` | string | Creator profile ID |
| `description` | string | Event description |
| `description_override` | string | Local description override |
| `end_dt` | string (date-time) | End datetime (UTC) |
| `id` | integer | Event ID |
| `is_deleted` | boolean | Soft-deleted flag |
| `is_locked` | boolean | Locked from editing |
| `keywords` | ['array', 'null'] | Search keywords |
| `latitude` | number | Venue latitude |
| `longitude` | number | Venue longitude |
| `metadata` | object | Flexible JSONB metadata (theme, cover, etc.) |
| `metadata_override` | object | Local metadata override (merged with series metadata) |
| `org_id` | string | Organization ID |
| `parent_event_id` | integer | Parent event ID (milestones) |
| `priority` | integer | Open numeric priority axis used by priority-aware templates. |
| `published_at` | string (date-time) | When last published |
| `published_id` | integer | For draft rows: ID of the published row this was cloned from |
| `series_id` | integer | Series ID; set when this event is part of a recurring series |
| `series_index` | integer | Position within the series (0 = anchor occurrence) |
| `series_title` | string | Canonical title from the series master row |
| `spaces` | ['array', 'null'] | Spaces this event belongs to (populated in list responses) |
| `start_dt` | string (date-time) | Start datetime (UTC) |
| `state` | string | Current node of the template's state machine; nil when the template has none. |
| `status` | `"draft"` | `"published"` | `"archived"` | Publish status |
| `template` | string | Event template id (kind discriminator). Defaults to 'generic'. |
| `template_version` | integer | Schema version of the chosen template. 0 = legacy/pre-template; 1+ = explicit. |
| `timezone` | string | IANA timezone |
| `title` | string | Event title |
| `title_override` | string | Local title override (takes precedence over series title) |
| `updated_at` | string (date-time) | Updated timestamp |
| `version` | integer | Version counter, incremented on each publish |
| `visibility` | integer | Visibility: 10=private, 20=members-only, 30=organization, 40=public |

---

## `startEdit`

Start editing (creates draft clone)

**POST** `/api/v1/events/{id}/edit`

**Signature:** `lb.events.startEdit({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `address` | string | Venue address |
| `created_at` | string (date-time) | Created timestamp |
| `created_dt` | string (date-time) | Business creation date |
| `creator_id` | string | Creator profile ID |
| `description` | string | Event description |
| `description_override` | string | Local description override |
| `end_dt` | string (date-time) | End datetime (UTC) |
| `id` | integer | Event ID |
| `is_deleted` | boolean | Soft-deleted flag |
| `is_locked` | boolean | Locked from editing |
| `keywords` | ['array', 'null'] | Search keywords |
| `latitude` | number | Venue latitude |
| `longitude` | number | Venue longitude |
| `metadata` | object | Flexible JSONB metadata (theme, cover, etc.) |
| `metadata_override` | object | Local metadata override (merged with series metadata) |
| `org_id` | string | Organization ID |
| `parent_event_id` | integer | Parent event ID (milestones) |
| `priority` | integer | Open numeric priority axis used by priority-aware templates. |
| `published_at` | string (date-time) | When last published |
| `published_id` | integer | For draft rows: ID of the published row this was cloned from |
| `series_id` | integer | Series ID; set when this event is part of a recurring series |
| `series_index` | integer | Position within the series (0 = anchor occurrence) |
| `series_title` | string | Canonical title from the series master row |
| `spaces` | ['array', 'null'] | Spaces this event belongs to (populated in list responses) |
| `start_dt` | string (date-time) | Start datetime (UTC) |
| `state` | string | Current node of the template's state machine; nil when the template has none. |
| `status` | `"draft"` | `"published"` | `"archived"` | Publish status |
| `template` | string | Event template id (kind discriminator). Defaults to 'generic'. |
| `template_version` | integer | Schema version of the chosen template. 0 = legacy/pre-template; 1+ = explicit. |
| `timezone` | string | IANA timezone |
| `title` | string | Event title |
| `title_override` | string | Local title override (takes precedence over series title) |
| `updated_at` | string (date-time) | Updated timestamp |
| `version` | integer | Version counter, incremented on each publish |
| `visibility` | integer | Visibility: 10=private, 20=members-only, 30=organization, 40=public |

---

## `listLinks`

List cross-reference links for this event

**GET** `/api/v1/events/{id}/links`

**Signature:** `lb.events.listLinks({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |


**Returns:**

**Response:** `['array', 'null']`

---

## `addLink`

Link another event as a cross-reference

**POST** `/api/v1/events/{id}/links`

**Signature:** `lb.events.addLink({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `target_id` | body | integer | ✓ | Target event ID to link |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `created_at` | string (date-time) | Created timestamp |
| `event_id` | integer | Source event ID |
| `id` | integer | Link ID |
| `series_id` | integer | Series ID (when link applies to all occurrences) |
| `target_id` | integer | Target event ID |

---

## `removeLink`

Remove a cross-reference link

**DELETE** `/api/v1/events/{id}/links/{target_id}`

**Signature:** `lb.events.removeLink({ path: \{ id, target_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `target_id` | path | integer | ✓ | Target event ID to unlink |

---

## `listManagers`

List managers for an event

**GET** `/api/v1/events/{id}/managers`

**Signature:** `lb.events.listManagers({ path: \{ id \}, query?: \{ page, size \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `page` | query | integer |  | Page number (1-based) |
| `size` | query | integer |  | Items per page |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `items` | ['array', 'null'] | List of results |
| `page` | integer | Current page (1-based) |
| `size` | integer | Page size |
| `total` | integer | Total matching records |

---

## `addManager`

Add a manager to an event

**POST** `/api/v1/events/{id}/managers`

**Signature:** `lb.events.addManager({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `channels` | body | ['array', 'null'] |  | Override delivery channels (email/push/sms); service defaults apply if omitted |
| `message` | body | string |  | Custom message; omit to use the service default |
| `notify` | body | boolean |  | Send a notification to affected parties (default: false) |
| `permissions` | body | ['array', 'null'] | ✓ | Permissions to grant. Ignored when role is set. |
| `priority` | body | string |  | Notification priority: normal (default) or high |
| `role` | body | string |  | Optional event manager role bundle (e.g. event_manager:full). When set, the role REPLACES the permissions list. |
| `user_id` | body | string | ✓ | Profile ID of the manager |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `accepted_at` | string (date-time) | When the invite was accepted |
| `created_at` | string (date-time) | Created timestamp |
| `event_id` | integer | Event ID (when managing a specific occurrence) |
| `expires_at` | string (date-time) | When the pending invite expires (7 days from invite) |
| `id` | integer | Record ID |
| `invite_token` | string | Opaque token embedded in the invite email link |
| `invited_at` | string (date-time) | When the invite was (last) sent |
| `invited_by` | string | Profile ID of the user who sent the invite |
| `invited_email` | string | Email address the invite was sent to |
| `org_id` | string | Organization ID |
| `permissions` | ['array', 'null'] | Assigned event manager permissions |
| `role` | string | Pre-defined role bundle name (e.g. event_manager:full); NULL for custom permission combinations. |
| `series_id` | integer | Series ID (when managing all occurrences in a series) |
| `status` | `"pending"` | `"active"` | `"revoked"` | Lifecycle status: pending, active, revoked |
| `updated_at` | string (date-time) | Updated timestamp |
| `user_id` | string | Profile ID of the manager |

---

## `inviteManager`

Invite a manager to an event by email

**POST** `/api/v1/events/{id}/managers/invite`

**Signature:** `lb.events.inviteManager({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `email` | body | string | ✓ | Email address of the user to invite |
| `permissions` | body | ['array', 'null'] | ✓ | Permissions to grant on acceptance. Ignored when role is set. |
| `role` | body | string |  | Optional event manager role bundle (e.g. event_manager:full). When set, the role REPLACES the permissions list. |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `accepted_at` | string (date-time) | When the invite was accepted |
| `created_at` | string (date-time) | Created timestamp |
| `event_id` | integer | Event ID (when managing a specific occurrence) |
| `expires_at` | string (date-time) | When the pending invite expires (7 days from invite) |
| `id` | integer | Record ID |
| `invite_token` | string | Opaque token embedded in the invite email link |
| `invited_at` | string (date-time) | When the invite was (last) sent |
| `invited_by` | string | Profile ID of the user who sent the invite |
| `invited_email` | string | Email address the invite was sent to |
| `org_id` | string | Organization ID |
| `permissions` | ['array', 'null'] | Assigned event manager permissions |
| `role` | string | Pre-defined role bundle name (e.g. event_manager:full); NULL for custom permission combinations. |
| `series_id` | integer | Series ID (when managing all occurrences in a series) |
| `status` | `"pending"` | `"active"` | `"revoked"` | Lifecycle status: pending, active, revoked |
| `updated_at` | string (date-time) | Updated timestamp |
| `user_id` | string | Profile ID of the manager |

---

## `removeManager`

Remove a manager from an event

**DELETE** `/api/v1/events/{id}/managers/{user_id}`

**Signature:** `lb.events.removeManager({ path: \{ id, user_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `user_id` | path | string | ✓ | Profile ID |

---

## `getManager`

Get a single event manager

**GET** `/api/v1/events/{id}/managers/{user_id}`

**Signature:** `lb.events.getManager({ path: \{ id, user_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `user_id` | path | string | ✓ | Profile ID |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `accepted_at` | string (date-time) | When the invite was accepted |
| `created_at` | string (date-time) | Created timestamp |
| `event_id` | integer | Event ID (when managing a specific occurrence) |
| `expires_at` | string (date-time) | When the pending invite expires (7 days from invite) |
| `id` | integer | Record ID |
| `invite_token` | string | Opaque token embedded in the invite email link |
| `invited_at` | string (date-time) | When the invite was (last) sent |
| `invited_by` | string | Profile ID of the user who sent the invite |
| `invited_email` | string | Email address the invite was sent to |
| `org_id` | string | Organization ID |
| `permissions` | ['array', 'null'] | Assigned event manager permissions |
| `role` | string | Pre-defined role bundle name (e.g. event_manager:full); NULL for custom permission combinations. |
| `series_id` | integer | Series ID (when managing all occurrences in a series) |
| `status` | `"pending"` | `"active"` | `"revoked"` | Lifecycle status: pending, active, revoked |
| `updated_at` | string (date-time) | Updated timestamp |
| `user_id` | string | Profile ID of the manager |

---

## `updateManager`

Update an event manager's permissions

**PUT** `/api/v1/events/{id}/managers/{user_id}`

**Signature:** `lb.events.updateManager({ path: \{ id, user_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `user_id` | path | string | ✓ | Profile ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `permissions` | body | ['array', 'null'] | ✓ | New set of permissions |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `accepted_at` | string (date-time) | When the invite was accepted |
| `created_at` | string (date-time) | Created timestamp |
| `event_id` | integer | Event ID (when managing a specific occurrence) |
| `expires_at` | string (date-time) | When the pending invite expires (7 days from invite) |
| `id` | integer | Record ID |
| `invite_token` | string | Opaque token embedded in the invite email link |
| `invited_at` | string (date-time) | When the invite was (last) sent |
| `invited_by` | string | Profile ID of the user who sent the invite |
| `invited_email` | string | Email address the invite was sent to |
| `org_id` | string | Organization ID |
| `permissions` | ['array', 'null'] | Assigned event manager permissions |
| `role` | string | Pre-defined role bundle name (e.g. event_manager:full); NULL for custom permission combinations. |
| `series_id` | integer | Series ID (when managing all occurrences in a series) |
| `status` | `"pending"` | `"active"` | `"revoked"` | Lifecycle status: pending, active, revoked |
| `updated_at` | string (date-time) | Updated timestamp |
| `user_id` | string | Profile ID of the manager |

---

## `listMilestones`

List milestones for an event

**GET** `/api/v1/events/{id}/milestones`

**Signature:** `lb.events.listMilestones({ path: \{ id \}, query?: \{ page, size \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Base Event ID |
| `page` | query | integer |  | Page number (1-based) |
| `size` | query | integer |  | Items per page |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `items` | ['array', 'null'] | List of results |
| `page` | integer | Current page (1-based) |
| `size` | integer | Page size |
| `total` | integer | Total matching records |

---

## `addMilestone`

Add a milestone event to a base event

**POST** `/api/v1/events/{id}/milestones`

**Signature:** `lb.events.addMilestone({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Base Event ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `milestone_event_id` | body | integer | ✓ | Event ID to use as milestone |
| `sequence` | body | integer |  | Display order (defaults to 0) |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `base_event_id` | integer | Base event ID |
| `created_at` | string (date-time) | Created timestamp |
| `id` | integer | Record ID |
| `milestone_event_id` | integer | Milestone event ID |
| `sequence` | integer | Display order |
| `series_id` | integer | Series ID (when milestone applies to all occurrences) |
| `status` | `"planned"` | `"ready"` | `"active"` | `"completed"` | `"skipped"` | Milestone lifecycle status |
| `status_mode` | `"derived"` | `"manual"` | How milestone status is controlled |
| `status_updated_at` | string (date-time) | When lifecycle status was last recalculated or manually changed |
| `updated_at` | string (date-time) | Updated timestamp |

---

## `removeMilestone`

Remove a milestone from an event

**DELETE** `/api/v1/events/{id}/milestones/{milestone_event_id}`

**Signature:** `lb.events.removeMilestone({ path: \{ id, milestone_event_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Base Event ID |
| `milestone_event_id` | path | integer | ✓ | Milestone Event ID |

---

## `patchMilestoneLifecycle`

Update milestone lifecycle status or reset to automatic mode

**PATCH** `/api/v1/events/{id}/milestones/{milestone_event_id}`

**Signature:** `lb.events.patchMilestoneLifecycle({ path: \{ id, milestone_event_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Base Event ID |
| `milestone_event_id` | path | integer | ✓ | Milestone Event ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `reset_to_derived` | body | boolean |  | Reset milestone lifecycle back to date-driven automatic mode |
| `status` | body | `"planned"` | `"ready"` | `"active"` | `"completed"` | `"skipped"` |  | New manual lifecycle status |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `base_event_id` | integer | Base event ID |
| `created_at` | string (date-time) | Created timestamp |
| `id` | integer | Record ID |
| `milestone_event_id` | integer | Milestone event ID |
| `sequence` | integer | Display order |
| `series_id` | integer | Series ID (when milestone applies to all occurrences) |
| `status` | `"planned"` | `"ready"` | `"active"` | `"completed"` | `"skipped"` | Milestone lifecycle status |
| `status_mode` | `"derived"` | `"manual"` | How milestone status is controlled |
| `status_updated_at` | string (date-time) | When lifecycle status was last recalculated or manually changed |
| `updated_at` | string (date-time) | Updated timestamp |

---

## `updateMilestone`

Update milestone sequence

**PUT** `/api/v1/events/{id}/milestones/{milestone_event_id}`

**Signature:** `lb.events.updateMilestone({ path: \{ id, milestone_event_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Base Event ID |
| `milestone_event_id` | path | integer | ✓ | Milestone Event ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `sequence` | body | integer | ✓ | New display order |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `base_event_id` | integer | Base event ID |
| `created_at` | string (date-time) | Created timestamp |
| `id` | integer | Record ID |
| `milestone_event_id` | integer | Milestone event ID |
| `sequence` | integer | Display order |
| `series_id` | integer | Series ID (when milestone applies to all occurrences) |
| `status` | `"planned"` | `"ready"` | `"active"` | `"completed"` | `"skipped"` | Milestone lifecycle status |
| `status_mode` | `"derived"` | `"manual"` | How milestone status is controlled |
| `status_updated_at` | string (date-time) | When lifecycle status was last recalculated or manually changed |
| `updated_at` | string (date-time) | Updated timestamp |

---

## `publish`

Publish an event

**POST** `/api/v1/events/{id}/publish`

**Signature:** `lb.events.publish({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `channels` | body | ['array', 'null'] |  | Override delivery channels (email/push/sms); service defaults apply if omitted |
| `message` | body | string |  | Custom message; omit to use the service default |
| `notify` | body | boolean |  | Send a notification to affected parties (default: false) |
| `priority` | body | string |  | Notification priority: normal (default) or high |

---

## `deleteSeries`

Remove from series (scope: this | future | all)

**DELETE** `/api/v1/events/{id}/series`

**Signature:** `lb.events.deleteSeries({ path: \{ id \}, query?: \{ scope \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `scope` | query | `"this"` | `"future"` | `"all"` | ✓ | Deletion scope |

---

## `getSeries`

Get series rule and all occurrences for a recurring event

**GET** `/api/v1/events/{id}/series`

**Signature:** `lb.events.getSeries({ path: \{ id \}, query?: \{ page, limit \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID (any occurrence in the series) |
| `page` | query | integer |  | Page number for occurrences (1-based) |
| `limit` | query | integer |  | Occurrences per page |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `attendee_counts` | object | Attendee counts by status |
| `limit` | integer | Page size |
| `occurrences` | ['array', 'null'] | Occurrence events for the current page |
| `page` | integer | Current page (1-based) |
| `series` | object |  |
| `total` | integer | Total number of occurrences |
| `total_attendees` | integer | Total unique attendees |
| `total_pages` | integer | Total number of pages |

---

## `patchSeries`

Update series fields. Cascades to occurrences without overrides.

**PATCH** `/api/v1/events/{id}/series`

**Signature:** `lb.events.patchSeries({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID of any occurrence in the series |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `address` | body | string |  | New venue address |
| `cover_image_key` | body | string |  | New canonical cover image storage key |
| `description` | body | string |  | New canonical series description |
| `end_count` | body | integer |  | Max number of occurrences |
| `end_date` | body | string (date-time) |  | Last allowed start date |
| `end_dt` | body | string (date-time) |  | New canonical end datetime |
| `ends_on` | body | `"never"` | `"on_date"` | `"after_n"` |  | How the series ends |
| `freq` | body | `"daily"` | `"weekly"` | `"monthly"` | `"custom"` |  | New recurrence frequency |
| `interval` | body | integer |  | Repeat every N units |
| `keywords` | body | Array<string> |  | New keywords |
| `latitude` | body | number |  | New venue latitude |
| `longitude` | body | number |  | New venue longitude |
| `metadata` | body | object |  | Merge into series metadata (omit to keep existing) |
| `repeat_days` | body | Array<integer> |  | ISO weekdays to repeat on [1-7] |
| `start_dt` | body | string (date-time) |  | New canonical start datetime |
| `timezone` | body | string |  | New timezone |
| `title` | body | string |  | New canonical series title |
| `visibility` | body | integer |  | New visibility (10=private,20=members-only,30=org,40=public) |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `address` | string | Venue address |
| `cover_image_key` | string | Canonical cover image storage key |
| `created_at` | string (date-time) | Created timestamp |
| `creator_id` | string | Profile ID of the creator |
| `description` | string | Canonical series description |
| `duration` | string | Duration of each occurrence as a Postgres interval string |
| `end_count` | integer | Max number of occurrences including anchor (used when ends_on=after_n) |
| `end_date` | string (date-time) | Last allowed start date (used when ends_on=on_date) |
| `end_dt` | string (date-time) | Canonical end datetime |
| `ends_on` | `"never"` | `"on_date"` | `"after_n"` | How the series ends |
| `freq` | `"daily"` | `"weekly"` | `"monthly"` | `"custom"` | Recurrence frequency |
| `id` | integer | Series ID |
| `interval` | integer | Repeat every N units of freq (e.g. 2 = every 2 weeks) |
| `is_deleted` | boolean | Soft-deleted flag |
| `keywords` | ['array', 'null'] | Search keywords |
| `latitude` | number | Venue latitude |
| `longitude` | number | Venue longitude |
| `metadata` | object | Canonical series metadata (theme, cover, etc.) |
| `org_id` | string | Organization ID (nil for personal events) |
| `published_at` | string (date-time) | When the series was most recently published |
| `published_id` | integer | ID of the published version (if currently a draft) |
| `repeat_days` | ['array', 'null'] | ISO weekdays to repeat on [1-7]; used for weekly/custom freq |
| `series_manager_accepted_at` | string (date-time) | When invite was accepted |
| `series_manager_expires_at` | string (date-time) | When invite expires |
| `series_manager_id` | string | Profile ID of the series manager (active) |
| `series_manager_invite_token` | string | Invite token for pending manager |
| `series_manager_invited_at` | string (date-time) | When invite was sent |
| `series_manager_invited_by` | string | Profile ID who sent invite |
| `series_manager_invited_email` | string | Email of invitee |
| `series_manager_status` | string | Manager status: pending, active, revoked |
| `start_dt` | string (date-time) | Canonical start datetime |
| `status` | `"draft"` | `"published"` | `"archived"` | Publish status: draft, published, archived |
| `template` | string | Event template id; every occurrence inherits this. |
| `template_version` | integer | Schema version of the chosen template. |
| `timezone` | string | IANA timezone for canonical occurrence |
| `title` | string | Canonical series title (master event name) |
| `updated_at` | string (date-time) | Updated timestamp |
| `version` | integer | Version number (incremented on each publish) |
| `visibility` | integer | Visibility: 10=private, 20=members-only, 30=organization, 40=public |

---

## `createSeries`

Convert an event into the anchor of a new recurring series

**POST** `/api/v1/events/{id}/series`

**Signature:** `lb.events.createSeries({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID of the anchor occurrence |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `end_count` | body | integer |  | Max occurrences including anchor (required when ends_on=after_n) |
| `end_date` | body | string (date-time) |  | Series end date (required when ends_on=on_date) |
| `ends_on` | body | `"never"` | `"on_date"` | `"after_n"` | ✓ | How the series ends (default: never) |
| `freq` | body | `"daily"` | `"weekly"` | `"monthly"` | `"custom"` | ✓ | Recurrence frequency |
| `interval` | body | integer | ✓ | Repeat every N units (default 1) |
| `repeat_days` | body | ['array', 'null'] |  | ISO weekdays [1-7]; required for weekly/custom freq |


**Returns:**

**Response:** `['array', 'null']`

---

## `inviteSeriesManager`

Invite series manager

**POST** `/api/v1/events/{id}/series/manager`

**Signature:** `lb.events.inviteSeriesManager({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID (any occurrence in the series) |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `email` | body | string | ✓ | Email address to invite as series manager |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `address` | string | Venue address |
| `cover_image_key` | string | Canonical cover image storage key |
| `created_at` | string (date-time) | Created timestamp |
| `creator_id` | string | Profile ID of the creator |
| `description` | string | Canonical series description |
| `duration` | string | Duration of each occurrence as a Postgres interval string |
| `end_count` | integer | Max number of occurrences including anchor (used when ends_on=after_n) |
| `end_date` | string (date-time) | Last allowed start date (used when ends_on=on_date) |
| `end_dt` | string (date-time) | Canonical end datetime |
| `ends_on` | `"never"` | `"on_date"` | `"after_n"` | How the series ends |
| `freq` | `"daily"` | `"weekly"` | `"monthly"` | `"custom"` | Recurrence frequency |
| `id` | integer | Series ID |
| `interval` | integer | Repeat every N units of freq (e.g. 2 = every 2 weeks) |
| `is_deleted` | boolean | Soft-deleted flag |
| `keywords` | ['array', 'null'] | Search keywords |
| `latitude` | number | Venue latitude |
| `longitude` | number | Venue longitude |
| `metadata` | object | Canonical series metadata (theme, cover, etc.) |
| `org_id` | string | Organization ID (nil for personal events) |
| `published_at` | string (date-time) | When the series was most recently published |
| `published_id` | integer | ID of the published version (if currently a draft) |
| `repeat_days` | ['array', 'null'] | ISO weekdays to repeat on [1-7]; used for weekly/custom freq |
| `series_manager_accepted_at` | string (date-time) | When invite was accepted |
| `series_manager_expires_at` | string (date-time) | When invite expires |
| `series_manager_id` | string | Profile ID of the series manager (active) |
| `series_manager_invite_token` | string | Invite token for pending manager |
| `series_manager_invited_at` | string (date-time) | When invite was sent |
| `series_manager_invited_by` | string | Profile ID who sent invite |
| `series_manager_invited_email` | string | Email of invitee |
| `series_manager_status` | string | Manager status: pending, active, revoked |
| `start_dt` | string (date-time) | Canonical start datetime |
| `status` | `"draft"` | `"published"` | `"archived"` | Publish status: draft, published, archived |
| `template` | string | Event template id; every occurrence inherits this. |
| `template_version` | integer | Schema version of the chosen template. |
| `timezone` | string | IANA timezone for canonical occurrence |
| `title` | string | Canonical series title (master event name) |
| `updated_at` | string (date-time) | Updated timestamp |
| `version` | integer | Version number (incremented on each publish) |
| `visibility` | integer | Visibility: 10=private, 20=members-only, 30=organization, 40=public |

---

## `listOccurrences`

List occurrences of the series this event belongs to (paginated)

**GET** `/api/v1/events/{id}/series/occurrences`

**Signature:** `lb.events.listOccurrences({ path: \{ id \}, query?: \{ page, limit \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID (any occurrence in the series) |
| `page` | query | integer |  | Page number (1-based) |
| `limit` | query | integer |  | Items per page |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `items` | ['array', 'null'] | Occurrence events for this page |
| `limit` | integer | Page size |
| `page` | integer | Current page (1-based) |
| `total` | integer | Total number of occurrences in the series |
| `total_pages` | integer | Total number of pages |

---

## `publishSeries`

Publish series

**POST** `/api/v1/events/{id}/series/publish`

**Signature:** `lb.events.publishSeries({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID (any occurrence in the series) |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `channels` | body | ['array', 'null'] |  | Override delivery channels (email/push/sms); service defaults apply if omitted |
| `message` | body | string |  | Custom message; omit to use the service default |
| `notify` | body | boolean |  | Send a notification to affected parties (default: false) |
| `priority` | body | string |  | Notification priority: normal (default) or high |

---

## `listSpaces`

List spaces this event belongs to

**GET** `/api/v1/events/{id}/spaces`

**Signature:** `lb.events.listSpaces({ path: \{ id \}, query?: \{ page, size \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `page` | query | integer |  | Page number (1-based) |
| `size` | query | integer |  | Items per page |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `items` | ['array', 'null'] | List of results |
| `page` | integer | Current page (1-based) |
| `size` | integer | Page size |
| `total` | integer | Total matching records |

---

## `addSpace`

Add event to a space

**POST** `/api/v1/events/{id}/spaces`

**Signature:** `lb.events.addSpace({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `space_id` | body | integer | ✓ | Space ID to add |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `created_at` | string (date-time) | Created timestamp |
| `event_id` | integer | Event ID |
| `id` | integer | Record ID |
| `org_id` | string | Organization ID |
| `space_id` | integer | Space ID |
| `updated_at` | string (date-time) | Updated timestamp |

---

## `removeSpace`

Remove event from a space

**DELETE** `/api/v1/events/{id}/spaces/{space_id}`

**Signature:** `lb.events.removeSpace({ path: \{ id, space_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `space_id` | path | integer | ✓ | Space ID |

---

## `transition`

Transition an event to a new state per its template's state machine

**POST** `/api/v1/events/{id}/transition`

**Signature:** `lb.events.transition({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `payload` | body | object |  | Kind-specific data the state machine's guard inspects (e.g. proof_of_delivery for delivery's final hop). |
| `reason` | body | string |  | Optional human-readable reason — captured on the activity row. |
| `to_state` | body | string | ✓ | Target state, e.g. 'in_transit' or 'delivered'. |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `address` | string | Venue address |
| `created_at` | string (date-time) | Created timestamp |
| `created_dt` | string (date-time) | Business creation date |
| `creator_id` | string | Creator profile ID |
| `description` | string | Event description |
| `description_override` | string | Local description override |
| `end_dt` | string (date-time) | End datetime (UTC) |
| `id` | integer | Event ID |
| `is_deleted` | boolean | Soft-deleted flag |
| `is_locked` | boolean | Locked from editing |
| `keywords` | ['array', 'null'] | Search keywords |
| `latitude` | number | Venue latitude |
| `longitude` | number | Venue longitude |
| `metadata` | object | Flexible JSONB metadata (theme, cover, etc.) |
| `metadata_override` | object | Local metadata override (merged with series metadata) |
| `org_id` | string | Organization ID |
| `parent_event_id` | integer | Parent event ID (milestones) |
| `priority` | integer | Open numeric priority axis used by priority-aware templates. |
| `published_at` | string (date-time) | When last published |
| `published_id` | integer | For draft rows: ID of the published row this was cloned from |
| `series_id` | integer | Series ID; set when this event is part of a recurring series |
| `series_index` | integer | Position within the series (0 = anchor occurrence) |
| `series_title` | string | Canonical title from the series master row |
| `spaces` | ['array', 'null'] | Spaces this event belongs to (populated in list responses) |
| `start_dt` | string (date-time) | Start datetime (UTC) |
| `state` | string | Current node of the template's state machine; nil when the template has none. |
| `status` | `"draft"` | `"published"` | `"archived"` | Publish status |
| `template` | string | Event template id (kind discriminator). Defaults to 'generic'. |
| `template_version` | integer | Schema version of the chosen template. 0 = legacy/pre-template; 1+ = explicit. |
| `timezone` | string | IANA timezone |
| `title` | string | Event title |
| `title_override` | string | Local title override (takes precedence over series title) |
| `updated_at` | string (date-time) | Updated timestamp |
| `version` | integer | Version counter, incremented on each publish |
| `visibility` | integer | Visibility: 10=private, 20=members-only, 30=organization, 40=public |

---

## `participants.remove`

Remove a participant

**DELETE** `/api/v1/participants/{id}`

**Signature:** `lb.events.participants.remove({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Participant record ID |

---
