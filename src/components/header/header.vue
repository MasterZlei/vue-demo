<template>
<div>
  <div class="header" v-if="datas">
  	<div class="info">
        <div class="pic"></div>
        <div class="right">
          <div class="one">
            <span></span>
            {{datas.name}}
          </div>
          <div class="two">
            {{datas.description}}/{{datas.deliveryTime}}分钟
          </div>
          <div class="three">
            <ul>
              <li v-for="value,key in datas.supports"><span></span>{{datas.supports[key].description}}</li>
            </ul>
          </div>
        </div>
        <div class="button" @click="change">{{datas.supports.length}}个<span class="icon-keyboard_arrow_right keyboard_arrow_right"></span></div>
    </div>
    <div class="message">
      <span></span>
      <p>{{datas.bulletin}}</p>
    </div>
    <div class="bg"></div>    
  </div>
  <div class="mask" v-show="isShow">
    <div class="mask-title">{{datas.name}}</div>
    <div class="mask-star">
      <span v-for="n in stary" class="stary"></span><span v-for="n in starh" class="starh"></span><span v-for="n in starw" class="starw"></span>
    </div>
    <div class="benefit-title">
      <div class="line"></div>
      <div class="txt">优惠信息</div>
      <div class="line"></div>
    </div>
    <div class="benefit-content">
      <ul>
        <li v-for="value,key in datas.supports"><span class="bnf-icon"></span ><span class="bnf-content">{{datas.supports[key].description}}</span></li>
      </ul>
    </div>
    <div class="message-title">
      <div class="line"></div>
      <div class="txt">商家公告</div>
      <div class="line"></div>
    </div>
    <p class="message-content">{{datas.bulletin}}</p>
    <div class="closeBtn">
      <span class="icon-close icon-extra" @click="change"></span>
    </div>
  </div>
</div>
</template>
<style>
	.header{
		color: #fff;
		background-color:rgba(7,17,27,0.5);
		position: relative;
	}
	.info{
		overflow: hidden;
    position: relative;
	}
	.pic{
	    width: 64px;
	    height:64px;
	    margin: 24px 16px 18px 24px;
	    border-radius: 4px;
	    background: url(http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg) 0 0 no-repeat;
	    background-size: cover;
  	}
  	.info>div{
  		float: left;
  		margin-top: 24px;
  	}
  	.right .one{
  		font-size: 16px;
  		line-height: 18px;
  		font-weight: bold;
  		height: 18px;
  	}
  	.one>span,.three span{
  		float: left;
  		height: 18px;
  		width: 30px;
  		background-image: url(../../../resource/img/brand@2x.png);
  		background-size: cover;
  		margin-right: 6px;
  	}
  	.bg{
		width: 100%;
		height: 100%;
		background-image: url(http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg);
		background-size: 100%;
		z-index: -1;
		position: absolute;
		left: 0;
		top: 0;
		filter: blur(5px);
		-webkit-filter: blur(5px);
  	}
  	.two,.three{
  		margin: 8px 0 10px 0;
  		font-size: 12px;
  		color: #fff;
  		line-height: 12px;
  		font-weight: 200;
  	}
  	.three{
  		margin: 0;
  	}
    .three ul{
      height: 12px;
      overflow: hidden;
    }
    .three li{
      font-size: 10px;
      color: #fff;
      font-weight: 200;
    }
  	.three span{
  		width: 12px;
  		height: 12px;
  		background-image: url(../../../resource/img/decrease_1@2x.png);
  		margin-right: 4px;
  	}
  	.info .button{
      position: absolute;
  		border-radius: 14px;
  		font-size: 10px;
  		color: #fff;
  		font-weight: 200;
  		line-height: 12px;
 		  background: rgba(0,0,0,.2);
 	  	padding:0 8px;
 		  top: 65px;
 		  right: 12px;
      margin: 0;
  	}
    .keyboard_arrow_right{
      margin-left: 2px;
      font-size: 10px;
      line-height: 24px;
    }
  	.message{
  		width: 100%;
  		height: 28px;
  		background: rgba(7,17,27,0.2);
  		line-height: 28px;
  	}
  	.message span{
  		float: left;
  		width: 24px;
  		height: 12px;
  		background-image: url(../../../resource/img/bulletin@2x.png);
  		background-size: cover;
  		margin: 8px 4px 0 12px;
  	}
  	.message p{
  		text-overflow: ellipsis;
  		white-space: nowrap;
  		overflow: hidden;
  		font-size: 10px;
  		font-weight: 200;
  		line-height: 28px;
  		margin-right: 4px;
  	}
    .mask{

    left: 0;
    top: 0;
    background: rgba(7,17,27,0.8);
    z-index: 100;
    color: #fff;
    padding: 0 10% 0px 10% ;
    box-sizing: border-box;
    overflow: auto;
    width:100%;
    height: 100%;
    position:absolute;

    /*filter:blur(10px);*/
    /*-webkit-filter:blur(10px);*/
  }
  .mask-title{
    margin-top: 64px;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
  }
  .mask-star{
    margin-top: 16px;
    height: 24px;
    text-align: center;
  }
  .mask-star>span{
    display: inline-block;
    margin-right: 15px;
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .mask-star .stary{
    background-image: url(../../../resource/img/star24_on@2x.png);
  }
  .mask-star .starh{
    background-image: url(../../../resource/img/star24_half@2x.png);
  }
  .mask-star .starw{
    background-image: url(../../../resource/img/star24_off@2x.png);
  }
  .benefit-title,.message-title{
    display: flex;
    margin: 28px 0 24px 0;
  }
  .mask>div>.line{
    flex: 1;
    position: relative;
    top: 7px;
    height: 1px;
    background: rgba(255,255,255,0.2);
  }
  .mask>div>.txt{
    font-size: 14px;
    font-weight: 700;
    line-height: 14px;
    padding: 0 12px;
  }
  .benefit-content,.message-content{
    margin: 0 12px 0 12px;
  }
  .benefit-content li{
    font-size: 12px;
    color: #fff;
    font-weight: 200;
    line-height: 12px;
    margin-bottom: 12px;
  }
  .benefit-content li:last-child{
    margin-bottom: 0;
  }
  .benefit-content .bnf-icon{
    display: inline-block;
    width: 16px;
    height: 16px;
    background-image: url(../../../resource/img/decrease_1@2x.png);
    background-size: cover;
    margin-right: 6px;
    vertical-align: top;
  }
  .benefit-content .bnf-content{
    line-height: 16px;
  }
  .message-content{
    font-size: 12px;
    font-weight: 200;
    line-height: 24px;
  }
  .closeBtn{
    color: rgba(255,255,255,.5);
    text-align: center;
    margin: 15px 0;
  }
  .closeBtn .icon-extra{
    font-size: 32px;
  }
</style>
<script>
	export default{
    methods:{
      change(){
        this.isShow=!this.isShow
      },

    },
    computer:{

    },
    data(){
      return{
        datas:"",
        isShow:false,
        starw:"",
        starh:"",
        stary:""
      }
    },
    created(){
      var that = this;
      this.$http.get("http://10.80.13.201:8080/api/seller")
        .then(function(response){
          return response.json()
        }).then(function(response){
          var score=response.data.score;//商家评价
          var starY=Math.floor(score);//满星个数
          var starW=0;//空星个数
          var starH=0;
          var float=score-starY//评价中小数部分
          if(float>=0.5){
            starH=1;
            starW=4-starY;
          }else{
            starW=5-starY
          }
         var data = response.data;
         that.datas = data;
         that.starw=starW;
         that.starh=starH;
         that.stary=starY;

        });
        
    }
	}
</script>