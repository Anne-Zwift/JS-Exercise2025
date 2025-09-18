function calculateCartTotal(cart, user) {
  const PREMIUM_DISCOUNT_MULTIPLIER = 0.9;
  const SHIPPING_COST = 5;
  const FREE_SHIPPING_THRESHOLD = 50;

  // Calculate the base total using reduce()
  const subtotal = cart.reduce((accumulator, item) => accumulator + item.price, 0);

  // Apply discount if the user is premium
  const totalAfterDiscount = user.isPremium ? 
    subtotal * PREMIUM_DISCOUNT_MULTIPLIER : 
    subtotal;

  // Add shipping if the total is below the free shipping threshold
  const finalTotal = totalAfterDiscount < FREE_SHIPPING_THRESHOLD ? 
    totalAfterDiscount + SHIPPING_COST : 
    totalAfterDiscount;

  // Return formatted string
  return `Total: £${finalTotal.toFixed(2)}`;
}


// 1. calculate price
function calculateCartTotal(cart) {
  return cart.reduce((total, item) => total + item.price, 0);
}
// 2. apply discount
function applyDiscount(total, user) {
  if (user.isPremium) {
    return total * PREMIUM_DISCOUNT_MULTIPLIER;
  }
  return total;
}
// 3. add shipping
function addShippingCost(total) {
  const PREMIUM_DISCOUNT_MULTIPLIER = 0.9;
  const SHIPPING_COST = 5;
  const FREE_SHIPPING_THRESHOLD = 50;
  
  if (total < FREE_SHIPPING_THRESHOLD) {
    return total + SHIPPING_COST;
  }
  return total;
}
// 4. total sum
function formatCurrency(amount) {
  return `Total: $${amount.toFixed(2)};`
}

// 5. controller function

function calculateFinalPrice(cart, user) {
  const cartTotal = calculateCartTotal(cart);
  const totalAfterDiscount = applyDiscount(cartTotal, user);
  const finalTotal = addShippingCost(totalAfterDiscount);
  return formatCurrency(finalTotal);
}