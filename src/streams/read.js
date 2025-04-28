import { createReadStream } from 'fs';
import { EOL } from 'os';

const read = async () => {
  const stream = createReadStream('./src/streams/files/fileToRead.txt');

  for await (const slice of stream) process.stdout.write(slice);

  process.stdout.write(EOL);
};

await read();
