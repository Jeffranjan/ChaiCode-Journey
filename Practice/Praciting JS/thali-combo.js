// function createThaliDescription(thali) {
//   if (
//     thali &&
//     typeof thali === "object" &&
//     typeof thali.name === "string" &&
//     Array.isArray(thali.items) &&
//     typeof thali.price === "number" &&
//     typeof thali.isVeg === "boolean"
//   ) {
//     const name = thali.name.toUpperCase();
//     const vegStatus = thali.isVeg ? "veg" : "Non-Veg";
//     const itemsList = thali.items.join(", ");
//     const thaliPrice = thali.price.toFixed(2);

//     return `${name} (${vegStatus}) - Items: ${itemsList} - Rs.${thaliPrice}`;
//   }
//   return "";
// }

// console.log(
//   createThaliDescription({
//     name: "Rajasthani Thali",
//     items: ["dal", "churma"],
//     price: 250,
//     isVeg: true,
//   }),
// );

// export function getThaliStats(thalis) {
//   // Your code here
//   if (Array.isArray(thalis) && thalis.length > 0) {
//     const vegStatusCount = thalis.filter((t) => t.isVeg).length;
//     const prices = thalis.map((t) => t.prices);
//     const names = thalis.map((p) => thalis.name);
//     const cheapest = Math.min(...thalis.prices);
//     const costliest = Math.max(...thalis.prices);
//     const averagePrice = thalis.reduce((avgPrice) => {
//       return `${avgPrice.toFixed(2)} = ${(cheapest * costliest) / 2}: `;
//     });

//     return thalis.map((thalis) => {
//       return {
//         vegStatusCount,
//         nonVegStatusCount,
//         averagePrice,
//         costliest,
//         cheapest,
//       };
//     });
//   }
//   return null;
// }

// console.log(getThaliStats({totalthalis }));

// export function searchThaliMenu(thalis, query) {
//   if (Array.isArray(thalis) && typeof query === "string") {
//     // 1. Lowercase the query once
//     const lowerQuery = query.toLowerCase();

//     const filteredThali = thalis.filter((t) => {
//       // 2. Check the name
//       const nameMatches = t.name.toLowerCase().includes(lowerQuery);

//       // 3. Check if ANY item in the array matches
//       const itemsMatch = t.items.some((item) =>
//         item.toLowerCase().includes(lowerQuery),
//       );

//       return nameMatches || itemsMatch;
//     });

//     return filteredThali;
//   }
//   return [];
// }

// const thali = {
//   name: "Rajasthani Thali",
//   items: ["dal baati", "churma", "papad"],
//   price: 250,
//   isVeg: true,
// };

// function generateThaliReceipt(customerName, thalis) {
//   if (
//     Array.isArray(thalis) &&
//     thalis.length > 0 &&
//     typeof customerName === "string"
//   ) {
//     const name = thalis.map(() => {});
//   }
//   return "";
// }
