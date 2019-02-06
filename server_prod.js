//require('dotenv').config(); 
const db = require("./dbConfig");
const port = process.env.PORT || 3300;
const { server } = require('./index.js');

const initialize = async(server,port) => {
    await db.migrate.latest()
    await db.seed.run();
    server.listen(port, () => {
        console.log(`\n=== Server listening on port ${port}\n`);
      });
}

initialize(server,port);