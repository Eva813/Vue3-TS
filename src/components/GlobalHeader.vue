<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <!-- navbar-brand -->
    <router-link class="navbar-brand" to="/">談天說地</router-link>
    <!-- 判斷沒有登入，要顯示的樣子 -->
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item">
        <router-link to="/login" class="btn btn-outline-light my-2"
          >登入</router-link
        >
      </li>
      <li class="list-inline-item">
        <router-link to="/login" class="btn btn-outline-light my-2"
          >註冊</router-link
        >
      </li>
    </ul>
    <!-- 若登入的話 -->
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <DropDown :title="`你好 ${user.name}`">
          <DropItem><a href="#" class="dropdown-item">新建文章</a></DropItem>
          <DropItem disabled
            ><a href="#" class="dropdown-item">編輯資料</a></DropItem
          >
          <DropItem><a href="#" class="dropdown-item">退出</a></DropItem>
        </DropDown>

        <!-- <a href="#" class="btn btn-outline-light my-2">你好 {{ user.name }}</a> -->
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import DropDown from "@/components/DropDown.vue";
import DropItem from "@/components/DropItem.vue";
//組件開立的第一步，建立它的 interface
export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
export default defineComponent({
  name: "GlobalHeader",
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true,
    },
  },
  components: {
    DropDown,
    DropItem,
  },
});
</script>

<style>
</style>
