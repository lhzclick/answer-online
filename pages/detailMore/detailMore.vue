<template>
	<view class="content">
		<view class="questionLi">
			<img class="imgLeft" :src="imgSrc+'personSmall.png'" alt="">
			<view class="subQuestionWrap">
				<view class="subQuestionUl">
					<view class="subQuestionLi" v-for="(item,i) in arrTest2" :key="i">
						<view class="owner">
							<view class="ownerL">
								<text class="line"></text>
								<text class="name">我</text>
							</view>
							<view class="ownerR">
								<img class="fabulous" :src="imgSrc+'fabulous1.png'" alt="">
								<text class="num">3</text>
							</view>
						</view>
						<view class="intro">
							<view class="introL">请问老师现在还可以买吗？老师讲的很有道理，但是现在是不是有点高了？</view>
							<view class="timeR">2019/11/12</view>
						</view>
					</view>
				</view>
				<view class="moreBtns">
					<button v-if="statusQ==1" class="btn2" type="primary" @click="toQuestion(2)">追问</button>
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
				arrTest1: [1, 2, 3],
				arrTest2: [1, 2, 3, 4, 5],
				statusQ: ''
			}
		},
		components: {
			uniCard
		},
		computed: {
			...mapState(['userInfo','imgSrc'])
		},
		onLoad(option) {
			this.statusQ = option.statusQ
		},
		methods: {
			...mapMutations(['changeUserInfo', 'login']),
			toQuestion(typeQ) {
				uni.navigateTo({
					url: `/pages/question/question?typeQ=${typeQ}`
				});
			}
		}
	}
</script>

<style lang="less">
	ul,
	li {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.content {
		background: #F5F5F5;
	}

	.questionLi {
		display: flex;
		padding: 50upx 36upx 0 30upx;
		background: #fff;

		.imgLeft {
			width: 72upx;
			height: 72upx;
			margin-right: 20upx;
		}

		.subQuestionWrap {
			flex: 1;

			.subQuestionUl {
				.subQuestionLi {
					margin-bottom: 24upx;

					.owner {
						display: flex;
						justify-content: space-between;

						.ownerL {
							line-height: 34upx;

							.line {
								width: 3upx;
								height: 32upx;
								background: #1B6FFF;
								display: inline-block;
								position: relative;
								top: 6upx;
								margin-right: 10upx;
							}

							.name {
								font-size: 24upx;
								color: #999999;
								letter-spacing: 0.46upx;
							}
						}

						.ownerR {
							position: relative;
							top: 6upx;

							.fabulous {
								width: 28upx;
								height: 28upx;
								position: relative;
								top: 2upx;
								margin-right: 10upx;
							}

							.num {
								font-size: 24upx;
								color: #4D5164;
								letter-spacing: 0.58upx;
							}
						}
					}

					.intro {
						margin-top: 6upx;

						.introL {
							font-size: 24upx;
							color: #333333;
							letter-spacing: 0.46upx;
							line-height: 33upx;
						}

						.timeR {
							font-size: 18upx;
							color: #999999;
							letter-spacing: 0.35upx;
							line-height: 26upx;
							text-align: right;
						}
					}
				}
			}

			.moreBtns {
				display: flex;
				justify-content: flex-end;
				height: 46upx;
				padding-bottom: 40upx;

				.btn1,
				.btn2 {
					background: #EDEDED;
					border-radius: 100upx;
					font-size: 22upx;
					color: #666666;
					height: 46upx;
					line-height: 46upx;
					border: none;
				}

				.btn1 {
					width: 170upx;

				}

				.btn2 {
					width: 120upx;
					margin-left: 43upx;
				}
			}
		}


	}
</style>
