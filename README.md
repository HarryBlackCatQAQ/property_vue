```
property_vue                   Vue多页面项目
├── public                     页面静态文件
│   ├── favicon.ico            图标
│   ├── index.html             入口页面
│   └── page1.html             页面1
├── src								
│   ├── assets                 静态文件
│   │   └── logo.png
│   ├── components             公共组件
│   │   └── HelloWorld.vue
│   ├── pages	                  页面
│   │   ├── index					
│   │   │   ├── App.vue        页面的主vue
│   │   │   ├── components     私有组件
│   │   │   ├── main.js        页面main.js
│   │   │   ├── router.js      页面路由
│   │   │   ├── service        页面服务
│   │   │   └── views          页面view
│   │   │       ├── About.vue
│   │   │       └── Home.vue
│   │   └── page1
│   │       ├── App.vue
│   │       ├── components
│   │       ├── main.js
│   │       ├── router.js
│   │       ├── service
│   │       └── views
│   │           ├── About.vue
│   │           └── Home.vue
│   ├── service                 公共服务
│   │   └── util.js						
│   ├── store.js                vuex
│   └── views                   公共views
├── tests                       测试
│   ├── e2e
│   │   ├── custom-assertions
│   │   │   └── elementCount.js
│   │   └── specs
│   │       └── test.js
│   └── unit
│       └── example.spec.js
└── vue.config.js               配置文件
```
