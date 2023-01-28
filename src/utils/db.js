const mongoose = require("mongoose");
const { DATABASE_URL } = require("./Config");

async function main() {
  await mongoose.connect(DATABASE_URL)
}

main().then(() => {
  console.log(`=====> ESTABLISHED CONNECTION TO DB SUCCESSFULLY <======`);
}).catch((err) => {
  console.error(`=====> ERROR ESTABLISHING CONNECTION TO DB <======`);
  console.log(err)
})

module.exports = mongoose;
