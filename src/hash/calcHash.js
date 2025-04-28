import { createHash, hash } from 'crypto';
import { createReadStream } from 'fs';

const calculateHash = async () => {
  const hash = createHash('sha256');
  const stream = createReadStream('./src/hash/files/fileToCalculateHashFor.txt');

  for await (const slice of stream) hash.update(slice);

  console.log(hash.digest('hex'));
};

await calculateHash();
