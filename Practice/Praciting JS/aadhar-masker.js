function maskAadhaar(aadhaarNumber) {
  // Your code here
  if (
    typeof aadhaarNumber === "string" &&
    aadhaarNumber.length === 12 &&
    !/\D/.test(aadhaarNumber)
  ) {
    const mask = "X".repeat(4);
    const slicedAadhar = `${mask}-${mask}-${aadhaarNumber.slice(-4)}`;
    console.log(slicedAadhar);
  } else return "INVALID";
}

console.log(maskAadhaar("123456789102"));
