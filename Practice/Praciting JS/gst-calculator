//  * 🧾 GST Calculator - Tax Lagao Bhai!
//  *
//  * Bunty apni dukaan ke liye GST calculator bana raha hai. Customer ko bill
//  * dena hai jisme base price, GST amount, aur total clearly dikhna chahiye.
//  * GST rate category ke hisaab se change hota hai.
//  *
//  * GST Rates (by category string, case-insensitive):
//  *   - "essential"   => 0% GST  (dal, chawal, atta, etc.)
//  *   - "food"        => 5% GST  (packaged food, restaurant below Rs 7500)
//  *   - "standard"    => 12% GST (processed food, business class tickets)
//  *   - "electronics" => 18% GST (phones, laptops, etc.)
//  *   - "luxury"      => 28% GST (cars, aerated drinks, tobacco)
//  *   - Any other category => return null
//  *
//  * Rules:
//  *   - Calculate: gstAmount = amount * rate / 100
//  *   - Calculate: totalAmount = amount + gstAmount
//  *   - Round gstAmount aur totalAmount to 2 decimal places using
//  *     parseFloat(value.toFixed(2))
//  *   - Return object: { baseAmount, gstRate, gstAmount, totalAmount }
//  *   - category ko lowercase mein compare karo (case-insensitive)
//  *   - Hint: Use toFixed(), parseFloat(), Number.isFinite(), toLowerCase()
//  *
//  * Validation:
//  *   - Agar amount positive finite number nahi hai, return null
//  *   - Agar category string nahi hai, return null
//  *   - Agar category unknown hai, return null

function calculateGST(amount, category) {
  if (Number.isFinite(amount) && amount > 0 && typeof category === "string") {
    category = category.toLowerCase();
    let gstRate = null;
    let gstAmount = null;

    if (category === "essential") {
      gstRate = 0;
      gstAmount = 0;
    } else if (category === "food") {
      gstRate = 5;
      gstAmount = (amount * 5) / 100;
    } else if (category === "standard") {
      gstRate = 12;
      gstAmount = (amount * 12) / 100;
    } else if (category === "electronics") {
      gstRate = 18;
      gstAmount = (amount * 18) / 100;
    } else if (category === "luxury") {
      gstRate = 28;
      gstAmount = (amount * 28) / 100;
    }

    if (gstRate !== null) {
      let totalAmount = amount + gstAmount;
      gstAmount = parseFloat(gstAmount.toFixed(2));
      totalAmount = parseFloat(totalAmount.toFixed(2));
      return {
        baseAmount: amount,
        gstRate: gstRate,
        gstAmount: gstAmount,
        totalAmount: totalAmount,
      };
    }
  }
  return null;
}

console.log(calculateGST(1243, "food"));
