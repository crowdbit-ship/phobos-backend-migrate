// src/services/email/email.constant.ts
const SES_TEMPLATE_OPTIONS_INNER = [
  // { label: 'Login', value: 'login' },
  { label: 'Personal Notes', value: 'personal-notes' },
  { label: 'Form Reminder', value: 'form-reminder' },
  { label: 'Action Reminder', value: 'action-reminder' },
]
const SES_TEMPLATE_OPTIONS_OUTER = [
  { label: 'Login', value: 'login' },
  ...SES_TEMPLATE_OPTIONS_INNER,
]
const MQNS_STATUS_SCHEMA = {
  _new: {
    title: 'Waiting to Send',
    eventType: '',
    color: 'var(--warning))',
    twColor: 'warning',
  },
  _missing: {
    title: 'Template not found',
    eventType: '',
    color: 'var(--critical)',
    twColor: 'danger',
  },
  _error: {
    title: 'Error',
    eventType: '',
    color: 'var(--critical)',
    twColor: 'danger',
  },
  _bounce: {
    title: 'Bounced',
    eventType: 'Bounce',
    color: 'var(--critical)',
    twColor: 'danger',
  },
  _complaint: {
    title: 'Received Complaint',
    eventType: 'Complaint',
    color: 'var(--critical)',
    twColor: 'danger',
  },
  _delivery: {
    title: 'Delivered',
    eventType: 'Delivery',
    color: 'var(--neutral)',
    twColor: 'default',
  },
  _sent: {
    title: 'Sent',
    eventType: 'Send',
    color: 'var(--action)',
    twColor: 'success',
  },
  _reject: {
    title: 'Rejected',
    eventType: 'Reject',
    color: 'var(--critical)',
    twColor: 'danger',
  },
  _open: {
    title: 'Opened by User',
    eventType: 'Open',
    color: 'var(--neutral)',
    twColor: 'default',
  },
  _click: {
    title: 'Link Clicked',
    eventType: 'Click',
    color: 'var(--neutral)',
    twColor: 'default',
  },
  _failed: {
    title: 'Internal Failure',
    eventType: 'Rendering Failure',
    color: 'var(--critical)',
    twColor: 'danger',
  },
  _delay: {
    title: 'Delivery Delay',
    eventType: 'DeliveryDelay',
    color: 'var(--warning))',
    twColor: 'warning',
  },
}
const MQNS_EVENT_TYPE_VALUE = Object.fromEntries(
  Object.entries(MQNS_STATUS_SCHEMA)
    .filter(([, value]) => value.eventType)
    .map(([key, value]) => [value.eventType, key]),
)
const MQNS_STATUS = Object.keys(MQNS_STATUS_SCHEMA)
export {
  MQNS_EVENT_TYPE_VALUE,
  MQNS_STATUS,
  MQNS_STATUS_SCHEMA,
}
