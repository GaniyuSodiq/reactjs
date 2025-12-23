import OpenAI from "openai" // we import the OpenAI class

// setup an instance of the OpenAI class and saved it to const OpenAI
/**
 * this is where we give our API key
 * remeber if you have any secret key in your program, you have to hide it in the backend
 * and in this case, OpenAI is giving us a warning if we are to use the apikey directly
 */

// Error: It looks like you're running in a browser-like environment. 
// This is disabled by default, as it risks exposing your secret API credentials to attackers. 
// If you understand the risks and have appropriate mitigations in place, 
// you can set the `dangerouslyAllowBrowser` option to `true`, e.g., new OpenAI({ apiKey, dangerouslyAllowBrowser: true }); 
// https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety

const openai = new OpenAI({
    apikey: "123ghb",
    dangerouslyAllowBrowser: true
})

console.log(openai)

/**
 * When you are working with OpenAI API you will find they have excellent docs
 * but there are lots of info there. What we are looking for is the Chat Completion API
 * The Chat Completion API is what we use for any text generation AI in OpenAI
 */