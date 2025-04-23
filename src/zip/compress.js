import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createGzip } from 'zlib';

const compress = async () => {
  pipeline(
    createReadStream('./src/zip/files/fileToCompress.txt'),
    createGzip(),
    createWriteStream('./src/zip/files/archive.gz')
  );
};

await compress();
