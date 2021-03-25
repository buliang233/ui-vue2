<template>
	<div>
		<span
		v-for="number in 5"
		:key="number"
		:class="[
				'iconfont icon-star1',
				number<=starNum ? 'active':''
				]"
		:style="{fontSize:size +'px'}"
		@click="changeNum(number)"
		></span>
	</div>
</template>

<script>
	export default {
		name:"Stars",
		props:{
			num:{
				type:Number,
				default:3
			},
			size:{
				type:Number,
				default:16
			}
		},
		data(){
			return {
				starNum:this.num	
			}
		},
		methods:{
			changeNum(number){
				this.starNum = number
				this.$emit("getStarNum",number)
			}
		}
	}
	
</script>

<style lang="scss" scoped>
	@font-face {font-family: "iconfont";
	  src: url('//at.alicdn.com/t/font_2444741_r595zjw7ik8.eot?t=1616666580841'); /* IE9 */
	  src: url('//at.alicdn.com/t/font_2444741_r595zjw7ik8.eot?t=1616666580841#iefix') format('embedded-opentype'), /* IE6-IE8 */
	  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAM8AAsAAAAABxQAAALtAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCfgqCBIFyATYCJAMMCwgABCAFhG0HNhswBsgOJQkRwYBhIEhABF/7ofvuLgSgMpGMKioyRRhfW9U6DWR8Nevqf2lL10AsI4PugfUycwtMCVcMVeIu3Xv6oM9zOb0pPj/QObXWtOFHvQDjgALcC9tAgRZIgt4iu4g7cRGnCTQa5UFuLymjAFQVaFIgHnNYtaBayCiKUa8XahtWFvGekvr0Nr0G3kXfj3+wEqokNRmaeXU3sQFifpr/tFDoqd6o4ATtfCEY68hYBgpx3Ri5opBUlilo9CqKpsG+BgU/Lf5X/DTnmt3+4RESUQs1NoN5uZr4aU4tbk0rr5FABrXF2ilwT2G73ybE/FT7/LhZ4eyXwMLLRZeCnc9WhYt3nIq2xhwKNu7ZFC9/dSvaWw4uvv5m0T49Z1w3ZVw0NWZYMGFYMzFjVDhpWDKxaVI8nTxn27hsysTqk73MWZZ7cBvjbXRirvSV3TfQYpoRZ/M4RvlmufgmlzmVY/LGuBpjS/3u7K9KJ4NGMd63sPbi02zLJxOX1dLOvzcWfHWn41MT148tcy+ejFh4G2tnP/3VvzFAg0+ztQvnWoxADUD1IT9ViAOovucPCmF/+zduX48FVetE/K9vKuBHX8/nKF19KAD3qb+faPBvtcC24uuRNxdXQzVhLJsHhBKyyoyroESnH+NtPeBWQr2eEbE6IxmyetNkYZdRo8kqatXbRKMlyeubdCEURGnAokEJod0xklZfkbV7Qxb2O2r0kqFWeyig0XUY7NhkNjjq8QTXUtyA6loRp14kZIifqsfNeZjVyK8leX3EFWEi5eSRr5dPuZ6MhZjMMUfaxPKjlEEMEQlQknQe5vNFSExEXFxPvdiUisO8vZmmF3nViwSgbheB1aKwBkidVghHPREhhnen1Cufz4OxNOKrRToUPXkRjJDi9I/48uIDIJMtQpDiXi6RasLih6IYCIMQEUCSpGEYH58IIm4exoXVo7ywR5TEwnjjTgzU4rW+TfB9e6ARWpAjRY6ivKK1RImFfQEAAAAA') format('woff2'),
	  url('//at.alicdn.com/t/font_2444741_r595zjw7ik8.woff?t=1616666580841') format('woff'),
	  url('//at.alicdn.com/t/font_2444741_r595zjw7ik8.ttf?t=1616666580841') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
	  url('//at.alicdn.com/t/font_2444741_r595zjw7ik8.svg?t=1616666580841#iconfont') format('svg'); /* iOS 4.1- */
	}

	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  color:#999;

	  &.icon-star:before {
	  	content: "\e61a";
		}
	  &.icon-star1:before {
		  content: "\e61b";
		}
	  &.active{
	  	color:#fcb300
	  }

	}

	
</style>