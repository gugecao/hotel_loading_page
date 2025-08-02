#!/bin/bash

# PM2部署脚本 - 酒店加载页面项目
# 使用方法: ./scripts/deploy.sh [环境]
# 环境选项: dev, prod (默认: prod)

set -e  # 遇到错误立即退出

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 日志函数
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# 获取环境参数，默认为生产环境
ENVIRONMENT=${1:-prod}
APP_NAME="hotel-loading-page"

log_info "开始部署 $APP_NAME 到 $ENVIRONMENT 环境..."

# 检查Node.js和npm
if ! command -v node &> /dev/null; then
    log_error "Node.js 未安装，请先安装 Node.js"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    log_error "npm 未安装，请先安装 npm"
    exit 1
fi

# 检查PM2
if ! command -v pm2 &> /dev/null; then
    log_warning "PM2 未安装，正在安装..."
    npm install -g pm2
    log_success "PM2 安装完成"
fi

# 创建日志目录
log_info "创建日志目录..."
mkdir -p logs

# 安装依赖
log_info "安装项目依赖..."
npm install

# 构建项目
log_info "构建项目..."
npm run build

# 停止现有的PM2进程（如果存在）
log_info "停止现有的 $APP_NAME 进程..."
pm2 stop $APP_NAME 2>/dev/null || log_warning "$APP_NAME 进程不存在或已停止"
pm2 delete $APP_NAME 2>/dev/null || log_warning "$APP_NAME 进程不存在"

# 启动PM2应用
if [ "$ENVIRONMENT" = "dev" ]; then
    log_info "启动开发环境..."
    pm2 start ecosystem.config.js --env development
else
    log_info "启动生产环境..."
    pm2 start ecosystem.config.js --env production
fi

# 保存PM2配置
log_info "保存 PM2 配置..."
pm2 save

# 设置PM2开机自启（仅在生产环境）
if [ "$ENVIRONMENT" = "prod" ]; then
    log_info "设置 PM2 开机自启..."
    pm2 startup
fi

# 显示运行状态
log_info "应用状态:"
pm2 list

# 显示日志
log_info "最近的应用日志:"
pm2 logs $APP_NAME --lines 10

log_success "🎉 部署完成！应用已在 $ENVIRONMENT 环境下运行"
log_info "📋 常用命令:"
echo "  查看状态: pm2 list"
echo "  查看日志: pm2 logs $APP_NAME"
echo "  重启应用: pm2 restart $APP_NAME"
echo "  停止应用: pm2 stop $APP_NAME"
echo "  删除应用: pm2 delete $APP_NAME"
echo "  查看监控: pm2 monit"