/**
 * THIS FILE IS ONLY USED FOR TESTING, YOU CAN IGNORE IT!
 */

export const testToday = new Date("June 6, 84 00:20:18");
export const testTomorrow = new Date("June 7, 84 12:34:56");
export const testDeliveries = [
  {
    id: "delivery-1",
    description: "Laptop",
    plannedDeliveryDate: testToday,
    isDelivered: true,
    isReturned: false,
  },
  {
    id: "delivery-2",
    description: "Table",
    plannedDeliveryDate: testTomorrow,
    isDelivered: false,
    isReturned: true,
  },
  {
    id: "delivery-3",
    description: "Door",
    plannedDeliveryDate: testToday,
    isDelivered: true,
    isReturned: true,
  },
  {
    id: "delivery-4",
    description: "TV",
    plannedDeliveryDate: testToday,
    isDelivered: false,
    isReturned: false,
  },
  {
    id: "delivery-5",
    description: "Cupboard",
    plannedDeliveryDate: testTomorrow,
    isDelivered: false,
    isReturned: false,
  },
  {
    id: "delivery-6",
    description: "Pillows",
    plannedDeliveryDate: new Date("June 6, 84 00:21:18"),
    isDelivered: false,
    isReturned: false,
  },
  {
    id: "delivery-7",
    description: "Bed",
    plannedDeliveryDate: new Date("June 6, 84 01:20:18"),
    isDelivered: false,
    isReturned: false,
  },
  {
    id: "delivery-8",
    description: "Pillows",
    plannedDeliveryDate: new Date("June 6, 84 00:20:19"),
    isDelivered: false,
    isReturned: false,
  },
  {
    id: "delivery-9",
    description: "Pillows",
    plannedDeliveryDate: new Date("June 6, 83 00:20:18"),
    isDelivered: false,
    isReturned: false,
  },
  {
    id: "delivery-10",
    description: "Pillows",
    plannedDeliveryDate: new Date("July 7, 84 00:20:18"),
    isDelivered: false,
    isReturned: false,
  },
];

export const shouldBeInTodayIdList = [
  "delivery-4",
  "delivery-6",
  "delivery-7",
  "delivery-8",
];
export const shouldBeInTomorrowIdList = ["delivery-5"];
