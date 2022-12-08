const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

const envFile = fs.readFileSync(path.join(__dirname, '.env'), 'utf8');
const { HOST_SERVER, HOST_PATH, ...env } = dotenv.parse(envFile);

module.exports = {
  apps: [
    {
      name: 'cc-iso-app-backend',
      script: 'npm',
      args: 'start',
      exec_mode: 'cluster_mode',
      instances: '2',
      autorestart: true,
      watch: false,
      max_memory_restart: '300M',
      env_production: {
        NODE_ENV: 'production',
        ...env
      }
    }
  ],

  deploy: {
    production: {
      host: HOST_SERVER,
      ref: 'origin/main',
      repo: 'git@github.com:cstuncsik/cc-iso-app-backend.git',
      path: HOST_PATH,
      'pre-deploy': 'echo "Deploying to production"',
      'post-deploy': 'yarn install && NODE_ENV=production yarn build && pm2 startOrReload ecosystem.config.js --env production'
    }
  }
}
