const tap = require("tap");
const { isUndefined, number } = require("../utils/assertion");

tap.test("isUndefined", t => {
  t.same(isUndefined(1), null);
  t.throws(function() {
    throw isUndefined();
  }, TypeError);
  t.done();
});

tap.test("number", t => {
  t.same(number(1), null);
  t.throws(function() {
    throw number("string");
  }, TypeError);
  t.throws(function() {
    throw number();
  }, TypeError);
  t.done();
});
