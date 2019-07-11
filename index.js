import Vue from 'vue'
import { message } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.use(message);

/**
 * @clickLastTime时间戳数组
 * 全局指令,绑定值为事件click防抖时间间隔
 */
let clickLastTime = [];

const antiShake = {
	install(Vue) {
		Vue.directive('preventReClick', {
			inserted(e, binding) {
				e.addEventListener('click', () => {
					let clickCurrentTmie = '';
					clickCurrentTmie = new Date().getTime();
					clickLastTime.push(clickCurrentTmie)
					if (clickLastTime.length > 1) {
						let timeDiff = clickCurrentTmie - clickLastTime[clickLastTime.length - 2];
						//提示信息
						let alertMessage;
						//时间间隔
						let timeInterval; 
						console.log(binding.arg)
						if (binding.arg === undefined){
							timeInterval = 3000;
						}else{
							timeInterval = binding.arg
						}
						console.log(binding.value)
						if (binding.value === undefined) {
							alertMessage = "请不要连读点击!";
						} else {
							alertMessage = binding.value
						}

						if (timeDiff < timeInterval) {
							message.warning(alertMessage)
						}
					}
					if (clickLastTime.length > 200) {
						clickLastTime.splice(0, clickLastTime.length - 2)
					}
				})
			}
		})
	}
}

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(antiShake);
}

export default antiShake;
