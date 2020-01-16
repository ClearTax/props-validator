const tap = require("tap");
const { props, propName } = require("../utils/props");
const { isLength } = require("..");

tap.same(isLength(5)(props, propName), null);
tap.same(isLength(5, 1)(props, propName), null);
tap.same(isLength(7)(props, propName), null);
tap.same(isLength(5, 5)(props, propName), null);
tap.throws(
  function() {
    throw isLength(4)(props, propName);
  },
  Error,
  "h"
);
tap.throws(function() {
  throw isLength(5, 7)(props, propName);
}, Error);
tap.throws(function() {
  throw isLength()(props, propName);
}, TypeError);
tap.throws(function() {
  throw isLength("string")(props, propName);
}, TypeError);
tap.throws(function() {
  throw isLength("string", "string")(props, propName);
}, TypeError);
