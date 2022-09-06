import Vue from 'vue'
// import { Button } from 'element-ui'
// import {Form,FormItem} from 'element-ui'
// import {Input} from 'element-ui'
// //导入弹框提示组件
// import {Message} from 'element-ui'
import {Button,Form,FormItem,Input,Message} from 'element-ui'
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
//把Message挂载到vue的原型对象上，可以通过this.$message获取
Vue.prototype.$message = Message