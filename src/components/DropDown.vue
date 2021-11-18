<template>
  <div class="dropdown" ref="dropdownRef">
    <a
      href="#"
      class="btn btn-outline-light my-2 dropdown-toggle"
      @click.prevent="toggleOpen"
    >
      {{ title }}
    </a>
    <ul class="dropdown-menu" :style="{ display: 'block' }" v-if="isOpen">
      <slot></slot>
      <!-- <li class="dropdown-item">
        <a href="#">建立新文章</a>
      </li>
      <li class="dropdown-item">
        <a href="#">編輯資料</a>
      </li> -->
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, watch } from "vue";
import useClickOutside from "@/hooks/useClickOutside";

export default defineComponent({
  name: "DropDown",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const isOpen = ref(false);
    const dropdownRef = ref<null | HTMLElement>(null);
    const toggleOpen = () => {
      isOpen.value = !isOpen.value;
    };
    //宣告變數（取得布林值）
    const isClickOutside = useClickOutside(dropdownRef);
    //需要根據isClickOutside的值，來設置 isOpen 的值
    //在 setup 中以下這段邏輯只能執行一次，更新的話這段語法無法再被執行
    //  if(isOpen.value && isClickOutside.value){
    //    isOpen.value=false;
    //  }
    //所以使用 watch 來監測響應式對象的變化
    watch(isClickOutside, () => {
      if (isOpen.value && isClickOutside.value) {
        isOpen.value = false;
      }
    });

    return {
      isOpen,
      toggleOpen,
      // 返回和 ref 同名的响应式对象，就可以拿到对应的 dom 节点
      dropdownRef,
      isClickOutside,
    };
  },
});
</script>
