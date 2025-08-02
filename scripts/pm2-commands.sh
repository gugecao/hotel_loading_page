#!/bin/bash

# PM2 常用命令脚本
# 使用方法: ./scripts/pm2-commands.sh [命令]

APP_NAME="hotel-loading-page"

# 颜色定义
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

show_help() {
    echo -e "${BLUE}PM2 管理脚本 - $APP_NAME${NC}"
    echo ""
    echo "使用方法: ./scripts/pm2-commands.sh [命令]"
    echo ""
    echo "可用命令:"
    echo "  start     - 启动应用"
    echo "  stop      - 停止应用"
    echo "  restart   - 重启应用"
    echo "  reload    - 优雅重载应用"
    echo "  delete    - 删除应用"
    echo "  status    - 查看应用状态"
    echo "  logs      - 查看应用日志"
    echo "  monit     - 打开PM2监控界面"
    echo "  save      - 保存PM2配置"
    echo "  flush     - 清空日志"
    echo "  help      - 显示此帮助信息"
    echo ""
}

case $1 in
    "start")
        echo -e "${GREEN}启动 $APP_NAME...${NC}"
        pm2 start ecosystem.config.js --env production
        ;;
    "stop")
        echo -e "${YELLOW}停止 $APP_NAME...${NC}"
        pm2 stop $APP_NAME
        ;;
    "restart")
        echo -e "${YELLOW}重启 $APP_NAME...${NC}"
        pm2 restart $APP_NAME
        ;;
    "reload")
        echo -e "${YELLOW}优雅重载 $APP_NAME...${NC}"
        pm2 reload $APP_NAME
        ;;
    "delete")
        echo -e "${YELLOW}删除 $APP_NAME...${NC}"
        pm2 delete $APP_NAME
        ;;
    "status")
        echo -e "${BLUE}$APP_NAME 状态:${NC}"
        pm2 list
        ;;
    "logs")
        echo -e "${BLUE}$APP_NAME 日志:${NC}"
        pm2 logs $APP_NAME
        ;;
    "monit")
        echo -e "${BLUE}打开PM2监控界面...${NC}"
        pm2 monit
        ;;
    "save")
        echo -e "${GREEN}保存PM2配置...${NC}"
        pm2 save
        ;;
    "flush")
        echo -e "${YELLOW}清空日志...${NC}"
        pm2 flush $APP_NAME
        ;;
    "help"|""|*)
        show_help
        ;;
esac