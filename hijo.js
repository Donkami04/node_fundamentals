const { exec, spawn } = require('child_process');
// exec('node promise.js ', (err, stdout, stderr) => {
//     if (err)
//         {console.log(err);
//         return false};
//     console.log(stdout);
// })

let proceso = spawn('ls', ['-la']);
console.log(proceso.connected);