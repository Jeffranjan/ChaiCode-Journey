function fixBollywoodTitle(title) {
  // Your code here
  if (typeof title === "string" && title.length > 0) {
    title = title.trim().toLowerCase().split("");

    console.log(title);
  }
  return "";
}

fixBollywoodTitle("  tare         Zameen Par   ");
