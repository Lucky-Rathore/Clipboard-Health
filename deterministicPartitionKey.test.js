const deterministicPartitionKey = require('./deterministicPartitionKey')

test('if event is empty', () => {  expect(deterministicPartitionKey({})).toBe("c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862");
});

test('if partition key is a string', () => {  expect(deterministicPartitionKey({"partitionKey":"testPartitionKey"})).toBe("testPartitionKey");
});

test('if partition key is a integer', () => {  expect(deterministicPartitionKey({"partitionKey": 1007 })).toBe("1007");
});

test('if event is null', () => {  expect(deterministicPartitionKey(null)).toBe("0");
});

test('if partition key length is greater than 256', () => {  expect(deterministicPartitionKey({"partitionKey":"c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862"})).toBe("dbdbea1dfd870ff4c4174b3331d7d332776fdbf2438dc7c910d2c889ca98a62eccb077cac648a3fa40e59362d2f393cf41a7ee3cf9d29a567b74c8353a3d0abc");
});
