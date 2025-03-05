/**
 * Your delivery app is getting bigger and you need to create a function that gives the status of the delivery.
 *
 * A delivery can have 3 statuses:
 *   DELIVERED -> If the delivery has successfully completed
 *   RETURNED -> If the delivery was returned to the sender
 *   PENDING -> If the delivery is in progress
 */

/** DO NOT EDIT THE BELOW CONSTANT VARIABLE */
const DELIVERY_STATUS = {
  DELIVERED: "STATUS_DELIVERED",
  RETURNED: "STATUS_RETURNED",
  PENDING: "STATUS_PENDING",
};
/** DO NOT EDIT THE ABOVE CONSTANT VARIABLE */

/**
 * Finish this function.
 *
 * The `delivery` parameter is an object with the structure:
 *
 * {
 *   description: string,
 *   isDelivered: boolean,
 *   isReturned: boolean,
 * }
 *
 * The function should return the status using the `DELIVERY_STATUS` variable associated with the status of the delivery.
 * If a delivery is not returned, nor delivered then it is still pending.
 * If a delivery is BOTH returned and delivered then it is returned
 * The other situations should be obvious.
 */
const getDeliveryStatus = (delivery) => {
    if (delivery.isDelivered === true && delivery.isReturned === false) {
        return DELIVERY_STATUS.DELIVERED;
    }
    else if (delivery.isDelivered === false && delivery.isReturned === true) {
        return DELIVERY_STATUS.RETURNED;
    }
    else if (delivery.isDelivered === true && delivery.isReturned === true) {
        return DELIVERY_STATUS.RETURNED;
    }
    else {
        return DELIVERY_STATUS.PENDING;
    }
};

/**
 * TEST CODE. DO NOT EDIT
 */
console.assert(
  getDeliveryStatus({
    description: "Groceries",
    isDelivered: false,
    isReturned: false,
  }) === DELIVERY_STATUS.PENDING
);
console.assert(
  getDeliveryStatus({
    description: "Groceries",
    isDelivered: true,
    isReturned: false,
  }) === DELIVERY_STATUS.DELIVERED
);
console.assert(
  getDeliveryStatus({
    description: "Groceries",
    isDelivered: false,
    isReturned: true,
  }) === DELIVERY_STATUS.RETURNED
);
console.assert(
  getDeliveryStatus({
    description: "Groceries",
    isDelivered: true,
    isReturned: true,
  }) === DELIVERY_STATUS.RETURNED
);
