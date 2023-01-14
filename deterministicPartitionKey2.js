const crypto = require("crypto");

//Input: event object
//Return:"partition key" 
//Return Type: String
//step 1: function return TRIVIAL_PARTITION_KEY("0") if event is null 
//step 2: if event.partitionKey if it exist 
//step 3: return hash value of "stringify event" if event.partitionKey not exist. (uses sha3-512 algorithm)
//step 4: if returning key length is greater then 256, Hash value of key is returned. 
function deterministicPartitionKey(event){
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let partitionKey;

  if (event) { 
    if (event.partitionKey) { 
      partitionKey = event.partitionKey;
      if (typeof key !== "string") {
        partitionKey = JSON.stringify(key);
      }
    } else { 
      const stringifyEvent = JSON.stringify(event);
      partitionKey = crypto.createHash("sha3-512").update(stringifyEvent).digest("hex");
    }    
    if (partitionKey.length > MAX_PARTITION_KEY_LENGTH) {
      partitionKey = crypto.createHash("sha3-512").update(partitionKey).digest("hex");
    }
  }
  else {
    partitionKey = TRIVIAL_PARTITION_KEY;
  }
  return partitionKey;
};

module.exports = deterministicPartitionKey;
