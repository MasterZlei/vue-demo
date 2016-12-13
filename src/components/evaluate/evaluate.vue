<template>
	<div class="evaluate">
		<div class="score">
			<div class="score-left">
				<div class="left-score">{{datas.score}}</div>
				<div class="left-txt">综合评分</div>
				<div class="left-rankRate">高于周边商家{{datas.rankRate}}%</div>
			</div>
			<div class="score-right">
				<div class="serverScore">
					<span class="right-txt">服务态度</span>
					<div class="star">
						<span v-for="n in serviceStary" class="serviceStary"></span><span v-for="n in serviceStarh" class="serviceStarh"></span><span v-for="n in serviceStarw" class="serviceStarw"></span>
					</div>
					<span class="right-score">{{datas.serviceScore}}</span>
				</div>
				<div class="foodScore">
					<span class="right-txt">商品评分</span>
					<div class="star">
						<span v-for="n in foodStary" class="foodStary"></span><span v-for="n in foodStarh" class="foodStarh"></span><span v-for="n in foodStarw" class="foodStarw"></span>
					</div>
					<span class="right-score">{{datas.foodScore}}</span>
				</div>
				<div class="deliveryTime">
					<span class="right-txt">送达时间</span>
					<span class="right-time">{{datas.deliveryTime}}分钟</span>
				</div>
			</div>
		</div>

		<div class="ratings">
			<div class="select-ratings">
				<div class="select-btn">
					<span class="btn-all">全部<span class="btn-all-count">{{ratings.length}}</span></span>
					<span class="btn-satisfy">满意<span class="btn-satisfy-count">{{getSatisfyratings}}</span></span>
					<span class="btn-unsatisfy">不满意<span class="btn-unsatisfy-count">{{getUnsatisfyratings}}</span></span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				ratings:[],
				datas:"",
				serviceStary:"",
				serviceStarw:"",
				serviceStarh:"",
				foodStarw:"",
				foodStarh:"",
				foodStary:"",
			}
		},
		computed:{
			getSatisfyratings:function(){
				let num=0;
				for (var i = 0; i < this.ratings.length; i++) {
					if (this.ratings[i].rateType==0) {
						num++
					}
				}
				return num;
			},
			getUnsatisfyratings:function(){
				let num=0;
				for (var i = 0; i < this.ratings.length; i++) {
					if (this.ratings[i].rateType==1) {
						num++
					}
				}
				return num;
			}
		},
		created(){
			var that=this
			this.$http.get("http://10.80.13.201:8080/api/seller")
			.then(function (response) {
				return response.json()
			})
			.then(function (response) {
				var serviceScore=response.data.serviceScore;//商家评价
          		var serviceStarY=Math.floor(serviceScore);//满星个数
          		var serviceStarW=0;//空星个数
          		var serviceStarH=0;
          		var servicefloat=serviceScore-serviceStarY//评价中小数部分
		          if(servicefloat>=0.5){
		            serviceStarH=1;
		            serviceStarW=4-serviceStarY;
		          }else{
		            serviceStarW=5-serviceStarY
		          }
		         that.serviceStarw=serviceStarW;
		         that.serviceStarh=serviceStarH;
		         that.serviceStary=serviceStarY;

		        var foodScore=response.data.foodScore;//商家评价
          		var foodStarY=Math.floor(foodScore);//满星个数
          		var foodStarW=0;//空星个数
          		var foodStarH=0;
          		var foodfloat=foodScore-foodStarY//评价中小数部分
		          if(foodfloat>=0.5){
		            foodStarH=1;
		            foodStarW=4-foodStarY;
		          }else{
		            foodStarW=5-foodStarY
		          }


		         that.foodStarw=foodStarW;
		         that.foodStarh=foodStarH;
		         that.foodStary=foodStarY;

				that.datas=response.data
			})


			this.$http.get("http://10.80.13.201:8080/api/ratings")
			.then(function (response) {
				return response.json()
			})
			.then(function (response) {
				that.ratings=response.data
			})
		}
	}

</script>
<style>
	.evaluate{
		background: rgb(243,245,247);
	}
	.score{
		background: #fff;
		display: flex;
		border-bottom: 1px solid rgba(7,17,27,.1);
		margin-bottom: 18px;
	}
	.score .score-left{
		flex: 0 0 135px;
		margin: 18px 0;
		border-right: 1px solid rgba(7,17,27,.1);
	}
	.score .score-left div{
		text-align: center;
		margin-bottom: 6px;
	}
	.score .score-left .left-score{
		font-size: 24px;
		color: rgb(255,153,0);
		line-height: 28px;
	}
	.score .score-left .left-txt{
		font-size: 12px;
		color: rgb(7,17,27);
		line-height: 12px;
		margin-bottom: 8px;
	}
	.score .score-left .left-rankRate{
		font-size: 10px;
		color: #93999f;
		line-height: 10px;
	}

	.score .score-right{
		flex: 1;
		margin: 18px 24px;
	}
	.score .score-right .serverScore,.score .score-right .foodScore{
		margin-bottom: 8px;
	}
	.score .score-right .right-txt{
		font-size: 12px;
		color: rgb(7,17,27);
		line-height: 18px;
	}
	.score .score-right .serverScore>span{
		display: inline-block;
		vertical-align: top;
	}
	.score .score-right .star{
		margin: 0 12px;
		display: inline-block;
		vertical-align: middle;
	}
	.score .score-right .star>span{
		display: inline-block;
		width: 15px;
		height: 15px;
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.score .score-right .star .serviceStary,.score .score-right .star .foodStary{
		background-image: url(../../../resource/img/star36_on@2x.png);
	}
	.score .score-right .star .serviceStarh,.score .score-right .star .foodStarh{
		background-image: url(../../../resource/img/star36_half@2x.png);
	}
	.score .score-right .star .serviceStarw,.score .score-right .star .foodStarw{
		background-image: url(../../../resource/img/star36_off@2x.png);
	}
	.score .score-right .right-score{
		font-size: 12px;
		color: rgb(255,153,0);
		line-height: 18px;
	}
	.score .score-right .right-time{
		font-size: 12px;
		color: #93999f;
		line-height: 18px;
		margin-left: 12px;
	}
	



	@media only screen and (max-width: 320px){
		.score .score-right{
			margin: 18px 6px;
		}
	}
</style>