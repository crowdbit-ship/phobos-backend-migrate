// src/services/ticket/ticket.helper.ts
function getTicketCountAvailable(item, _groups) {
  const group = _groups.find(
    (grp) => grp._id === item.tkt_grp,
  )
  if (group && group.tickets_available) {
    return Math.min(
      item.tickets_available,
      group.tickets_available,
    )
  }
  return 0
}
function getTicketCountPerPerson(item, _groups) {
  if (!item.override) {
    return item.per_person
  }
  const group = _groups.find(
    (grp) => grp._id === item.tkt_grp,
  )
  if (group && group.per_person) {
    return group.per_person
  }
  return 0
}
function isTicketAvailable({ _groups, item, ticketTypes }) {
  let count_available = 0
  let per_person = 0
  if (item.tickets_available) {
    if (item.tkt_grp) {
      count_available = getTicketCountAvailable(
        item,
        _groups,
      )
      per_person = getTicketCountPerPerson(item, _groups)
    }
    if (item._is === '_bundle') {
      per_person = item.per_person
      const { _types } = item
      if (_types && _types.length) {
        const available = _types.map((type) => {
          const fullData = ticketTypes.find(
            (data) => data._id === type.ticket_type_id,
          )
          if (fullData.tkt_grp) {
            return getTicketCountAvailable(
              fullData,
              _groups,
            )
          }
          return fullData.tickets_available
        })
        count_available = Math.min(...available)
      }
    }
  }
  if (count_available) {
    return {
      count_available,
      per_person,
      msg: 'Available',
    }
  }
  return {
    count_available,
    per_person,
    msg: 'Ticket is not available',
  }
}

// src/services/order/order.constant.js
const ORDER_STATUS_SCHEMA = {
  _new: {
    title: 'Waiting For Payment',
    color: 'var(--action)',
    twColor: 'success',
  },
  _pending: {
    title: 'Pending Payment',
    color: 'var(--warning)',
    twColor: 'warning',
  },
  _started: {
    title: 'Payment Started',
    color: 'var(--warning)',
    twColor: 'warning',
  },
  _proccesing: {
    title: 'Proccesing Payment',
    color: 'var(--warning))',
    twColor: 'warning',
  },
  _paid: {
    title: 'Payment Received',
    color: 'var(--neutral)',
    twColor: 'default',
  },
  _invoice: {
    title: 'Issuing Invoice',
    color: 'var(--neutral)',
    twColor: 'default',
  },
  _done: {
    title: 'Invoice Ready',
    color: 'var(--neutral)',
    twColor: 'default',
  },
  _refund: {
    title: 'Payment Refunded',
    color: 'var(--critical)',
    twColor: 'danger',
  },
  _cancelled: {
    title: 'Cancelled',
    color: 'var(--critical)',
    twColor: 'danger',
  },
  _failed: {
    title: 'Payment Failed',
    color: 'var(--critical)',
    twColor: 'danger',
  },
  _error: {
    title: 'System Error',
    color: 'var(--critical)',
    twColor: 'danger',
  },
  _internal: {
    title: 'Internally Isued',
    color: 'var(--neutral)',
    twColor: 'default',
  },
}

// src/services/coupon/coupon.constant.ts
const COUPON_STATUS_SCHEMA = {
  _new: {
    title: 'New',
    color: 'var(--neutral)',
    twColor: '',
  },
  _inactive: {
    title: 'Disabled',
    color: 'var(--neutral)',
    twColor: '',
  },
  _active: {
    title: 'Active',
    color: 'var(--action)',
    twColor: '',
  },
}
const COUPON_STATUS_OPTIONS = Object.keys(
  COUPON_STATUS_SCHEMA,
).map((key) => ({
  value: key,
  label: COUPON_STATUS_SCHEMA[key].title,
  color: COUPON_STATUS_SCHEMA[key].color,
}))
const COUPON_TYPE_SCHEMA = {
  _fixed: {
    title: 'Fixed Amount',
    color: '',
    twColor: '',
  },
  _percent: {
    title: 'Percentage Discount',
    color: '',
    twColor: '',
  },
}
const COUPON_TYPE_OPTIONS = Object.keys(
  COUPON_TYPE_SCHEMA,
).map((key) => ({
  value: key,
  label: COUPON_TYPE_SCHEMA[key].title,
  color: COUPON_TYPE_SCHEMA[key].color,
}))

// src/services/ticket/ticket.constant.ts
const TICKET_STATUS_SCHEMA = {
  _new: {
    title: 'Available',
    color: 'var(--action)',
  },
  _issued: {
    title: 'Issued',
    color: 'var(--neutral)',
  },
  _sold: {
    title: 'Sold',
    color: 'var(--neutral)',
  },
  _reserved: {
    title: 'Reserved',
    color: 'var(--warning)',
  },
}
const TICKET_STATUS_OPTIONS = Object.keys(
  TICKET_STATUS_SCHEMA,
).map((key) => {
  return {
    value: key,
    label: TICKET_STATUS_SCHEMA[key].title,
    color: TICKET_STATUS_SCHEMA[key].color,
  }
})
const TICKET_STATE_SCHEMA = {
  undefined: {
    title: '',
    color: '',
    twColor: '',
  },
  _invited: {
    title: 'Invite Sent',
    color: 'var(--action)',
    twColor: 'default',
  },
  _logged: {
    title: 'User Logged In',
    color: 'var(--action)',
    twColor: 'default',
  },
  _used: {
    title: 'Used',
    color: 'var(--action)',
    twColor: 'default',
  },
}
const TICKET_STATE_OPTIONS = Object.keys(
  TICKET_STATE_SCHEMA,
).map((key) => {
  return {
    value: key,
    label: TICKET_STATE_SCHEMA[key].title,
    color: TICKET_STATE_SCHEMA[key].color,
  }
})
const TICKET_TYPE_STATUS_SCHEMA = {
  _ready: {
    title: 'Ready for Sale',
    color: 'var(--neutral)',
  },
  _active: {
    title: 'For Sale',
    color: 'var(--action)',
  },
  _sold_out: {
    title: 'Sold Out',
    color: 'var(--neutral)',
  },
  _inactive: {
    title: 'Disabled',
    color: 'var(--warning)',
  },
}
const TICKET_TYPE_OPTIONS = Object.keys(
  TICKET_TYPE_STATUS_SCHEMA,
).map((key) => {
  return {
    value: key,
    label: TICKET_TYPE_STATUS_SCHEMA[key].title,
    color: TICKET_TYPE_STATUS_SCHEMA[key].color,
  }
})
export {
  COUPON_STATUS_SCHEMA,
  ORDER_STATUS_SCHEMA,
  TICKET_STATE_SCHEMA,
  isTicketAvailable,
}
