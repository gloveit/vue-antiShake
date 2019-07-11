# vue-antishake

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
### Customize configuration
vue-antishake使用方法：
(1):第一步按顺序安装依赖 ant-design-vue vue-antishake
    npm i ant-design-vue --save
    npm i vue-antishake --save
(2):导入引用方法：
    import vueAntiShake from 'vue-antishake'
    Vue.use(vueAntiShake)
(3):使用方法：
    <button v-preventReClick:"alertMessage"="time">防抖按钮</button>
    
    参数说明:任何组件中都可以使用v-preventReClick指令添加防抖方法，绑定值time可以是任意秒，默认点击间隔时间 time=3000,表示防抖点击间隔为3s，如果点击间隔小于time提示alertMessage，默认alertMessage=“请不要连读点击!”
