/*

The asyncDelay.js utility exposes a helper function to delay line code execution
- use inside of an async function by running ex. await asyncDelay();
- defaults to 500 milliseconds but you can pass time in ms as a prop ex. await asyncDelay(3000) // waits 3 seconds

--> TL;DR helper function to delay next line code execution by the specefied ms <--

*/

const asyncDelay = (ms = 500) => new Promise((res) => setTimeout(res, ms));

export default asyncDelay;
