<template>
  <div class="layout">
		<!-- 轮播图 -->
		<div class="tabimg">
			<el-carousel class="carousel" indicator-position="none" @change="changeimg">
				<el-carousel-item v-for="(item,index) in imglist" :key="index" >
					<img :src="item.imgurl" width="480" height="300px">
				</el-carousel-item>
			</el-carousel>
			<div class="carousel_item">
				<ul>
					<li v-for="(item,index) in imglist" :key="index">
						<img :src="item.imgurl" @mousemove="cutimg" class="img" width="93px" height="63px">
					</li>
				</ul>
			</div>
		</div>
		<!-- 知识小板块 -->
		<div class="wb">
			<p class="title">Web前端</p>
				<ol>
					<li v-for="(item,index) in wblist" :key="index" @click="conclusion(item,index)"><p>{{item.title}}</p></li>
				</ol>
		</div>
		<div class="know">
			<p>放松一刻！！</p>
			<video class="video" src="../assets/img/fff.mp4" controls="controls" width="100%" height="100%"></video>
		</div>
		<div class="fill">

		</div>
		
  </div>
</template>
<script>   
  
export default {	
  data(){
    return{
			wblist:[
				{id:0,title:'浅谈：html5和html区别'},
				{id:1,title:'html5移动端手机网站开发流程'},
				{id:2,title:'响应式布局'},
				{id:3,title:'制作网页'},
				{id:4,title:'WebApp开发--‘rem’单'},
				{id:5,title:'js实现Div自动居中代码'},
			],
      imglist:[
        {
        id:0,
        imgurl:require('../assets/img/tab0.jpg'),
        },
        {
          id:1,
          imgurl:require('../assets/img/tab1.jpg')
        },
        {
          id:2,
          imgurl:require('../assets/img/tab2.jpg')
				},
				 {
          id:1,
          imgurl:require('../assets/img/tab3.jpg')
        },
        {
          id:2,
          imgurl:require('../assets/img/tab4.jpg')
				}
      ]
    }
	},
	methods:{
		// 前端知识块
		conclusion(item,e){
			console.log(e)
			if(e==0){
				this.$router.push({
					path:'/web',
					query:{
						id:item.id,
						title:item.title
					}
				})
			}
			if(e==1){
				this.$router.push({
					path:'/web',
					query:{
						id:item.id,
						title:item.title
					}
				})
			}
			if(e==2){
				this.$router.push({
					path:'/web',
					query:{
						id:item.id,
						title:item.title
					}
				})
			}
			if(e==3){
				this.$router.push({
					path:'/web',
					query:{
						id:item.id,
						title:item.title
					}
				})
			}
			if(e==4){
				this.$router.push({
					path:'/web',
					query:{
						id:item.id,
						title:item.title
					}
				})
			}
			if(e==5){
				this.$router.push({
					path:'/web',
					query:{
						id:item.id,
						title:item.title
					}
				})
			}

		},
		changeimg(e){
			let pic=document.querySelectorAll('.carousel img')	
			let piclist=document.querySelectorAll('.carousel_item ul li img')			
			piclist.forEach((i)=>{
				i.className=''
			})
			pic[e].src=piclist[e].src
			piclist[e].className='img'		
			console.log(e)
		},
		cutimg(e){
			let pic=document.querySelectorAll('.carousel img')		
			let piclist=document.querySelectorAll('.carousel_item ul li img')
			if(e.target.tagName == 'IMG'){
				pic.forEach(i => {
					i.src=e.target.src
						piclist.forEach((m)=>{
							m.className = ''
						})
					e.target.className = 'img'	
				});
			}
		} 
		
	},
	watch:{
		
	},
}
</script>
<style scoped lang="scss">
.layout{
	  width: 1300px;
	 margin: 0 auto;
}
.fill{
	width: 30%;
	padding: 2px;
	height: 101px;
	float: right;
	background: peachpuff;
	border-radius:10px;
}
.know{
	float: right;
	width: 30%;
	padding: 2px;
	background: rgb(250, 232, 235);
	overflow: hidden;
	border-radius:10px;
	p{
		font-family:'Courier New', Courier, monospace;
		font-size: 20px;
		line-height: 20px;
		width: 120px;
		margin: 0px 0px;
		padding: 10px;
		animation:move 5s infinite;
	}
	@keyframes move {
		from{margin-left: 0px;color: orange;}
		to{margin-left: 400px;color: aquamarine}
	}
}
.wb{
	width: 32%;
	height: 372px;
	background: rgb(241, 252, 225);
	float: left;
	padding: 0px 3px;
	.title{
		font-size:20px; 
		font-family: 'Segoe UI', Helvetica, Arial, sans-serif;
		width: 100px;
		margin-left:15px;
	}
	ol{
		padding-left:30px ;
		width: 372;
		height: 300px;
		li{
			width: 350px;
			list-style: none;
			line-height: 12px;
			font-size: 17px;
			font-family: 'Segoe UI', Helvetica, Arial, sans-serif;
			border-bottom: 1px solid rgb(199, 198, 198);
			color: rgb(167, 158, 158);
			p{
				padding: 0px;
				margin:5 0 0  0;

				&:hover{
					margin-left: 30px;
					color: rgb(156, 134, 5);
					transition:0.7s ease
				}
			}

		}
	}
}
// 轮播图
.tabimg{
	width: 37%;
	position: relative;
	display: block;
	margin-right: 2px;
	float: left;
}
.carousel{
	width: 480px;
	height: 300px;
}
.carousel_item{
	width: 480px;
	height: 70px;
	border: 1px solid rgb(223, 221, 220);	
	ul{
		list-style: none;
		padding: 0px;
		width: 480px;
		height: 70px;
		margin: 2px 0 0 0;
		li{
			float: left;
			padding: 0px;
			margin:0px 1px;
			.img{
				border: 2px dashed rgb(255, 115, 0);
			}
		}
	}
}
</style>


