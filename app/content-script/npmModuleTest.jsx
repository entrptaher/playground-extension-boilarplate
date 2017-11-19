/*
  other NPM Module Test
  The module must be webpack ready
 */

import request from "superagent";
import ChromePromise from 'chrome-promise';

async function test(){
	let superA = await request.get("https://httpbin.org/ip");
	console.log(superA);
}

test();

const chromep = new ChromePromise();
chromep.storage.local.set({foo: 'bar'}).then(() => {
  console.log('foo set');
  return chromep.storage.local.get('foo');
}).then(items => {
  console.log(JSON.stringify(items)); // => {"foo":"bar"}
});
