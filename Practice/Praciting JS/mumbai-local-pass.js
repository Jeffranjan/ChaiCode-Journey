// generateLocalPass({ name: "rahul sharma", from: "dadar", to: "andheri", classType: "first" })
// => "MUMBAI LOCAL PASS\n---\nName: RAHUL SHARMA\nFrom: Dadar\nTo: Andheri\nClass: FIRST\nPass ID: FDADAND"
// generateLocalPass(null) => "INVALID PASS"

function generateLocalPass(passenger) {
  // Your code here
  if (typeof passenger === "object" && passenger !== null) {
    if (
      passenger.name &&
      passenger.from &&
      passenger.name != "" &&
      passenger.from != "" &&
      passenger.to != "" &&
      passenger.classType != ""
    ) {
      if (
        passenger.classType.toLowerCase() === "first" ||
        passenger.classType.toLowerCase() === "second"
      ) {
        const name = passenger.name.toUpperCase();
        const from =
          passenger.from.charAt(0).toUpperCase() +
          passenger.from.slice(2 - 1).toLowerCase();
        const to =
          passenger.to.charAt(0).toUpperCase() +
          passenger.to.slice(2 - 1).toLowerCase();
        const classType = passenger.classType.toUpperCase();
        const passID =
          classType.charAt(0) +
          passenger.from.toUpperCase().slice(0, 3) +
          passenger.to.toUpperCase().slice(0, 3);

        return `MUMBAI LOCAL PASS\n---\nName: ${name}\nFrom: ${from}\nTo: ${to}\nClass: ${classType}\nPass ID: ${passID}`;
      } else return "INVALID PASS";
    } else return "INVALID PASS";
  } else return "INVALID PASS";
}

const passenger = {
  name: "rahul sharma",
  from: "dadar",
  to: "andheri",
  classType: "Second",
};

console.log(generateLocalPass(passenger));
