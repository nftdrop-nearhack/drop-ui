const chalk = require('chalk')

const path = require('path')
const dist = path.resolve(__dirname,'near-ui','out')
const PROT = 18694

const { createProxyMiddleware } = require('http-proxy-middleware')

const apiProxy = createProxyMiddleware('/api', {
  target: 'xxx',
  changeOrigin: true, // for vhosted sites
})

module.exports = {
  port: PROT,
  browser: ['chrome'],
  files: ['./near/out/*.{html,scss,js,jsx}'],
  server: {
    baseDir: dist,
    // middleware: {
    //   10: apiProxy,
    // },
  },
  open: true,
}