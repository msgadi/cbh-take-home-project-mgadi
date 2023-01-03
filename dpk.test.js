const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("should return the trivial partition key when given a falsy event", () => {
    expect(deterministicPartitionKey(null)).toEqual("0");
    expect(deterministicPartitionKey()).toEqual("0");
  });

  it("should return the event's partition key when it exists", () => {
    expect(deterministicPartitionKey({ partitionKey: "abc" })).toEqual("abc");
  });

  it("should return a SHA3-512 hash of the event's data when the event has no partition key", () => {
    const event = { foo: "bar" };
    const expectedHash = require("crypto").createHash("sha3-512").update(JSON.stringify(event)).digest("hex");
    expect(deterministicPartitionKey(event)).toEqual(expectedHash);
  });

  it("should return a SHA3-512 hash of the candidate if it is too long", () => {
    const event = { partitionKey: "x".repeat(257) };
    const expectedHash = require("crypto").createHash("sha3-512").update(event.partitionKey).digest("hex");
    expect(deterministicPartitionKey(event)).toEqual(expectedHash);
  });

  it("should return a stringified version of the candidate if it is not a string", () => {
    const event = { partitionKey: { foo: "bar" } };
    expect(deterministicPartitionKey(event)).toEqual(JSON.stringify(event.partitionKey));
  });
});