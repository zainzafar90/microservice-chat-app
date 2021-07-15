import "reflect-metadata";

import { initConnection } from "#root/db/connection";

initConnection()
  .then(() => {
    console.log("Connection to database established");
  })
  .catch((err) => {});
