<template>
	<view class="content">
		<view class="titleW">基金经理在线问答</view>
		<view class="cardUl">
			<view class="cardLi">
				<view class="status">
					<view class="statusL">
						<view class="circle"></view>
						<view class="text">进行中</view>
					</view>
					<view class="statusR">第二期：2019/11/08 13:40-15:40</view>
				</view>
				<view class="intro">
					<!-- <view class="imgPerson"></view> -->
					<img class="imgPerson" :src="imgSrc+'personBig.png'" alt="" >
					<view class="introPerson">
						<view class="t1">震荡市，买股还是买债？还是买别的？</view>
						<view class="t2">晓鸥姐姐</view>
						<view class="t3">13年投资经验 价值投资  风格稳健</view>
					</view>
				</view>
				<view class="btns">
					<button class="btn" type="primary" @click="toDetail(1)">进入问答</button>
				</view>
			</view>
			<view class="cardLi cardLiPre">
				<view class="status">
					<view class="statusL">
						<view class="circle"></view>
						<view class="text">预告中</view>
					</view>
					<view class="statusR">第二期：2019/11/08 13:40-15:40</view>
				</view>
				<view class="intro">
					<!-- <view class="imgPerson"></view> -->
					<img class="imgPerson" :src="imgSrc+'personBig.png'" alt="" >
					<view class="introPerson">
						<view class="t1">震荡市，买股还是买债？还是买别的？</view>
						<view class="t2">晓鸥姐姐</view>
						<view class="t3">13年投资经验 价值投资  风格稳健</view>
					</view>
				</view>
				<view class="btns">
					<button class="btn" type="primary" @click="toDetail(2)">11月18日 15:40 准时开始</button>
				</view>
			</view>
			<view class="cardLi">
				<view class="status">
					<view class="statusL">
						<view class="circle"></view>
						<view class="text">已结束</view>
					</view>
					<view class="statusR">第二期：2019/11/08 13:40-15:40</view>
				</view>
				<view class="intro">
					<!-- <view class="imgPerson"></view> -->
					<img class="imgPerson" :src="imgSrc+'personBig.png'" alt="" >
					<view class="introPerson">
						<view class="t1">震荡市，买股还是买债？还是买别的？</view>
						<view class="t2">晓鸥姐姐</view>
						<view class="t3">13年投资经验 价值投资  风格稳健</view>
					</view>
				</view>
				<view class="btns">
					<button class="btn" type="primary" @click="toDetail(3)">查看历史问答</button>
				</view>
			</view>
		</view>
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
				title: '我的'
			}
		},
		components: {
			uniCard
		},
		computed: {
			...mapState(['userInfo','imgSrc'])
		},
		onLoad() {
			// console.log(11111,this.userInfo)
			
			
		},
		methods: {
			...mapMutations(['changeUserInfo','login']),
			toDetail(statusQ){
				if(statusQ==2){
					uni.showToast({
						title:`请在XXX时间来参与专题在线问答`
					})
				}else{
					uni.navigateTo({
					    url: `/pages/detail/detail?statusQ=${statusQ}`
					});
				}
				
			}
		}
	}
</script>

<style lang="less">
	.content {
		background: #F8FBFF;
	}
	.titleW{
		box-sizing: border-box;
		height: 322upx;
		line-height: 70upx;
		padding-top: 40upx;
		text-align: center;	
		background: url(http://10.31.90.114/betaui/web/%E6%94%AF%E4%BB%98%E5%AE%9D%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E5%9F%BA%E9%87%91%E7%BB%8F%E7%90%86%E5%9C%A8%E7%BA%BF%E9%97%AE%E7%AD%94/assets/%E8%83%8C%E6%99%AF%E5%9B%BE.png) no-repeat  center center;
		background-size:cover ;
		font-size: 38upx;
		color: #FFFFFF;
		letter-spacing: 0;
	}
	.cardUl{
		position: relative;
		margin: 0 auto;
		margin-top: -164upx;
		width: 686upx;
		.cardLi{
			background: #FFFFFF;
			box-shadow: 0 11upx 10upx 0 #DCE1F3;
			border-radius: 8upx;
			margin-bottom: 46upx;
			.status{
				line-height: 42upx;
				display: flex;
				.statusL{
					width: 124upx;
					background: #FB7D40;
					font-size: 22upx;
					color: #FFFFFF;
					display: flex;
					.circle{
						width: 12upx;
						height: 12upx;
						background: #fff;
						border-radius:50% ;
						// margin-top: 15upx;
						// margin-top:12upx;
						position: relative;
						left: 12upx;
						top: 15upx;
					}
					.text{
						flex: 1;
						text-align: center;
					}
				}
				.statusR{
					flex:1;
					background: #FFDDC7;
					text-align: center;
					font-size: 22upx;
					color: #333;
				}
			}
			.intro{
				margin-top: 42upx;
				display: flex;
				padding:  0 28upx 48upx 28upx;
				.imgPerson{
					width: 190upx;
					height: 210upx;
					margin-right: 18upx;
				}
				.introPerson{
					.t1{
						font-size: 32upx;
						color: #333333;
						line-height: 45upx;
						font-weight: bold;
						padding-bottom: 12upx;
					}
					.t2{
						font-size: 28upx;
						color: #666666;
						line-height: 40upx;
						padding-bottom: 27upx;
					}
					.t3{
						font-size: 22upx;
						color: #666666;
						line-height: 30upx;
					}
				}
			}
			.btns{
				padding: 0 28upx;
				padding-bottom: 24upx;
				.btn{
					border: none;
					border-radius: 100upx;
					background-image: linear-gradient(-90deg, #2BAEFF 0%, #1668FF 100%);
					font-size: 34upx;
					color: #FFFFFF;
					letter-spacing: 1.05upx;
					font-weight: bold;
				}
			}
		} 
		.cardLiPre{
			.status{
				.statusL{
					background: #2D9E6F;
				}
				.statusR{
					background: #C0F1DC;
				}
			}
			.btns{
				.btn{
					background: #BDDBFF;
					color: #2384FF;
				}
			}
		}
		.cardLiEnd{
			.status{
				.statusL{
					background: #E4E4E4;
					.circle{
						background: #999999;
					}
				}
				.statusR{
					background: #EEEEEE;
				}
			}
			.btns{
				.btn{
					background-image: linear-gradient(90deg, #2BAEFF 0%, #1668FF 100%);
				}
			}
		}
	}
</style>
