export function MapStream<I,O>(map: (i: I) => O) : TransformStream<I,O> {
	return new TransformStream({
		transform(chunk, controller) {
			try {
				controller.enqueue(map(chunk))
			} catch(e) {}
		}
	})
}

export async function* asIterable<T>(stream: ReadableStream<T>) : AsyncGenerator<T> {
	const reader = stream.getReader();
	while(true) {
		const {value, done} = await reader.read();
		if(done) break;
		yield value;
	}
}