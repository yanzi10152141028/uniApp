<template>
	<view class="home">
		<view class="banner">
			<swiper class="swiper" circular :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" >
				<swiper-item v-for="(item,index) in bannerImgs">
					<view class="swiper-item uni-bg-red">
						<image :src="item" class="swiper_img" mode="aspectFill"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="product">
			<view class="brand_product">
				<view class="brand_list">
					<view>
						<image v-for="(item,index) in brandImgs" :src="item"></image>
					</view>
				</view>
			</view>
			<view class="hot_product">
				<view class="hot_title">
					<text>热卖商品</text>
				</view>
				<view class="hot_list">
					<view class="list" v-for="(item,index) in hotProducts">
						<image :src="item.url"></image>
						<view class="title">
							{{item.title}}
						</view>
						<view class="price">
							￥{{item.price}}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bannerImgs: ["../../static/index/banner/banner_one.jpg", "../../static/index/banner/banner_two.jpg",
					"../../static/index/banner/banner_three.jpg"
				],
				brandImgs: ['../../static/index/brand/brand_one.jpg',
					'../../static/index/brand/brand_two.jpg',
					'../../static/index/brand/brand_three.jpg',
					'../../static/index/brand/brand_four.png',
					'../../static/index/brand/brand_six.png'
				],
				hotProducts: [{
						"url": "../../static/index/product.jpg",
						"title": "棉质枕头",
						"price": '79'
					},
					{
						"url": "../../static/index/product.jpg",
						"title": "棉质枕头",
						"price": '79'
					},
					{
						"url": "../../static/index/product.jpg",
						"title": "棉质枕头",
						"price": '79'
					},
					{
						"url": "../../static/index/product.jpg",
						"title": "棉质枕头",
						"price": '79'
					},
					{
						"url": "../../static/index/product.jpg",
						"title": "棉质枕头",
						"price": '79'
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.home {
		.banner {
			position: fixed;
			top: 0;
			width: 100%;
			height: 100px;
			z-index: 99;
			.swiper{
				.swiper_img {
					width: 100%;
				}
			}
		}
		.product {
			position: relative;
		    /* #ifdef MP-WEIXIN || APP-PLUS */
		        top: 160px;
		    /* #endif */
			/* #ifdef H5 */
			 top: 120px;
			/* #endif */
			z-index: 10;
			/* #ifdef H5 */
			padding-bottom: var(--window-bottom);
			/* #endif */
			.brand_product {
				.brand_list {
					width: 100%;
					padding: 0px 0px 25px;

					view {
						display: flex;
						flex-direction: row;

						image {
							width: 109px;
							height: 80px;
							border: 1px dashed #e2e0db;
						}
					}
				}
			}

			.hot_product {
				.hot_title {
					font-size: 18px;
					padding: 10px 12px 10px;
				}

				.hot_list {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					flex-wrap: wrap;
					width: 96%;
					padding: 0 2%;

					.list {
						width: 46%;
						padding: 10px 2%;

						image {
							width: 100%;
							height: 150px;
						}

						.title {
							color: #929292;
							font-size: 12px;
						}

						.price {
							color: #e6465a;
							font-weight: bold;
							font-size: 12px;
						}
					}
				}
			}
		}
	}
</style>
