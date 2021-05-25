 const os = require('os');

 const mySelf = {
     name: os.type(),
     release: os.release(),
     totalMem: os.totalmem(),
     freeMem: os.freemem(),
     upTime: os.uptime(),
     userInfo: os.userInfo()
 };

 console.log(mySelf);
 //  console.log(os);