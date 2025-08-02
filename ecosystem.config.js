module.exports = {
  apps: [
    {
      name: 'hotel-loading-page',
      script: 'npm',
      args: 'start',
      cwd: './',
      instances: 1, // 可以设置为 'max' 以利用所有CPU核心
      exec_mode: 'fork', // 或 'cluster' 用于集群模式
      watch: false, // 生产环境建议设为false
      max_memory_restart: '1G', // 内存超过1G时重启
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_file: './logs/combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      // 自动重启配置
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      // 健康检查
      health_check_grace_period: 3000,
      // 优雅关闭
      kill_timeout: 5000,
      listen_timeout: 8000,
      // 环境变量文件
      env_file: '.env.production',
    }
  ],

  deploy: {
    production: {
      user: 'root',
      host: ['your-server-ip'], // 替换为你的服务器IP
      ref: 'origin/main',
      repo: 'https://github.com/your-username/your-repo.git', // 替换为你的仓库地址
      path: '/var/www/hotel-loading-page',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};