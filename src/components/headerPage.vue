<template>
  <div class="">
    <img class="img-header mage-parent container-mt-3" src="../../../imagle/logoheader.png" alt="" />
    <div class="header">
      <div class="">
      </div>
    </div>
    <nav class="navbar navbar-expand-sm" text-black>
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav ">
            <li class="nav-item">
              <router-link class="link w-100 text-black" :to="{path:'/'}">Trang Chủ</router-link >
            </li>
            <li class="nav-item">
              <router-link class="link w-100 text-black" :to="{path:'/bieuMau'}">Biểu mẫu</router-link >
            </li>
            <li class="nav-item">
              <router-link class="link w-100 text-black" :to="{path:'/lienHe'}">Liên hệ</router-link >
            </li>
            <li class="nav-item">
              <router-link class="link w-100 text-black" :to="{path:'/dangNhap'}">Đăng nhập</router-link>
            </li>
            <li class="nav-item">
              <router-link class="link w-100 text-black" :to="{path:'/dangKy'}">Đăng ký</router-link>
            </li>
            <!-- <li class="nav-item">
              <router-link class="link w-100 text-black" :to="{path:'/dangKyForm'}">Đăng ký Form</router-link>
            </li> -->
             <!-- <li class="nav-item">
              <router-link class="link w-100 text-black" :to="{path:'/listFormDangKy'}">Danh sách đăng ký </router-link>
            </li> -->
          </ul>
        </div>
      </div>
    </nav> 
  </div>
</template>

<script>

export default {


}
</script>

<style scoped>
  .img-header {
    height: 17%;
    width:100%;
    background-color: #b5e3f7;
  }
  nav{
    background-color: #1269b5;
  }
  .dropdown-menu .dropdown-item  {
    background-color: #1269b5;
  }
  .link {
    padding: 10px;
    text-decoration: none;
  }

</style>