const test = require('node:test');
const assert = require('node:assert');
const http = require('node:http');
const server = require('./server.js');

test('GET /health returns status ok', async () => {
  await new Promise((resolve) => server.listen(0, resolve));
  const port = server.address().port;

  try {
    const res = await fetch(`http://localhost:${port}/health`);
    assert.strictEqual(res.status, 200);
    const data = await res.json();
    assert.deepStrictEqual(data, { status: 'ok' });
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
});
