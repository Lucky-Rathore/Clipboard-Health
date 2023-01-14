const crypto = require("crypto");

function deterministicPartitionKey(event){
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  if (event) {
    if (event.partitionKey) {
      candidate = event.partitionKey;
      console.log(1);
    } else {
      const data = JSON.stringify(event);
      candidate = crypto.createHash("sha3-512").update(data).digest("hex");
      console.log(2);
    }
  }

  if (candidate) {
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
      console.log(3);
    }
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
    console.log(4);
  }
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
    console.log(5);
  }
  return candidate;
};

module.exports = deterministicPartitionKey;