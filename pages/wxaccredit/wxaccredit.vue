<template>
	<view class="sys">
		<view>
			<image src="../../static/index/welcome.jpg"></image>
		</view>
		<button type="primary"  open-type="getUserInfo" lang="zh_cn" class="sys_btn" @getuserinfo="getUserInfo">微信授权</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			getUserInfo(){
				uni.getProvider({
					service:'oauth',
					success:function(res){
						if(~res.provider.indexOf("weixin")){
							uni.login({
								provider:'weixin',
								success:function(res){
									console.log(res);
									uni.getUserInfo({
										provider:'weixin',
										success:function(info){
											console.log('info'+info)
										},
										fail:function(err){
											uni.showToast({
												title:'授权失败！',
												icon:'none'
											})
										}
									})
								},
								fail: (err) => {
									uni.showToast({
										title:'授权失败！',
										icon:'none'
										
									})
								}
							})
						}else
						{
							uni.showToast({
								title:'请安装微信或者微信升级',
								icon:'none'
							})
						}
					}
				})
			}
		}
	}
</script>

<style>
.sys{
	padding: 20px;
}
</style>
