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
import { defineComponent, onUnmounted } from "vue";
import mitt from "mitt";
// 建立 emitter ，可導出供其他元件使用
type Events = {
  "form-item-created": ValidateFunc;
};
export const emitter = mitt<Events>();
type ValidateFunc = () => boolean;
export default defineComponent({
  emits: ["form-submit"],
  setup(props, context) {
    let funcArr: ValidateFunc[] = [];
    const submitForm = () => {
      const result = funcArr.map((func) => func()).every((result) => result);
      //第二個是拿到最終的驗證並觸發事件
      context.emit("form-submit", result);
      console.log(result);
    };
    //創立一個事件的回調函式
    // test 發送一系列測試訊息
    const callback = (func: ValidateFunc) => {
      funcArr.push(func);
      //console.log(funcArr);
    };
    //使用 on 將它加入監聽器中
    emitter.on("form-item-created", callback);
    onUnmounted(() => {
      emitter.off("form-item-created", callback);
      //將陣列清空
      funcArr = [];
    });
    return {
      submitForm,
    };
  },
});
</script>
