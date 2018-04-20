<template>
  <div>
    <el-row>
        <el-col :span="5" class="left">
          <img src="../assets/img/head.jpg">
          <span class="Note">实践过，才懂得</span>
          <h4>基本信息</h4>
          <p>毕业学校：武汉大学</p>
          <p>就读专业：计算机网络技术</p>
          <h4>联系方式</h4>
          <p>电话：15976877016</p>
          <p>邮箱：2449909296@qq.com</p>
          <h4>奖项荣誉</h4>
          <p>1.2016年全年级计算机作品大赛二等奖</p>
          <p>2.连续获学校三等奖学金</p>
          <h4>工作经历</h4>
          <p>1.南凌科技(2015-1~2017-3)</p>
          <p>2.广州蓝畔((2015-4~2018-)</p>
        </el-col>
        <el-col :span="19" class="right">
          <div class="content">
            <h1>徐梦云</h1>
            <p>求职意向：前端开发</p>
            <h3>个人技能</h3>
            <ul>
              <li>熟悉html css JavaScript(ES6) jQuery</li>
              <li>具备前后端分离思想, 有过前端渲染经验</li>
              <li>Vue Vuex VueRouter(有实战经验，可快速上手)</li>
              <li>React Redux ReactRouter(了解学习过)</li>
              <li>了解 node.js</li>
            </ul>
            <h3>项目经验</h3>
            <ol>
              <li style="font-size:20px">
                <h4>中包联盟(上线项目) [2017.03-2017.05]</h4>
                <ul>
                  <li>职责：前端开发与维护</li>
                  <li>vue+vue-router+vuex+axios</li>
                  <li>对接口数据</li>
                  <li>项目地址：<a href="https://gitee.com/837829847/admanager_html.git">https://gitee.com/837829847/admanager_html.git</a></li>
                  <li>预览地址：</li>
                  <li>测试帐号：123 ；密码：123</li>
                </ul>
              </li>
              <li style="font-size:20px">
                <h4>单个页面组件[2018.04-11]</h4>
                <ul>
                  <li>仿照网上页面练习的静态demo</li>
                  <li>通过联系中再次对整个页面布局深入了解</li>
                  <li>预览地址：<a href="https://xudoudoudou.github.io/demo0/">https://xudoudoudou.github.io/demo0/</a></li>
                </ul>

              </li>
            </ol>
           
            
            <h3>自我描述</h3>
            <ul style="list-style:none">
              <li>热爱前端开发，追求新技术</li>
              <li>掌握前端界面html5css3开发</li>
               <li>掌握vue编程 vue-cli vue-router vuex 单页应用(组件)开发。</li>
            </ul>
          </div>
        </el-col>
    </el-row>
    <p class="Notes"><em>本简历使用Vue框架开发。</em></p>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped lang="scss">
.Note{
  display: block;
  color: rgb(122, 120, 116);
}
.Notes{
  text-align: center;
  color: rgb(80, 79, 77);
  font-size: 16px;
}
p{
  font-size: 20px;
  font-family: "Times New Roman",Georgia,Serif;
}
.left{
  background: rgb(140, 220, 240);
  text-align: center;
  min-height: 1000px;
  img{
    width: 150px;
    height: 150px;
    margin-top: 20px;
    border-radius: 180px;
    z-index: 5;
  }
  p{
    text-align: left;
    margin-left: 20px;
  }
  }
.right{
  background: rgb(218, 214, 214);
  min-height: 1000px;
  .content{
    margin-left: 20px;
    p{
      color: rgb(161, 160, 160);
      font-size:20px;
    }
    h3{
      padding-bottom:10px; 
      border-bottom:1px solid gray ;
      width:99%; 
    }
    ul{
      list-style-type:circle;
      li{
        font-size: 20px;
        font-family: "Times New Roman",Georgia,Serif;
      }
    }
  }
}
</style>