<template>
  <ul class="row">
    <li class="col-4" v-for="column in getColumnProps" :key="column.id">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img
            :src="column.avatar"
            :alt="column.title"
            class="rounded-circle border border-light w-25 my-3"
          />
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text text-left">{{ column.description }}</p>
          <router-link
            :to="`/column/${column.id}`"
            class="btn btn-outline-primary"
            >進入專欄</router-link
          >
        </div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
//撰寫對應屬性
export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}

export default defineComponent({
  name: "ColumnList",
  props: {
    list: {
      // 希望這個 list Array 是 ColumnProps 的形式
      type: Array as PropType<ColumnProps[]>,
      required: true,
    },
  },
  setup(props) {
    //創立新的陣列
    const getColumnProps = computed(() => {
      //使用map重新組合陣列
      return props.list.map((column) => {
        if (!column.avatar) {
          column.avatar = require("@/assets/avatar.jpg");
        }
        return column;
      });
    });
    return { getColumnProps };
  },
});
</script>

<style>
</style>
