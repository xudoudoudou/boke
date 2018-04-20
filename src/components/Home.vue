<template>
  <div class="warp" >
      <div id="particleCanvas"></div>
      <div class="top">
          <div class="title">
              <h1>~欢迎进入我的博客！</h1>
          </div>
          <div class="nav">
              <ul>
                  <router-link :class="{change:ind===index}" v-for="(item,index) in list" :key="index" :to="item.url" tag="li"><span @click="handleclick(index)">{{item.name}}</span></router-link>
              </ul>
          </div>
      </div>  
      <div class="content">   
          <router-view/>
      </div>
  </div>
</template>
<script>
import particles from 'particles.js'
export default {
  data(){
      return{
          ind:0,
          list:[
              {id:0,name:'首页', url:'/main'},
              {id:1,name:'About',url:'/resume'},
              {id:2,name:'文章',url:'/article'},
              {id:3,name:'workes', url:'/work'}
          ]
      }
  },
  methods:{
      handleclick(index){
          this.ind=index
      }
  },
   mounted() {
    //   document.getElementById('particleCanvas').width = window.innerWidth
    //   document.getElementById('particleCanvas').height = window.innerHeight
       particlesJS('particleCanvas',{"particles": {
          "number": {
            "value": 70,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": '#191970'
          },
          "shape": {
            // circle, edge, triangle, polygon, star, image
            "type": 'star',
            "stroke": {
              "width": 0,
              "color": "#192231"
            },
            "polygon": {
              "nb_sides": 5
            }
          },
          "opacity": {
            "value": "0.8",
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": "5",
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": "true",
            "distance": "150",
            "color": "#ffffff",
            "opacity": "0.4",
            "width": "2"
          },
          "move": {
            "enable": true,
            "speed": "3",
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": "true",
              "mode": "grab"
            },
            "onclick": {
              "enable": "true",
              "mode": "push"
            },
            "onresize": {
              "enable": true,
              "density_auto": true,
              "density_area": 400
            }
          },
          "modes": {
            "grab": {
              "distance": 140,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true});
        console.log('---',this)
       
       
    }
}
</script>
<style scoped lang="scss">
 #particleCanvas{
    position: absolute;
    top: 260px;
    width: 100%;
    height: 100%;
    z-index:0;
}  
.warp{
    width: 100%;
    height: 100%;
     background:rgb(219, 241, 250);
    .top{
        height: 250px;
        background: url('../assets/img/banner.jpg') no-repeat;
        background-position: 60% 55%;
        background-size:cover; 
        .title{
            position: absolute;
            width: 100%;
            margin: 0px 1px;
            text-align: center;
            z-index: 0;
            h1{
                margin-top: 30px;
                color: rgb(0, 255, 149);
                transform-style: preserve-3d;
                perspective: 8000px;
                animation:mymove 10s infinite;
            }
            @keyframes mymove {
                25%{transform: rotateY(0);
                    background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(rgba(250, 50, 10, 1)), to(rgba(246, 199, 156, 1)));//起作用关键的样式
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                50%{transform: rotateY(90deg) scale(2)}
                75%{transform: rotateY(60deg) scale(2)}
                100%{color: rgb(4, 0, 255);}
            }
        }
        .nav{
            width: 50px;
            height: 60px;
            ul{
                position: absolute;
                top: 100px;
                right: 300px;
                list-style: none;
                padding: 0px;
                margin: 0px;
                .change{                   
                    animation:move 3s infinite;
                } 
                @keyframes move {
                    from{border-bottom: 4px solid rgb(255, 0, 128);color: yellowgreen}
                    to{border-bottom: 4px solid rgb(0, 255, 136);}
                }
                li{
                    float: left; 
                    padding: 5px;
                    margin-left: 20px;
                    color: rgb(199, 181, 181);
                    font-size: 20px;
                    &:hover{
                        color: orange;
                        transition: all 0.8s ease;
                        background: rgb(247, 223, 247);
                        box-shadow: 0px -5px 10px  gold;
                    }
                }
            }
        }    
    } 
        //内容
        .content{
            position: relative;
            min-height: 1000px;
            width: 1300px;
            margin: 0 auto;
        
        } 
       
}
    
</style>


