const fs = require('fs');

module.exports = async function ({ env, app }) {
  const ionicServeConfigPath = './ionic.config.json';

  if (fs.existsSync(ionicServeConfigPath)) {
    const ionicServeConfig = require(ionicServeConfigPath);
    const ionicServeHost = ionicServeConfig['serve']['host'];
    const ionicServePort = ionicServeConfig['serve']['port'];
    const ionicServeAddress = `${ionicServeHost}:${ionicServePort}`;

    const corsConfig = {
      origin: ionicServeAddress,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true,
    };

    app.use(corsConfig);
  }
};
