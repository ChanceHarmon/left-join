'use strict'

let setA = [];
let setB = [];

const leftJoit = (setA, setB) => {
  if (setB = null) {
    return setA
  } else {
    for (let i = 0; i < setA.length; i++) {
      if (setA[i] === setB[i]) {
        setA[i].value = setA[i].value + setB[i].value
      }
    }
  }
  return setA;
}
