/**
 * Your delivery company has gotten so big it now has its own drivers, which means we now also have a driver model (as we call it).
 * As a driver can do multiple deliveries we cannot have the same driver data copied over to every delivery, which is why we generally use 'id`s'.
 * As you can see in the `testDeliveries` object in the TEST CODE we now have an id for every delivery and every delivery has a `driverId` that links to the driver.
 */

/**
 * Finish this function.
 *
 * The `deliveries` parameter is an array of objects with the structure:
 * [
 *   {
 *     description: string,
 *     isDelivered: boolean,
 *     isReturned: boolean,
 *     deliveryId: string,
 *     driverId: string
 *   }
 * ]
 *
 * The function should return an object with every `driverId` as a property.
 * Per `driverId` property we get an array with all the deliveries that `driverId` is responsible for.
 * See the TEST CODE for an example of what the result should look like.
 */
const getDeliveriesPerDriver = (deliveries) => {

};

/**
 * TEST CODE. DO NOT EDIT
 */
const testDeliveries = [
  {
    description: "Groceries",
    isDelivered: false,
    isReturned: true,
    driverId: "dr---1",
    deliveryId: "d----1",
  },
  {
    description: "Table",
    isDelivered: true,
    isReturned: true,
    driverId: "dr---2",
    deliveryId: "d----2",
  },
  {
    description: "Bed",
    isDelivered: true,
    isReturned: false,
    driverId: "dr---1",
    deliveryId: "d----3",
  },
  {
    description: "Cupboard",
    isDelivered: false,
    isReturned: true,
    driverId: "dr---3",
    deliveryId: "d----4",
  },
];
const testResult = getDeliveriesPerDriver(testDeliveries);
/**
 * The testResult for this example should look like:
 {
  'dr---1': [
    {
      description: 'Groceries',
      isDelivered: false,
      isReturned: true,
      driverId: 'dr---1',
      deliveryId: 'd----1'
    },
    {
      description: 'Bed',
      isDelivered: true,
      isReturned: false,
      driverId: 'dr---1',
      deliveryId: 'd----3'
    }
  ],
  'dr---2': [
    {
      description: 'Table',
      isDelivered: true,
      isReturned: true,
      driverId: 'dr---2',
      deliveryId: 'd----2'
    }
  ],
  'dr---3': [
    {
      description: 'Cupboard',
      isDelivered: false,
      isReturned: true,
      driverId: 'dr---3',
      deliveryId: 'd----4'
    }
  ]
}
*/
console.assert(testResult["dr---1"].length === 2);
console.assert(
  testResult["dr---1"].map((delivery) => delivery.deliveryId).includes("d----1")
);
console.assert(
  testResult["dr---1"].map((delivery) => delivery.deliveryId).includes("d----3")
);
console.assert(testResult["dr---2"].length === 1);
console.assert(
  testResult["dr---2"].map((delivery) => delivery.deliveryId).includes("d----2")
);
console.assert(testResult["dr---3"].length === 1);
console.assert(
  testResult["dr---3"].map((delivery) => delivery.deliveryId).includes("d----4")
);
