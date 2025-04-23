import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createUnzip } from 'zlib';

const decompress = async () => {
  pipeline(
    createReadStream('./src/zip/files/archive.gz'),
    createUnzip(),
    createWriteStream('./src/zip/files/fileToCompress.txt')
  );
};

await decompress();
