module.exports = {
    pluginOptions: {
        electronBuilder: {
            preload: 'src/app/preload.ts'
        }
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/variables.scss";`
            }
        }
    }
}
