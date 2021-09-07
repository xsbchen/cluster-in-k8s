const { fork } = require('child_process');

console.log('main started:', new Date());

let lastTime = new Date();
setInterval(() => {
  const nowTime = new Date();
  console.log('main timer:', nowTime - lastTime);
  lastTime = nowTime;
}, 1000);

for (let i = 0; i < 4; i++) {
  const child = fork('./child.js', [], { stdio: 'inherit' });
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
