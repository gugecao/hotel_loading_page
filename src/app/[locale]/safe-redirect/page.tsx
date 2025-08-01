export default function SafeRedirect() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          欢迎访问我们的平台
        </h1>
        <p className="text-gray-600 mb-6">
          请通过正确的渠道访问我们的服务。
        </p>
        <div className="space-y-4">
          <p className="text-sm text-gray-500">
            如需了解更多信息，请联系：
          </p>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="font-medium">business@yourplatform.com</p>
            <p className="text-sm text-gray-500 mt-1">商务合作邮箱</p>
          </div>
        </div>
      </div>
    </div>
  )
}