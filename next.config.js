const { join } = require('path')

const withStylus = require('@zeit/next-stylus'),
    withOffline = require('next-offline'),
    withAnalyze = require('@next/bundle-analyzer')({
        enabled: process.env.ANALYZE === 'true'
    }),
    withPlugins = require('next-compose-plugins')

const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
    TerserPlugin = require('terser-webpack-plugin')

module.exports = withPlugins(
    [
        [withAnalyze],
        [
            withStylus,
            {
                loaders: [
                    {
                        test: /\.styl$/,
                        loader:
                            'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
                    }
                ]
            }
        ],
        [
            withOffline,
            {
                dontAutoRegisterSw: true,
                workboxOpts: {
                    swDest: 'static/service-worker.js',
                    runtimeCaching: [
                        {
                            urlPattern: /.js$|.ttf$|.otf$|.css$|.svg$|.jpg$|.png$/,
                            handler: 'CacheFirst'
                        }
                    ]
                }
            }
        ]
    ],
    {
        target: 'serverless',
        webpack(config, options) {
            const splitChunks =
                config.optimization && config.optimization.splitChunks

			if (splitChunks) {
                const cacheGroups = splitChunks.cacheGroups
                const preactModules = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/
                if (cacheGroups.framework) {
                    cacheGroups.preact = Object.assign(
                        {},
                        cacheGroups.framework,
                        {
                            test: preactModules
                        }
                    )
                    cacheGroups.commons.name = 'framework'
                } else
                    cacheGroups.preact = {
                        name: 'commons',
                        chunks: 'all',
                        test: preactModules
                    }
            }

            config.optimization.minimize = true
            config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}))
            config.optimization.minimizer.push(
                new TerserPlugin({
                    terserOptions: {
                        mangle: true // Note `mangle.properties` is `false` by default.
                    }
                })
            )

            config.resolve.alias = {
                ...config.resolve.alias,
                react: 'preact/compat',
                'react-dom': 'preact/compat',
                'react-render-to-string': 'preact-render-to-stirng',
                'react-ssr-prepass': 'preact-ssr-prepass',
                pages: join(__dirname, 'pages'),
                views: join(__dirname, 'pages/views'),
                '~': join(__dirname, 'client'),
                public: join(__dirname, 'client/public'),
                styles: join(__dirname, 'client/public/styles'),
                fonts: join(__dirname, 'client/public/fonts'),
                components: join(__dirname, 'client/components'),
                libs: join(__dirname, 'client/libs'),
                pageTypes: join(__dirname, 'client/pageTypes'),
                stores: join(__dirname, 'client/stores'),
                layouts: join(__dirname, 'client/layouts')
            }

            return config
        }
    }
)
