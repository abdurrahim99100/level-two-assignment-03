import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

async function main() {
  await mongoose.connect(config.DATABASE_URL as string);
  app
  .listen(config.PORT, () => {
    console.log(`Example app listening on port ${config.PORT}`)
  })
}

main();
