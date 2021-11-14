<template>
  <li class="dropdown-item" :class="{ 'is-disabled': disabled }">
    <slot></slot>
  </li>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DropdownItem",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scope>
/* 用 米字鍵 指出下面的所有元素，因為li中可能會包有其他標籤，要一起都設置同樣的css樣式 */
.dropdown-item.is-disabled * {
  color: rgb(108, 114, 112);
  pointer-events: none;
  background-color: transparent;
}
</style>
