Tests if setInterval is slowed down or suspended when user goes to another browser tab / window. When interval is running, every 300 ms counter in page title should increase.

To run `with_worker.html` you need to use a HTTP server running locally, because simply opening file (by `file:// ...`) will block access to the worker file. I used `http-server` local server running on Node.js that displays the file under `http://localhost:8080/no_worker.html` and `http://localhost:8080/with_worker.html` respectively.

The results are so far:
- **Firefox** 57.0, **Mac** Sierra - main JS slowed down, Web Worker working normally
- **Chrome** 63.0, **Mac** Sierra - main JS slowed down, Web Worker working normally
- **Safari** 11.0, **Mac** Sierra - main JS slowed down after ~2 s, Web Worker slowed down after some longer time (~20 s)
