<template>
	<view class="content">
		<view class="intro">
			<text>向晓鸥姐姐提问</text>
			<text @click="complete" class="complete">完成</text>
		</view>
		<input v-model="value" class="uni-input questionInput"  placeholder="欢迎参与提问，问题筛选后会公开显示" />
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import {
		uniBadge,
		uniCard
	} from '@dcloudio/uni-ui'
	export default {
		data() {
			return {
				value: '',
				typeQ:''
			}
		},
		components: {
			uniCard
		},
		computed: {
			...mapState(['userInfo','imgSrc'])
		},
		onLoad(option) {
			// console.log(11111,this.userInfo)
			this.typeQ = option.typeQ
			
		},
		methods: {
			...mapMutations(['changeUserInfo','login']),
			complete(){
				if(this.value.length<1){
					uni.showToast({
					    title: '问答字数不能为0'
					})
				}else{
					if(this.value.length>200){
						uni.showToast({
						    title: '问答字数不能超过200'
						})
					}else{
						uni.navigateBack()
					}
				}
			}
		}
	}
</script>

<style lang="less">
	.content {
		background: #F8FBFF;
	}
	.intro{
		background: #F5F5F5;
		line-height: 90upx;
		padding-left: 38upx;
		padding-right: 26upx;
		font-size: 28upx;
		color: #666666;
		letter-spacing: 0.17upx;
		display: flex;
		justify-content: space-between;
		.complete{
			font-size: 36upx;
			color: #999999;
			letter-spacing: 0.22upx;
		}
	}
	.questionInput{
		width: 100%;
		height: 100upx;
		border-bottom: 1upx solid #ddd;
		text-indent: 28upx;
		font-size: 34upx;
		color: #999999;
		letter-spacing: 0.21upx;
	}
</style>
