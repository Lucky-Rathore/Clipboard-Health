const deterministicPartitionKey = require('./deterministicPartitionKey')

test('if event is empty', () => {  expect(deterministicPartitionKey({})).toBe("c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862");
});

test('if partition key is a string', () => {  expect(deterministicPartitionKey({"partitionKey":"testPartitionKey"})).toBe("testPartitionKey");
});

test('if partition key is a integer', () => {  expect(deterministicPartitionKey({"partitionKey": 1007 })).toBe("1007");
});

test('if partition key is a integer', () => {  expect(deterministicPartitionKey({"partitionKey": 1007 })).toBe("1007");
});
