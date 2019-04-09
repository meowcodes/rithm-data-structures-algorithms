const Deque = require("./deque");

let deque;

beforeEach(function() {
  deque = new Deque();
});

describe("appendleft", function() {
  it("places the value at the beginning of deque and returns undefined", function() {
    expect(deque.appendleft(10)).toBe(undefined);
    expect(deque.first.val).toBe(10);
    expect(deque.last.val).toBe(10);
    deque.appendleft(100);
    expect(deque.first.val).toBe(100);
    expect(deque.last.val).toBe(10);
    deque.appendleft(1000);
    expect(deque.first.val).toBe(1000);
    expect(deque.last.val).toBe(10);
    expect(deque.first.next.val).toBe(100);
    expect(deque.last.prev.val).toBe(100);
  });
});

describe("appendright", function() {
  it("places the value at the end of deque and returns undefined", function() {
    expect(deque.appendright(10)).toBe(undefined);
    expect(deque.first.val).toBe(10);
    expect(deque.last.val).toBe(10);
    deque.appendright(100);
    expect(deque.first.val).toBe(10);
    expect(deque.last.val).toBe(100);
    deque.appendright(1000);
    expect(deque.first.val).toBe(10);
    expect(deque.last.val).toBe(1000);
    expect(deque.first.next.val).toBe(100);
    expect(deque.last.prev.val).toBe(100);
  });
});

describe("popleft", function() {
  it("returns the value of the node removed at the beginning of deque", function() {
    deque.appendleft(10);
    deque.appendleft(100);
    deque.appendleft(1000);
    let removed = deque.popleft();
    expect(removed).toBe(1000);
    expect(deque.size).toBe(2);
    expect(deque.first.prev).toBe(null);
    expect(deque.first.next.val).toBe(10);
    deque.popleft();
    deque.popleft();
    expect(deque.size).toBe(0);
  });

  it("throws an error if the deque is empty", function() {
    expect(() => deque.popleft()).toThrow(Error);
  });
});

describe("popright", function() {
  it("returns the value of the node removed at the end of deque", function() {
    deque.appendleft(10);
    deque.appendleft(100);
    deque.appendleft(1000);
    let removed = deque.popright();
    expect(removed).toBe(10);
    expect(deque.size).toBe(2);
    expect(deque.last.prev.val).toBe(1000);
    expect(deque.last.next).toBe(null);
    deque.popright();
    deque.popright();
    expect(deque.size).toBe(0);
  });

  it("throws an error if the deque is empty", function() {
    expect(() => deque.popright()).toThrow(Error);
  });
});

describe("peekleft", function() {
  it("returns the value at the start of the deque", function() {
    deque.appendleft(3);
    expect(deque.peekleft()).toBe(3);
    deque.appendleft(5);
    expect(deque.peekleft()).toBe(5);
  });
});

describe("peekright", function() {
  it("returns the value at the end of the deque", function() {
    deque.appendleft(3);
    expect(deque.peekright()).toBe(3);
    deque.appendleft(5);
    expect(deque.peekright()).toBe(3);
  });
});

describe("isEmpty", function() {
  it("returns true for empty deques", function() {
    expect(deque.isEmpty()).toBe(true);
  });

  it("returns false for nonempty deques", function() {
    deque.appendleft(3);
    expect(deque.isEmpty()).toBe(false);
  });
});
