const {VueLoaderPlugin} = require('vue-loader')
const path = require('path')
const glob = require('glob')

// 配置页面
const components = ['Box', 'Avatar']
const tutorials = ['Box大小', 'Box基本布局', 'Box排列布局']
const examples = ['用Box轻松布局导航栏']

const sections = (() => {
  const docsOrigin = glob
    .sync('docs/*.md')
    .map(p => ({name: path.basename(p, '.md'), content: p}))
  const docs = tutorials.map(item => ({
    name: item,
    content: docsOrigin.find(doc => doc.name === item).content
  }))
  const demos = []
  let faq = '' // 约定至多只有一个faq.md
  const guides = []
  docs.forEach(d => {
    if (/^faq$/i.test(d.name)) {
      d.name = d.name.toUpperCase()
      faq = d
    } else if (/^guide-/.test(d.name)) {
      guides.push(d)
    } else {
      demos.push(d)
    }
  })
  return [
    {
      name: 'RAW UI 组件库',
      components: components.map(item => `src/${item}.vue`),
      // components: 'src/*.vue',
      usageMode: 'expand'
    },
    {
      name: '教程',
      sections: demos,
      sectionDepth: 2
    },
    {
      name: '示例',
      sections: examples.map(item => ({
        name: item,
        content: `docs/${item}.md`
      })),
      sectionDepth: 2
    },
    ...(faq ? [faq] : []),
    ...(guides.length
      ? [{name: 'Guide', sections: guides, sectionDepth: 2}]
      : [])
  ]
})()

module.exports = {
  styleguideDir: 'docs',
  pagePerSection: true,
  ribbon: {
    url: 'https://github.com/Yokiijay/vue-raw-ui'
  },
  sections,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader']
        },
        {
          test: /\.less$/,
          loaders: ['vue-style-loader', 'css-loader', 'less-loader']
        },
        {
          test: /\.(woff2?|eot|[ot]tf)(\?.*)?$/,
          loader: 'file-loader'
        }
      ]
    },
    plugins: [new VueLoaderPlugin()]
  }
}
