<template>
  <div class="column-detail-page w-75 mx-auto">
    <div
      class="column-info row mb-4 border-bottom pb-4 align-items-center"
      v-if="column"
    >
      <div class="col-3 text-center">
        <img
          :src="column.avatar"
          :alt="column.title"
          class="rounded-circle border"
        />
      </div>
      <div class="col-9">
        <h4>{{ column.title }}</h4>
        <p class="text-muted">{{ column.description }}</p>
      </div>
    </div>
    <post-list :list="list"></post-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { testData, testPosts } from "../testData";
import PostList from "../components/PostList.vue";

export default defineComponent({
  components: {
    PostList,
  },
  setup() {
    const route = useRoute();
    const currentId = +route.params.id; //原本的route.params.id 是字串，要在前面加上'+' 將它轉為數值
    const column = testData.find((columnItem) => columnItem.id === currentId);
    //將 column 和 post 聯繫起來
    const list = testPosts.filter((post) => post.columnId === currentId);
    return {
      column,
      list,
    };
  },
});
</script>

