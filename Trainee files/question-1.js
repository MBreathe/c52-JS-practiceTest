/**
 * You are working on the UI of your app, but the backend that will provide your data is not ready yet, so you decide to write some dummy data.
 * You can then use this data in your frontend code, and later, when the backend is ready you can replace it with a request to get that data.
 *
 * You are building a delivery app and want to have an array of deliveries that adheres to the following:
 * - The array should be called `deliveries`
 * - Each item should have a property called `description` which describes what is being delivered
 * - The array needs to have at least 1 item that has the `isDelivered` property set to `true` (to indicate the delivery is completed)
 * - The array needs to have at least 1 item that has the `isDelivered` property set to `false`
 */



/**
 * TEST CODE. DO NOT EDIT
 */
console.assert(deliveries.some((delivery) => delivery.isDelivered === true));
console.assert(deliveries.some((delivery) => delivery.isDelivered === false));

deliveries.forEach((delivery) => {
  console.assert(typeof delivery.description === "string");
});
