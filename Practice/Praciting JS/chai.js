function formatChaiMenu(items) {
  // Your code here
  if (Array.isArray(items) && items.length > 0) {
    const filteredItems = items.filter(
      (item) =>
        item.price > 0 && item.name === "" && typeof item.name !== "string",
    );
    filteredItems
      .map((item) => item.name.toUpperCase() + "-Rs" + item.price)
      .join(" | ");
  }
  return "";
}

console.log(formatChaiMenu({ name: "masala chai", price: 15 }));
 