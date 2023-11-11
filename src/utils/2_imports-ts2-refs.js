// https://twitter.com/dr_sensor/status/1723468421722210367

/*
Import a d.ts file and reference exported types

my.d.ts contains: 
  export function myFun(a: string, b: string, c: string): number;

myFun is referenced via @type $["myFun"]
*/

/**
 * @typedef {import("./imports/my.d.ts")} $ 
 */

/** @type $["myFun"] */
export function fun(a, b, c) {
 return 1
}
