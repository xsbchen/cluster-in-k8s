const cluster = require('cluster');

if (cluster.isMaster) {
  console.log('main started:', new Date());

  setInterval(() => {
    console.log('main timer:', new Date());
  }, 1000);

  const worker = cluster.fork();
  worker.on('exit', (code, signal) => {
    if (signal) {
      console.log(`worker was killed by signal: ${signal}`);
    } else if (code !== 0) {
      console.log(`worker exited with error code: ${code}`);
    } else {
      console.log('worker success!');
    }
  });
} else {
  const startAt = new Date();

  console.log('child started:', startAt);

  while (new Date().getTime() - startAt.getTime() <= 30 * 1000) {}

  console.log('child exited:', new Date());
}
