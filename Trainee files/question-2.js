/**
 * For your delivery app you need to write a function that calculates the total price of the products given.
 *
 * Complete the following function. The products array that is given has the following structure:
 * [
 *   {
 *     product: string,
 *     priceInCents: number,
 *   }
 * ]
 */

const calculateTotalPriceInCents = (products) => {
    return products.reduce((total, product) => total + product.priceInCents, 0)
};

/**
 * TEST CODE. DO NOT EDIT
 */
console.assert(
  calculateTotalPriceInCents([
    { product: "Cookies", priceInCents: 129 },
    { product: "Chocolate", priceInCents: 239 },
  ]) === 368
);
console.assert(
  calculateTotalPriceInCents([
    { product: "Cookies", priceInCents: 129 },
    { product: "Chocolate", priceInCents: 239 },
    { product: "Coffee", priceInCents: 319 },
  ]) === 687
);
console.assert(
  calculateTotalPriceInCents([
    { product: "Cookies", priceInCents: 129 },
    { product: "Chocolate", priceInCents: 239 },
    { product: "Coffee", priceInCents: 319 },
    { product: "Sugar", priceInCents: 113 },
  ]) === 800
);
