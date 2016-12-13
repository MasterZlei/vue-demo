<template>
	<div class="goods">
		<aside v-show="isShow" ref="asideWrapper">
			<ul>
				<li v-for="values,key in datas" :id="key" @click="change(key)" :class="{'active':i==key}">
					<span><span :class="{'type1':values.type==1,'type2':values.type==2}"></span>{{values.name}}</span>
				</li>
			</ul>
		</aside>
		<section ref="sectionWrapper">
			<div v-for="values,key in datas" class="classify">
				<div class="title">{{values.name}}</div>
				<div class="details" v-for="v,k in values.foods">
					<img v-bind:src=v.icon>
					<div class="goodsDescription">
						<div class="name">{{v.name}}</div>
						<div class="description">{{v.description}}</div>
						<div class="sellArating">
							<span class="sellCount">月售{{v.sellCount}}份</span><span class="rating">好评率{{v.rating}}%</span>
						</div>
						<div class="price">
							<span class="newPrice">￥{{v.price}}</span><span class="oldPrice"  v-if="v.oldPrice!=''">￥{{v.oldPrice}}</span>
						</div>
					</div>

				</div>
			</div>
		</section>
		<div class="shopCar">
			<div class="content-left">
				<div class="icon">
					<div class="icon-space">
						<span class="icon-shopping_cart shopping_cart"></span>
					</div>
				</div>
				<div class="price">￥0</div>
				<div class="send-price">配送费￥54元</div>
			</div>
			<div class="content-right">
				<div class="pay unenough">￥20元起送</div>
			</div>
		</div>
	</div>
</template>
<script>

	import BScroll from "better-scroll";

	export default{
		methods:{
			change(key){
				this.i=key
			}

		},
		data(){
			return{
				datas:"",
				isShow:false,
				oldPrice:false,
				i:0,
				type:false,
			}
		},
		created(){
			this.$http.get("http://10.80.13.201:8080/api/goods")
			.then(function(response){
				return response.json()
			})
			.then(function(response){
				var data=response.data
				var success=response.success
				this.datas=data

				if (success===1) {
					this.isShow=true
				}
			})
		}

	}
	
</script>
<style>
	.goods{
		display: flex;
		position: absolute;
		top: 174px;
		bottom: 46px;
		width: 100%;
		overflow: hidden;
	}
	.active{
		background: #fff;
		overflow: hidden;
		z-index: 10;
		margin-top: -1px;
	}
	.active>span:after{
		display: none;
	}
	aside,section{
		height: 100%;
	}
	aside{
		width: 80px;
		overflow: auto;
	}
	section{
		flex: 1;
		overflow: auto;
	}
	aside ul li{
		width: 56px;
		height: 54px;
		background: #f3f5f7;
		padding: 0 12px;
		display: table;
		line-height: 14px;
		position: relative;
	}
	aside ul li>span::after{
		content: "";
		width: 100%;
		height: 1px;
		background: rgba(7,17,27,0.1);
		position: absolute;
		left: 0;
		bottom: 0;
	}
	aside ul li>span{
		position: relative;
		font-size: 12px;
		font-weight: 200;
		width: 56px;
		display: table-cell;
		vertical-align: middle;

	}
	aside ul li .type1,aside ul li .type2{
		width: 12px;
		height: 12px;
		float: left;
		margin-top: 1px;
		margin-right: 1px;
	}
	aside ul li .type2{
		background-image: url(../../../resource/img/special_3@2x.png);
		background-size: cover;
	}
	aside ul li .type1{
		background-image: url(../../../resource/img/discount_3@2x.png);
		background-size: cover;
	}
	.title{
		border-left: 4px #d9dde1 solid;
		background: #f3f5f7;
		font-size: 12px;
		color: rgb(147,153,159);
		line-height: 26px;
		padding-left: 14px;

	}
	.details{
		margin: 18px;
		position: relative;
		overflow: hidden;
		display: flex;
		padding-bottom: 18px;

	}
	.details:last-child{
		margin-bottom: 0;
	}
	.details::after{
		display: block;
		content: "";
		position: absolute;
		bottom: 0;
		right: 0px;
		left: 0px;
		height: 1px;
		box-sizing: border-box;
		background: rgba(7,17,27,.1);
	}
	.details:last-child::after{
		height: 0;
	}
	.details img{
		width: 57px;
		height: 57px;
		margin-right: 10px;
	}
	.details .goodsDescription{
		float: left;
		flex: 1;
	}
	.details .name{
		font-size: 14px;
		color: rgb(7,17,27);
		line-height: 14px;
		margin: 2px 0 8px 0;
	}
	.details .description{
		font-size: 10px;
		color: rgb(147,153,159);
		line-height: 12px;
		margin-bottom: 8px;
	}
	.details .sellArating{
		line-height: 10px;
		font-size: 10px;
		color: rgb(147,153,159);
	}
	.sellArating span{
		margin-right: 12px;
		font-size: 100%;
	}
	.sellArating span:last-child{
		margin: 0;
	}
	.price{
		line-height: 24px;
	}
	.price span{
		margin-right: 8px;
	}
	.price span:last-child{
		margin:0;
	}
	.price .newPrice{
		font-size: 14px;
		color: rgb(240,20,20);
	}
	.price .oldPrice{
		font-size: 10px;
		color: rgb(147,153,159);
		text-decoration: line-through;
	}
	.shopCar{
		position: fixed;
		bottom: 0;
		height: 48px;
		background-color: #141d27;
		width: 100%;
		z-index: 50;
		left: 0;
		display: flex;
	}
	.shopCar .content-left{
		flex: 1;
	}
	.shopCar .content-left>div{
		display: inline-block;
	}
	.shopCar .content-left .icon{
		width: 56px;
		height: 56px;
		border-radius: 50%;
		margin:0 12px;
		position: relative;
		background-color: #141d27;
		top:-11px;
	}
	.shopCar .content-left .icon-space{
		text-align: center;
		margin:6px;
		border-radius: 50%;
		background: #2b343c;
	}
	.icon .shopping_cart{
		font-size: 24px;
		line-height: 44px;
		color: #80858a;
	}
	.shopCar .content-left .price{	
		vertical-align: top;
		color: rgba(255,255,255,.4);
		margin-top: 11px;
		font-size: 16px;
		font-weight: 700;
		line-height: 24px;
		padding-right: 12px;
		border-right: 1px solid rgba(255,255,255,.1);
		margin-right: 12px;
	}
	.shopCar .content-left .send-price{
		vertical-align: top;
		color: rgba(255,255,255,.4);
		margin-top: 11px;
		line-height: 24px;
		font-size: 12px;font-weight: normal;
	}
	.shopCar .content-right{
		flex: 0 0 105px;		
	}
	.shopCar .content-right .pay{
		font-size: 12px;
		color: rgba(255,255,255,.4);
		font-weight: 700;
		line-height: 48px;
		text-align: center;
	}
	.shopCar .content-right .pay.enough{
		background-color: #00b43c;
		color: #fff;
	}
	.shopCar .content-right .pay.unenough{
		background-color: #2b333b;
	}
</style>