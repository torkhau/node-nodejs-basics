import { fork } from 'child_process';
import { pipeline } from 'stream/promises';

const spawnChildProcess = async (args) => {
  const cp = fork('./src/cp/files/script.js', [...args], { stdio: ['pipe', 'pipe', 'inherit', 'ipc'] });

  try {
    await Promise.all([pipeline(process.stdin, cp.stdin), pipeline(cp.stdout, process.stdout)]);
  } catch {}
};

// Put your arguments in function call to test this functionality
spawnChildProcess(/* [someArgument1, someArgument2, ...] */);
