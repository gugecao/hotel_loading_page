/**
 * API 相关类型定义
 */

// 平台响应接口类型
export interface PlatformResponse {
  success: boolean;
  message?: string;
  data?: unknown;
}

// 谷歌验证红名单接口响应类型
export interface GoogleCheckResponse {
  statu?: string; // API返回的状态字段
  code?: string;  // 状态码："1001"表示正常，"1002"表示被封禁
  success?: boolean;
  data?: {
    status: number;
    message: string;
    result?: {
      is_safe: boolean;
      risk_level?: string;
      details?: string;
    };
  };
  error?: string;
}

// URL 安全检查结果类型
export interface SecurityCheckResult {
  isSecure: boolean;
  isSafeBrowsingSecure: boolean;
  isGoogleSecure: boolean;
  isAvailable: boolean;
  url: string;
  error?: string;
}