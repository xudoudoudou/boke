<template>
  <div class="layout">
      <div class="left"  >
          <el-form v-model="data" class="form">
              <h3>{{this.$route.query.title}}</h3>
                <div class="Bread">
                    <span style="margin-right:30px">编辑时间：2018-4-17</span>
                    <span style="margin-right:30px">浏览量：<strong style="color:red">802</strong></span>
                    <span style="margin-right:30px">作者：<strong style="color:red">小徐</strong></span>
                </div>
                <div style="border-bottom: 1px dashed rgb(149, 144, 144);"></div>
                <div>
                  <p> {{data.content}}</p>
                </div>
                <h4>{{data.title1}}</h4>
                <p>{{data.content1}}</p>
                <h4>{{data.title2}}</h4>
                <p>{{data.content2}}</p>
                 <h4>{{data.title3}}</h4>
                <p>{{data.content3}}</p>
                <h4>{{data.title4}}</h4>
                <p>{{data.content4}}</p>
          </el-form>
      </div>
      <div class="right">

      </div>
  </div>
</template>
<script>
import htmJsondata from '../assets/js/web'
import htm5Appdata from '../assets/js/mobail'

export default {
    data(){
        return{
            data:{
                content:'',
                title1:'',
                content1:'',
                title2:'',
                content2:'',
                title3:'',
                content3:'',
                title4:'',
                content4:'',
               
            },
        }
    },
    methods:{
        getlist(){
                
            if(this.$route.query.id==0){
            // this.data.content=htmJsondata.content
                this.data=Object.assign({},htmJsondata)
            }else if(this.$route.query.id==1){
                this.data=Object.assign({},htm5Appdata)
            }
        }
    },
    created(){
        this.getlist()
    },
   mounted(){
       
   } 
}
</script>
<style lang="scss" scoped>
.layout{
     width: 1300px;
	 margin: 0 auto;
}
.form{
    padding: 10px
}
    .left{
        // left 区域定义所有的p标签
        p{ text-indent:2em; padding:0px; margin:0px;font-size: 17px;margin-top: 10px;}
        width:996px;
        height: 1000px;
        float: left;
        border: 1px solid rgb(201, 193, 195);
        h3{
            text-align: center;
            line-height: 50px;
            font-size: 25px;
            margin: 0px;
            border-bottom: 1px dashed rgb(149, 144, 144);
        }
        .Bread{
             width:42%;
            line-height: 40px;
            margin:0 auto;
            
        }
        h4{
            text-indent:2em;
            margin: 10px 0px 0px 0px ;
            font-size:19px; 
        }
    }
    .right{
        width:299px;
        height: 800px;
        float: right;
        border: 1px solid  rgb(201, 193, 195);
    }
</style>


