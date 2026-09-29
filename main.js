// Order Totals and Top Customer Finder
// Calculates each order's total, groups spending by customer, and finds the customer who spent the most.

const orders = [
  { id: 1, customer: "Ama",  items: [{ name: "Laptop", price: 900 }, { name: "Mouse", price: 25 }] },
  { id: 2, customer: "Kojo", items: [{ name: "Phone", price: 600 }] },
  { id: 3, customer: "Ama",  items: [{ name: "Keyboard", price: 80 }, { name: "Mouse", price: 25 }] },
];

// Add up the prices of the items inside one order
const orderTotal = (order) =>
  order.items.reduce((sum, item) => sum + item.price, 0);

// Build an object of { customerName: totalSpent }
function totalsByCustomer(orders) {
  return orders.reduce((acc, order) => {
    acc[order.customer] = (acc[order.customer] || 0) + orderTotal(order);
    return acc;
  }, {});
}

// Find the customer who spent the most
function topCustomer(totals) {
  const [name, amount] = Object.entries(totals)
    .sort((a, b) => b[1] - a[1])[0];
  return { name, amount };
}

const totals = totalsByCustomer(orders);
console.log(totals);              // { Ama: 1030, Kojo: 600 }
console.log(topCustomer(totals)); // { name: 'Ama', amount: 1030 }