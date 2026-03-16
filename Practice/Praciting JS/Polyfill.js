if (!Array.prototype.myMap) {
  Array.prototype.JayMap = function (callback, thisArg) {
    if (this == null) {
      throw new TypeError("Array.prototype.JayMap called on null or undefined");
    }

    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    const result = [];

    const O = Object(this);
    const len = O.length >>> 0;

    for (let i = 0; i < len; i++) {
      if (i in O) {
        const mappedValue = callback.call(thisArg, O[i], i, O);
        result[i] = mappedValue;
      }
    }

    return result;
  };
}
