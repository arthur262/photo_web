/* eslint-disable */
<template>
  <div>
      
    <div class="container shadow_lisght" ref="nav_box">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        router
      >
        <el-menu-item index="/Home">
         
              <el-icon :size="25" v-if="activeIndex == '/Home'"
            ><home-filled/></el-icon>
              二手出售
              
        </el-menu-item>

        <el-menu-item index="/School">
          <span v-if="activeIndex == '/School'">
            <svg
              t="1650050856113"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2828"
              width="25"
              height="25"
            >
              <path
                d="M947.4 512H710.1c-3.3 0-6-2.7-6-6V140.4c0-6.6-5.4-12-12-12H269c-6.6 0-12 5.4-12 12V314c0 3.3-2.7 6-6 6H76.2c-6.6 0-12 5.4-12 12v616c0 6.6 5.4 12 12 12h871.2c6.6 0 12-5.4 12-12V524c0-6.6-5.4-12-12-12z m-691.2-69.9c0 3.3-2.7 6-6 6h-52c-3.3 0-6 2.7-6 6v52c0 3.3 2.7 6 6 6h52c3.3 0 6 2.7 6 6V570c0 3.3-2.7 6-6 6h-52c-3.3 0-6 2.7-6 6v52c0 3.3 2.7 6 6 6h52c3.3 0 6 2.7 6 6v51.9c0 3.3-2.7 6-6 6h-52c-3.3 0-6 2.7-6 6v52c0 3.3 2.7 6 6 6h52c3.3 0 6 2.7 6 6V890c0 3.3-2.7 6-6 6h-116c-3.3 0-6-2.7-6-6V390c0-3.3 2.7-6 6-6h116c3.3 0 6 2.7 6 6v52.1zM640.1 890c0 3.3-2.7 6-6 6h-83.3c-3.3 0-6-2.7-6-6V773.9c0-3.3 2.7-6 6-6h19.3c3.3 0 6-2.7 6-6v-52c0-3.3-2.7-6-6-6h-180c-3.3 0-6 2.7-6 6v52c0 3.3 2.7 6 6 6h20.7c3.3 0 6 2.7 6 6V890c0 3.3-2.7 6-6 6H327c-3.3 0-6-2.7-6-6V198.4c0-3.3 2.7-6 6-6h307.1c3.3 0 6 2.7 6 6V890z m255.3 0c0 3.3-2.7 6-6 6H710.1c-3.3 0-6-2.7-6-6v-52.3c0-3.3 2.7-6 6-6h116c3.3 0 6-2.7 6-6v-52c0-3.3-2.7-6-6-6h-116c-3.3 0-6-2.7-6-6v-51.8c0-3.3 2.7-6 6-6h116c3.3 0 6-2.7 6-6v-52c0-3.3-2.7-6-6-6h-116c-3.3 0-6-2.7-6-6V582c0-3.3 2.7-6 6-6h179.2c3.3 0 6 2.7 6 6v308z"
                p-id="2829"
              ></path>
              <path
                d="M390.1 320h52c3.3 0 6-2.7 6-6v-52c0-3.3-2.7-6-6-6h-52c-3.3 0-6 2.7-6 6v52c0 3.3 2.7 6 6 6z m128 0h52c3.3 0 6-2.7 6-6v-52c0-3.3-2.7-6-6-6h-52c-3.3 0-6 2.7-6 6v52c0 3.3 2.7 6 6 6z m-128 106.6h52c3.3 0 6-2.7 6-6v-52c0-3.3-2.7-6-6-6h-52c-3.3 0-6 2.7-6 6v52c0 3.3 2.7 6 6 6z m128 0h52c3.3 0 6-2.7 6-6v-52c0-3.3-2.7-6-6-6h-52c-3.3 0-6 2.7-6 6v52c0 3.3 2.7 6 6 6z m-128 106.7h52c3.3 0 6-2.7 6-6v-52c0-3.3-2.7-6-6-6h-52c-3.3 0-6 2.7-6 6v52c0 3.3 2.7 6 6 6z m128 0h52c3.3 0 6-2.7 6-6v-52c0-3.3-2.7-6-6-6h-52c-3.3 0-6 2.7-6 6v52c0 3.3 2.7 6 6 6z m-75.9 42.6h-52c-3.3 0-6 2.7-6 6v52c0 3.3 2.7 6 6 6h52c3.3 0 6-2.7 6-6v-52c0-3.3-2.7-6-6-6z m128 0h-52c-3.3 0-6 2.7-6 6v52c0 3.3 2.7 6 6 6h52c3.3 0 6-2.7 6-6v-52c0-3.3-2.7-6-6-6z"
                p-id="2830"
              ></path>
            </svg>
          </span>
          大学
        </el-menu-item>

        <el-menu-item index="/Rental">
          <span v-if="activeIndex == '/Rental'">
            <el-icon :size="25"><school /></el-icon>
          </span>
          租房
        </el-menu-item>

        <el-menu-item index="/Back&Covid">
          <span v-if="activeIndex == '/Back&Covid'">
            <svg
              t="1650051201827"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3894"
              width="25"
              height="25"
            >
              <path
                d="M710.684108 957.190385c-1.619894 0-3.248997-0.191358-4.860704-0.582261-7.05058-1.714038-12.676717-7.013741-14.806217-13.947663L574.782905 564.385091 435.985746 682.001859l1.680269 204.552769c0.044002 5.451152-2.076288 10.69969-5.898337 14.58723l-34.361599 34.976606c-4.898567 4.986571-11.995195 7.14677-18.839067 5.730515-6.845918-1.414209-12.504802-6.206352-15.027252-12.726859l-74.372871-192.261838-199.609177-85.742826c-6.227842-2.675946-10.738575-8.245801-12.059664-14.894222-1.321088-6.64842 0.716314-13.519921 5.448082-18.374486l34.223452-35.101449c4.117784-4.221138 9.865695-6.465249 15.738449-6.186909l209.368448 10.253528 117.92376-144.683217L79.288834 321.166697c-6.809079-2.164293-12.009522-7.703449-13.735839-14.635325-1.728364-6.931876 0.264013-14.263865 5.26184-19.36914l65.386196-66.780963c4.374634-4.466732 10.543124-6.696516 16.762779-6.078439l469.724151 47.295166 133.106554-133.416616c53.017494-53.638641 103.833857-62.058404 129.411395-62.058404 0.12689 0 0.252757 0 0.379647 0 23.74275 0 44.731784 7.024997 56.20407 18.49626 27.703969 27.702945 26.328645 106.726743-48.302099 182.862771-0.052189 0.054235-0.104377 0.155543-0.158612 0.207731L759.046582 401.75513l37.570687 466.417849c0.477884 5.939269-1.641383 11.800767-5.810333 16.055674l-65.425082 66.781986C721.463616 955.008696 716.145493 957.190385 710.684108 957.190385zM585.288167 507.941568c1.933025 0 3.877307 0.271176 5.780657 0.829901 6.636141 1.943258 11.852956 7.090489 13.884218 13.701047l115.239628 375.038652 34.655288-35.372625-37.58092-466.543715c-0.484024-6.02011 1.699712-11.9471 5.973038-16.21224l140.944056-140.691299c34.582633-35.310204 46.758953-66.294892 50.881854-86.074378 5.081739-24.379247-0.685615-36.917818-2.385327-38.714743-7.572466-7.455809-65.029062-19.966751-127.676891 43.456744-0.026606 0.027629-0.054235 0.056282-0.082888 0.083911L644.895753 297.589722c-4.366448 4.370541-10.466376 6.550183-16.616446 5.92699l-469.596238-47.279816-35.077913 35.826973 377.883443 120.004141c6.493901 2.064009 11.544941 7.203052 13.490246 13.732769 1.947352 6.52767 0.534166 13.594623-3.767813 18.874883L367.604332 620.871593c-4.130064 5.069459-10.41828 7.860015-16.95516 7.553023l-210.489992-10.307763-6.839779 7.014764 180.036399 77.333296c5.083785 2.183735 9.072633 6.323009 11.069103 11.482519l65.98483 170.579003 6.03853-6.145977-1.688455-205.676359c-0.050142-6.106068 2.613524-11.918447 7.272637-15.865339l169.95274-144.018068C575.747883 509.629 580.477604 507.941568 585.288167 507.941568z"
                p-id="3895"
              ></path>
            </svg>
          </span>
          回国&疫情
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
import "@/css/shadow.css";
import {is_phone}from "@/js/phone_test.js"
import { ref } from "vue";

export default {
  data() {
    return {
      activeIndex: "/Home",
    };
  },
  setup: function (){
    const nav_box=ref(null);
    const getDom = () => {
      nav_box.value.style = "padding:1.5ch 2ch";
    };  
    return { nav_box, getDom};
  },
  mounted: function (){
    
    this.testwidth();
  },
  methods: {
    handleSelect(keyPath) {
      this.activeIndex = keyPath;
    },
    testwidth(){
      
      if(is_phone()){
        this.getDom();
      }

      // 因为存在/home/poster?xxx的情况,所以检测存在一个就直接return
      this.activeIndex="/Home";
      const temp1=window.location.hash.split("/");
      for(var i=0;i<temp1.length;i++){
        var element=temp1[i];
        if(element=="Home"){this.activeIndex="/"+element;return}
        if(element=="School"){this.activeIndex="/"+element;return}
        if(element=="Rental"){this.activeIndex="/"+element;return}
        if(element=="Back&Covid"){this.activeIndex="/"+element;return}
      }
        
      
    }
    

  },
};
</script>

<style lang="less" scoped>
.container {
  width: fit-content;
  border-radius: 1.5ch;
  padding: 1.5ch 6ch;
}
</style>
