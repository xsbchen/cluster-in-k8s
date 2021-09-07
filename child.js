const startAt = new Date();

console.log('child %d started:', process.pid, startAt);

while (new Date().getTime() - startAt.getTime() <= 30 * 1000) {}

console.log('child %d exited:', process.pid, new Date());
