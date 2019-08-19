// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(driver) {
  drivers.push(driver);
}

function destructivelyPrependDriver(driver) {
  drivers.unshift(driver);
}

function destructivelyRemoveLastDriver(driver) {
  drivers.pop(driver);
}

function destructivelyRemoveFirstDriver(driver) {
  drivers.shift(driver);
}

function appendDriver(driver) {
  [...drivers, driver];
}

function prependDriver(driver) {
  [driver, ...drivers];
}

function removeLastDriver() {
  drivers.slice(0, drivers.length - 1);
}

function removeFirstDriver() {
  drivers.slice(-1);
}
