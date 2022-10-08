// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
// Created by Umi Plugin

export interface IConfigFromPlugins {
clientLoader?: {

}
title?: string
styles?: any[]
scripts?: any[]
routes?: {

}[]
reactRouter5Compat?: {

}
presets?: string[]
plugins?: string[]
npmClient?: ("pnpm" | "tnpm" | "cnpm" | "yarn" | "npm")
mountElementId?: string
metas?: any[]
links?: any[]
historyWithQuery?: {

}
history?: {
type?: ("browser" | "hash" | "memory")
}
headScripts?: any[]
conventionRoutes?: {
base?: string
exclude?: any[]
}
base?: string
writeToDisk?: boolean
theme?: {

}
targets?: {

}
svgr?: {

}
svgo?: ({

} | boolean)
styleLoader?: {

}
srcTranspiler?: ("babel" | "esbuild" | "swc" | "none")
sassLoader?: {

}
runtimePublicPath?: {

}
purgeCSS?: {

}
publicPath?: string
proxy?: ({

} | any[])
postcssLoader?: {

}
outputPath?: string
mfsu?: ({
cacheDirectory?: string
chainWebpack?: (() => any)
esbuild?: boolean
exclude?: any[]
include?: string[]
mfName?: string
remoteAliases?: string[]
remoteName?: string
runtimePublicPath?: boolean
shared?: {

}
strategy?: ("eager" | "normal")
} | boolean)
mdx?: {
loader?: string
loaderOptions?: {

}
}
manifest?: {

}
lessLoader?: {

}
jsMinifierOptions?: {

}
jsMinifier?: ("esbuild" | "swc" | "terser" | "uglifyJs" | "none")
inlineLimit?: number
ignoreMomentLocale?: boolean
https?: {

}
hash?: boolean
forkTSChecker?: {

}
fastRefresh?: boolean
extraPostCSSPlugins?: any[]
extraBabelPresets?: any[]
extraBabelPlugins?: any[]
extraBabelIncludes?: any[]
externals?: ({

} | string | (() => any))
esm?: {

}
devtool?: (string | boolean)
depTranspiler?: ("babel" | "esbuild" | "swc" | "none")
define?: {

}
deadCode?: {

}
cssMinifierOptions?: {

}
cssMinifier?: ("cssnano" | "esbuild" | "parcelCSS" | "none")
cssLoaderModules?: {

}
cssLoader?: {

}
copy?: any[]
chainWebpack?: (() => any)
cacheDirectoryPath?: string
babelLoaderCustomize?: string
autoprefixer?: {

}
autoCSSModules?: boolean
alias?: {

}
crossorigin?: (boolean | {
include?: {

}[]
})
esmi?: {
cdnOrigin?: string
shimUrl?: string
}
favicons?: string[]
mock?: {
exclude?: string[]
include?: string[]
}
mpa?: {
template?: string
layout?: string
getConfigFromEntryFile?: boolean
entry?: {

}
}
polyfill?: {
imports?: string[]
}
routePrefetch?: {

}
ssr?: {
serverBuildPath?: string
platform?: string
}
terminal?: {

}
tmpFiles?: boolean
lowImport?: {
libs?: any[]
css?: string
}
vite?: {

}
apiRoute?: {
platform?: string
}
monorepoRedirect?: (boolean | {
srcDir?: string[]
exclude?: {

}[]
})
clickToComponent?: {
editor?: string
}
legacy?: {
buildOnly?: boolean
nodeModulesTransform?: boolean
}
classPropertiesLoose?: {

}
verifyCommit?: {
scope?: string[]
allowEmoji?: boolean
}
run?: {
globals?: string[]
}
antd?: ({
configProvider?: {

}
dark?: boolean
compact?: boolean
import?: boolean
style?: ("less" | "css")
} | boolean)
}
