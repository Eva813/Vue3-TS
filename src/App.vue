<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <router-view></router-view>
    <footer class="text-center py-4 text-secondary bg-light mt-6">
      <small>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">© 2021專欄</li>
          <li class="list-inline-item">課程</li>
          <li class="list-inline-item">文件</li>
          <li class="list-inline-item">與我聯絡</li>
          <li class="list-inline-item">更多</li>
        </ul>
      </small>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalHeader, { UserProps } from "@/components/GlobalHeader.vue";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";

const currentUser: UserProps = {
  isLogin: false,
  name: "Eva",
};

export default defineComponent({
  name: "App",
  components: {
    // ColumnList,
    GlobalHeader,
    // Home,
    // Login,
  },
  setup() {
    return {
      currentUser,
    };
  },
});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  font-size: 5rem;
}
button {
  font-size: 3rem;
}
</style>
