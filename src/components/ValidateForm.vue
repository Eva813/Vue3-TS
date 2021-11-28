<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["form-submit"],
  setup(props, context) {
    const submitForm = () => {
      //第二個是拿到最終的驗證並觸發事件
      context.emit("form-submit", true);
    };
    return {
      submitForm,
    };
  },
});
</script>
