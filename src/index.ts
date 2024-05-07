import { init } from "./init";

function helloWorld() {
  console.log("HELLO WORLD!");
  console.log("This is the library name: ");
  console.log(process.env.LIB_NAME);
  console.log("This is the library: ");
  console.log((window as any)[process.env.LIB_NAME!]);
}

init(helloWorld);

// All functions exported from this file will be available in the global scope.

export function sayHello() {
  console.log("Hello from the library!");
}
