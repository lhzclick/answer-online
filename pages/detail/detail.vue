<template>
	<view class="content">
		<view class="titleW">震荡市，买股还是买债呢？</view>
		<view class="articleCont">
			<view class="contT">
				<img class="imgPerson" :src="imgSrc+'personSmall.png'" alt="">
				<view class="personIntro">
					<view class="t1">晓鸥姐姐</view>
					<view class="t2">2019/09/09</view>
				</view>
			</view>
			<view class="contB">一个公司的成长性好，说明公司可能处于业务快速发展阶段，利润增长幅度较大，前景好，投资价值高。那我们怎么才能找到成长性好的公司呢？现以爱尔眼科为例来具体分析：要看一个公司的成长能力，核心指标是，净利润增长率保持稳健增长，比如，我去年净赚100块钱，今年净赚130块，那我的净利润增长率就是30%。通过下图爱尔眼科近五年的净利率增长率图表，可以很直观地看出，爱尔眼科之保持净利润增长率持续正增长，优于整体行业水平并长期处于行业前列。</view>
		</view>
		<view class="questionTitle">
			<view class="titleL">
				<text class="t1">提问</text>
				<text class="t2">178</text>
			</view>
			<view class="titleR">
				<img class="t1" :src="imgSrc+'fabulous1.png'" alt="">
				<!-- <img class="t1" :src="imgSrc+'fabulous2.png'" alt=""> -->
				<text class="t2">45</text>
			</view>
		</view>
		<view class="questionUl" v-for="(item,i) in arrTest1" :key="i">
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
						<button v-if="arrTest2.length>4" class="btn1" type="primary" @click="toDetailMore">更多回答</button>
						<button v-if="statusQ==1" class="btn2" type="primary" @click="toQuestion(2)">追问</button>
					</view>
				</view>

			</view>
		</view>
		<view v-if="statusQ==1">
			<img @click="toQuestion(1)" :src="imgSrc+'questionBtn.png'" class="questionBtn" alt="">
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
			...mapState(['userInfo', 'imgSrc'])
		},
		onLoad(option) {
			// console.log(11111,this.userInfo)
			this.statusQ = option.statusQ
		},
		methods: {
			...mapMutations(['changeUserInfo', 'login']),
			toQuestion(typeQ) {
				uni.navigateTo({
					url: `/pages/question/question?typeQ=${typeQ}`
				});
			},
			toDetailMore() {
				uni.navigateTo({
					url: `/pages/detailMore/detailMore?statusQ=${this.statusQ}`
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

	.titleW {
		box-sizing: border-box;
		padding-top: 35upx;
		padding-bottom: 24upx;
		line-height: 60upx;
		font-weight: bold;
		font-size: 42upx;
		color: #333333;
		letter-spacing: 0.26upx;
		background: #fff;
		padding-left: 32upx;
		margin-bottom: 20upx;
	}

	.articleCont {
		background: #fff;
		padding: 0 33upx;
		padding-top: 18upx;

		.contT {
			display: flex;
			padding-bottom: 26upx;

			.imgPerson {
				width: 72upx;
				height: 72upx;
				margin-right: 40upx;
			}

			.personIntro {
				.t1 {
					line-height: 42upx;
					font-size: 30upx;
					color: #333333;
					letter-spacing: 0.19upx;
				}

				.t2 {
					line-height: 30upx;
					font-size: 22upx;
					color: #999999;
					letter-spacing: 0.14upx;
				}
			}
		}

		.contB {
			font-size: 30upx;
			color: #333333;
			letter-spacing: 0.54upx;
			line-height: 50upx;
			padding-bottom: 30upx;
		}
	}

	.questionTitle {
		background: #fff;
		;
		height: 85upx;
		line-height: 85upx;
		display: flex;
		justify-content: space-between;
		margin: 20upx 0;
		color: #333333;
		font-size: 34upx;
		font-weight: bold;

		.titleL {
			margin-left: 32upx;

			.t1 {
				margin-right: 10upx;
			}
		}

		.titleR {
			margin-right: 44upx;

			.t1 {
				margin-right: 20upx;
				width: 38upx;
				height: 38upx;
				position: relative;
				top: 8upx;
			}
		}
	}

	.questionUl {
		padding: 0 32upx;
		background: #fff;

		.questionLi {
			display: flex;
			padding-top: 50upx;

			.imgLeft {
				width: 72upx;
				height: 72upx;
				margin-right: 20upx;
			}

			.subQuestionWrap {
				flex: 1;
				border-bottom: 1px solid #DDDDDD;

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
	}

	.questionBtn {
		width: 100upx;
		height: 100upx;
		position: fixed;
		right: 38upx;
		bottom: 400upx;
	}
</style>
