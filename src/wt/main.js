import { cpus } from 'os';
import { Worker } from 'worker_threads';

const performCalculations = async () => {
  const workers = Array.from(
    { length: cpus().length },
    (_, i) =>
      new Promise((resolve) => {
        const worker = new Worker('./src/wt/worker.js', { workerData: 10 + i });

        worker.on('message', (msg) => resolve({ status: 'resolved', data: msg }));
        worker.on('error', () => resolve({ status: 'error', data: null }));
        worker.on('exit', (code) => {
          if (code !== 0) {
            return resolve({ status: 'error', data: null });
          }
        });
      })
  );

  const result = await Promise.all(workers);

  console.log(result);
};

await performCalculations();
