// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]
const copyOfDrivers = drivers.slice();

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

function appendDriver(name){

  copyOfDrivers.push(name);
}
