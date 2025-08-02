# PM2 部署指南

## 🚀 快速开始

### 1. 一键部署（推荐）

```bash
# 生产环境部署
npm run deploy:prod

# 开发环境部署
npm run deploy:dev
```

### 2. 手动部署

```bash
# 安装PM2（如果尚未安装）
npm install -g pm2

# 构建项目
npm run build

# 启动应用
npm run pm2:start
```

## 📋 PM2 管理命令

### npm scripts 方式
```bash
npm run pm2:start     # 启动应用
npm run pm2:stop      # 停止应用
npm run pm2:restart   # 重启应用
npm run pm2:reload    # 优雅重载
npm run pm2:delete    # 删除应用
npm run pm2:logs      # 查看日志
npm run pm2:monit     # 监控界面
```

### 脚本管理方式
```bash
./scripts/pm2-commands.sh start     # 启动应用
./scripts/pm2-commands.sh stop      # 停止应用
./scripts/pm2-commands.sh restart   # 重启应用
./scripts/pm2-commands.sh reload    # 优雅重载
./scripts/pm2-commands.sh delete    # 删除应用
./scripts/pm2-commands.sh status    # 查看状态
./scripts/pm2-commands.sh logs      # 查看日志
./scripts/pm2-commands.sh monit     # 监控界面
./scripts/pm2-commands.sh help      # 帮助信息
```

## 📊 应用配置

### 生产环境配置 (`ecosystem.config.js`)

- **应用名称**: `hotel-loading-page`
- **端口**: `3000`
- **实例数**: `1` (可改为 `max` 利用所有CPU核心)
- **内存限制**: `1GB` (超过自动重启)
- **日志文件**: `./logs/` 目录

### 环境变量

应用会读取以下环境变量文件：
- `.env.production` (生产环境)
- `.env.local` (本地开发)

## 📁 日志管理

日志文件位置：
```
logs/
├── err.log         # 错误日志
├── out.log         # 输出日志
└── combined.log    # 合并日志
```

查看日志命令：
```bash
# 实时查看日志
pm2 logs hotel-loading-page

# 查看最近50行日志
pm2 logs hotel-loading-page --lines 50

# 清空日志
pm2 flush hotel-loading-page
```

## 🔧 高级配置

### 集群模式（多核CPU利用）

编辑 `ecosystem.config.js`：
```javascript
{
  instances: 'max',        // 使用所有CPU核心
  exec_mode: 'cluster'     // 集群模式
}
```

### 自动重启设置

```javascript
{
  autorestart: true,       // 自动重启
  max_restarts: 10,        # 最大重启次数
  min_uptime: '10s',       # 最小运行时间
  max_memory_restart: '1G' # 内存限制重启
}
```

## 📈 监控和维护

### 1. 实时监控
```bash
pm2 monit
```

### 2. 查看应用状态
```bash
pm2 list
pm2 show hotel-loading-page
```

### 3. 性能监控
```bash
pm2 describe hotel-loading-page
```

## 🛡️ 安全建议

1. **生产环境**：
   - 使用 `NODE_ENV=production`
   - 禁用文件监听 (`watch: false`)
   - 设置内存限制
   - 配置日志轮转

2. **网络安全**：
   - 配置防火墙规则
   - 使用反向代理 (Nginx)
   - 启用HTTPS

## ⚠️ 故障排除

### 常见问题

1. **端口被占用**
   ```bash
   lsof -i :3000
   kill -9 <PID>
   ```

2. **应用无法启动**
   ```bash
   pm2 logs hotel-loading-page
   ```

3. **内存泄漏**
   ```bash
   pm2 restart hotel-loading-page
   ```

### 重置PM2
```bash
pm2 kill
pm2 resurrect
```

## 🚀 部署到服务器

### 1. 配置部署信息

编辑 `ecosystem.config.js` 中的 deploy 配置：
```javascript
deploy: {
  production: {
    user: 'your-username',
    host: ['your-server-ip'],
    repo: 'https://github.com/your-username/your-repo.git',
    path: '/var/www/hotel-loading-page'
  }
}
```

### 2. 首次部署
```bash
pm2 deploy production setup
pm2 deploy production
```

### 3. 后续更新
```bash
pm2 deploy production update
```

---

**需要帮助？** 查看 [PM2 官方文档](https://pm2.keymetrics.io/docs/)