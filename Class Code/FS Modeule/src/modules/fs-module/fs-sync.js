import * as fs from "node:fs";

fs.writeFile("async.txt", "Hello Aysnch File", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("File written successfully");
});
