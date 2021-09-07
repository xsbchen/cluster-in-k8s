const startAt = new Date();

console.log('child %d started:', process.pid, startAt);

while (new Date() - startAt <= 30 * 1000) {
  if (new Date() - startAt > 5 * 1000 && Math.random() > 0.9) {
    throw new Error('crashed');
  }
}

console.log('child %d exited:', process.pid, new Date() - startAt);
