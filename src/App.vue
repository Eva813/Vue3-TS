<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">郵件地址</label>
        <validate-input
          :rules="emailRules"
          v-model="emailVal"
          placeholder="請輸入電子郵件"
          type="text"
          ref="inputRef"
        >
          {{ emailVal }}
        </validate-input>
      </div>
      <div class="mb-3">
        <label class="form-label">密碼</label>
        <validate-input
          :rules="passwordRules"
          v-model="passwordVal"
          type="password"
          placeholder="請輸入密碼"
        >
          {{ emailVal }}
        </validate-input>
      </div>
      <template v-slot:submit>
        <span class="btn btn-danger">Submit</span>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
//將其中的interface也引入
import ColumnList, { ColumnProps } from "@/components/ColumnList.vue";
import GlobalHeader, { UserProps } from "@/components/GlobalHeader.vue";
import ValidateInput, { RulesProp } from "./components/ValidateInput.vue";
import ValidateForm from "./components/ValidateForm.vue";

const emailReg =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const currentUser: UserProps = {
  isLogin: true,
  name: "Eva",
};

const testData: ColumnProps[] = [
  {
    id: 1,
    title: "test1的專欄",
    description: "這是的test1專欄，有一段非常有意思的簡介，可以更新一下喔！",
    avatar:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100",
  },
  {
    id: 2,
    title: "test2的專欄",
    description: "这是的test2專欄，有興趣就來看看",
    //avatar: "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100",
  },
  {
    id: 3,
    title: "test3的專欄",
    description: "這是的test3專欄，有一段非常有意思的簡介，可以更新一下喔！",
    avatar:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100",
  },
  {
    id: 4,
    title: "test4的專欄",
    description: "這是的test4專欄，有一段非常有意思的簡介，可以更新一下喔！",
    avatar:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100",
  },
  {
    id: 5,
    title: "test5的專欄",
    description: "這是的test5專欄，有一段非常有意思的簡介，可以更新一下喔！",
    avatar:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100",
  },
];

export default defineComponent({
  name: "App",
  components: {
    // ColumnList,
    GlobalHeader,
    ValidateInput,
    ValidateForm,
  },
  setup() {
    const inputRef = ref<any>();
    const emailVal = ref("");
    const emailRules: RulesProp = [
      { type: "required", message: "電子郵件為必填" },
      { type: "email", message: "請輸入正確的格式" },
    ];
    //原本的驗證方式：
    // const emailRef = reactive({
    //   val: "",
    //   error: false,
    //   message: "",
    // });
    // const validateEmail = () => {
    //   if (emailRef.val.trim() === "") {
    //     emailRef.error = true;
    //     emailRef.message = "can not be empty";
    //   } else if (!emailReg.test(emailRef.val)) {
    //     emailRef.error = true;
    //     emailRef.message = "should be valid email";
    //   }
    // };
    const passwordVal = ref("");
    const passwordRules: RulesProp = [
      { type: "required", message: "密碼不能為空" },
    ];
    const onFormSubmit = (result: boolean) => {
      console.log("1234", result);
    };
    return {
      outlist: testData,
      currentUser,
      emailRules,
      emailVal,
      passwordVal,
      passwordRules,
      onFormSubmit,
      inputRef,
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
