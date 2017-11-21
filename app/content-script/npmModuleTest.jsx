/*
  other NPM Module Test
  The module must be webpack ready
 */
import superagent from "superagent";
import axios from "axios";
import ChromePromise from "chrome-promise";

async function test() {
	try {
		let replies = {};

		replies["superagent"] = await superagent
			.get("https://httpbin.org/ip")
			.then(data => data.body);
		replies["axios"] = await axios
			.get("https://httpbin.org/ip")
			.then(data => data.data);

		console.log(replies);
	} catch (error) {
		console.log(error);
	}
}

test();

const chromep = new ChromePromise();
chromep.storage.local
	.set({ foo: "bar" })
	.then(() => {
		console.log("foo set");
		return chromep.storage.local.get("foo");
	})
	.then(items => {
		console.log(JSON.stringify(items)); // => {"foo":"bar"}
	});
