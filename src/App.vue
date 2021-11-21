<template>
  <div class="container">
    <GlobalHeader :user="currentUser"></GlobalHeader>
    <!-- <column-list :list="outlist"></column-list> -->
    <form action="">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">email</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          v-model="emailRef.val"
          @blur="validateEmail"
        />
        <div class="form-text" v-if="emailRef.error">
          {{ emailRef.message }}
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密碼</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
//將其中的interface也引入
import ColumnList, { ColumnProps } from "@/components/ColumnList.vue";
import GlobalHeader, { UserProps } from "@/components/GlobalHeader.vue";
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
  },
  setup() {
    const emailRef = reactive({
      val: "",
      error: false,
      message: "",
    });
    const validateEmail = () => {
      if (emailRef.val.trim() === "") {
        emailRef.error = true;
        emailRef.message = "不能為空白";
      } else if (!emailReg.test(emailRef.val)) {
        emailRef.error = true;
        emailRef.message = "email 不符合格式";
      }
    };
    return {
      outlist: testData,
      currentUser,
      emailRef,
      validateEmail,
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
