TypeScript Webpack Babel CoreJS in Config Demo
=======================================

这个demo也是个大坑。

Babel之前有个polyfill，在7.x中被丢弃了，推荐直接使用corejs。

注意：
1. 我们需要手动install core-js
2. 我们需要在代码中`import 'core-js'`
3. 在webpack config中，`@babel/preset-env`后面的参数虽然提到了corejs，但它是用来配置“转换”功能的，并不会像之前polyfill那样帮我们插入corejs和regeneratorRuntime
  - `useBuiltIns=usage`: 还有一个值`entry`，区别在于`entry`会把corejs等整个全部import一次，而`usage`是指用到了corejs中的某个具体文件就只import那一个
  - `corejs`
    - `version: 3`: 默认值是2。webpack并不知道我们安装的是哪个版本，所以我们需要手动告诉webpack，方便它选择正确的转换规则
    - `proposals: true`: 默认情况下只会转换stable的功能。指定proposals为true则会转换所有功能
4. 我们必须使用一个老版本的node，才能体现出corejs的功能

还有一个`regenerator-runtime/runtime`还没太清楚哪里用。

详情看：https://babeljs.io/docs/en/babel-preset-env

```
npm install
npm run demo
```
