import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const transform = async () => {
  const transformStream = new Transform({
    transform: (chunk, _, cb) => cb(null, chunk.toString().split('').reverse().join('')),
  });

  pipeline(process.stdin, transformStream, process.stdout);
};

await transform();
