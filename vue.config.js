const { defineConfig } = require('@vue/cli-service')
/*const webpack = require('webpack')*/
module.exports = defineConfig({
  transpileDependencies: true,
  /*configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer']
      }),
      new webpack.ProvidePlugin({
        process: 'process/browser'
      })
    ],
    resolve: {
      fallback: {
        fs: false,
        child_process: false,
        tls: require.resolve('tls'),
        net: require.resolve('net'),
        assert: require.resolve('assert'),
        buffer: require.resolve('buffer'),
        crypto: require.resolve('crypto-browserify'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify/browser'),
        path: require.resolve('path-browserify'),
        stream: require.resolve('stream-browserify'),
        url: require.resolve('url'),
        zlib: require.resolve('browserify-zlib')
      }
    }
  }*/
})
