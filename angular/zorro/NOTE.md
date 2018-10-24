#### 1、安装zorro ant-design ui框架
```
ng new project
cd project
ng add ng-zorro-antd
```

#### 2、安装好后，我发现zorro组件、样式、模块都没有引入 
在app.modules.ts中添加
```
 imports: [
    /** 导入 ng-zorro-antd 模块 **/
    NgZorroAntdModule,
  ],
  providers   : [ { provide: NZ_I18N, useValue: zh_CN } ]
```
在angular.json中添加样式
```
"styles": [
    ...
    "node_modules/ng-zorro-antd/ng-zorro-antd.min.css"
  ]
```

#### 3、因为angular每个组件默认都会有4个文件
html 模板，css 样式, spec.ts 测试， ts 组件代码
所以手动创建肯定很麻烦
所以可以使用命令快速创建组件模板
```
ng generate component hero
```
这个命令会自动注册组件到app.module.ts


#### 4、如何使用组件
1、组件先注册到app.module.ts
2、组件中有selector，这个就是组件名
3、已经注册过的地方的html中可以<xx></xx>引入组件

