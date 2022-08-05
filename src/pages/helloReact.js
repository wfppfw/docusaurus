import React from 'react';
import Layout from '@theme/Layout';
function Hello(){
    return (
        <Layout title='Hello'>
            <div
            style={{
                dispaly:'flex',
                justifyContent:'center',
                alignItems:'center',
                height:'50vh',
                fontSize:'20px'
            }}>
            <p>
            <code>pages/helloReact.js</code> and save to reload.
            </p>
            添加插件
            <code>
            yarn add docusaurus/plugin-content-pages 
            </code>
            <br></br>
            添加配置
            <code>
            "plugins": [
    '@docusaurus/plugin-content-pages',
  ],
            </code>
            <p>
            /blog/ - 里面就是写博客文章的，都是 markdown 文件。
/docs/ - 里面就是写文档的，也都是 markdown 文件。

/src/ - 源代码文件夹，里面有一个 css 文件夹，然后它里边有个 custom.css 里面是写自定义的 css 代码的。
/src/pages - 里边放一些自定义的页面，使用 react 语法来写。
/static/ - 放静态资源文件，这些文件会出现在最后打包出来的静态网站里面，在它的根目录下边，它下边的 img 文件夹是放静态图片的。
/docusaurus.config.js - 这个是配置这个站点的。
/package.json - node.js 的工程配置文件。
/sidebar.js - 配置文档页面侧边栏，只有文档页面才有，用它来定义文档的目录结构。
            </p>
            </div>
        </Layout>
    )
}

export default Hello;