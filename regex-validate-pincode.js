// http://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

https: function validatePIN(pin) {
  if (/\D/gm.test(pin)) {
    return false;
  }
  return /[4,6]/gm.test(pin.length) && /[0-9]/gm.test(pin);
}
