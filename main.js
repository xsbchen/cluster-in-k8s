const { fork } = require('child_process');

console.log('main started:', new Date());

setInterval(() => {
  console.log('main timer:', new Date());
}, 1000);

for (let i = 0; i < 4; i++) {
  const child = fork('./child.js', {});
  child.on('exit', (code, signal) => {
    if (signal) {
      console.log(`worker was killed by signal: ${signal}`);
    } else if (code !== 0) {
      console.log(`worker exited with error code: ${code}`);
    } else {
      console.log('worker success!');
    }
  });
}
