/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 关闭eslint检查
  eslint: { ignoreDuringBuilds: true },
  // build打包时，取消typescript语法检查
  typescript: {
    ignoreBuildErrors: true
  },
  // build 打包时 地址栏带 /
  trailingSlash: true,
  // axios proxy代理
  async rewrites() 
  {
    return [ 
     //接口请求 前缀带上/api/
      { source: '/api/:path*', destination: `http://www.api.com/api/:path*` }, 
    ]
  },
  // webpack打包配置
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => 
  {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },
}

module.exports = nextConfig
