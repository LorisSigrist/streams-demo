import "./index.css";
import { ContactSchema } from '../shared.js';
import { display } from './display.js';
import { MapStream, asIterable } from "./helpers.js"
import { JSONParser } from "@streamparser/json-whatwg"


const response = await fetch('http://localhost:3000/');

/*
const contacts = await response.json();

for (const contact of contacts) {
  display(contact)
}
*/

const parser = new JSONParser({ paths: ["$.*"], keepStack: false, stringBufferSize: undefined })

const stream = response.body!
  .pipeThrough(parser)
  .pipeThrough(MapStream(result => result.value))
  .pipeThrough(MapStream(ContactSchema.parse))


for await (const contact of asIterable(stream)) {
  display(contact)
}
