export async function wait(time: number): Promise<void> {
  console.log('waiting for', time, 'ms');

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
