import Stars from './components/Stars';



const ui = {}
const componentPool = [Stars]

ui.install = function(Vue){
	componentPool.forEach((component)=>{
		Vue.component(component.name,component)
	})
}

export default ui