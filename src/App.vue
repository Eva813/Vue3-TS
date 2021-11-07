<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>{{ count }}</h1>
    <h1>{{ double }}</h1>
    <h1>{{ greetings }}</h1>
    <h1>X: {{ x }}, Y: {{ y }}</h1>
    <ul>
      <li v-for="number in numbers" :key="number">
        <h1>{{ number }}</h1>
      </li>
    </ul>
    <h1>{{ person.name }}</h1>
    <button @click="increase">👍+1</button>
    <button @click="updateGreeting">Update Title</button>
  </div>
</template>

<script lang="ts">
import {
  ref,
  computed,
  reactive,
  toRefs,
  watch,
  onMounted,
  onUnmounted,
} from "vue";
import useMouseTracker from "@/hooks/useMouseTracker";
interface DataProps {
  count: number;
  double: number;
  increase: () => void;
  numbers: number[];
  person: { name?: string };
}

export default {
  name: "App",
  setup() {
    // const count = ref(0);
    // const increase = () => {
    //   count.value++;
    // };
    // const double = computed(() => {
    //   return count.value * 2;
    // });

    const greetings = ref("");
    const updateGreeting = () => {
      greetings.value += "Hello! ";
    };
    const { x, y } = useMouseTracker();
    ///滑鼠位置
    // const x = ref(0);
    // const y = ref(0);
    // const updateMouse = (e: MouseEvent) => {
    //   x.value = e.pageX;
    //   y.value = e.pageY;
    // };
    // onMounted(() => {
    //   document.addEventListener("click", updateMouse);
    // });
    // onUnmounted(() => {
    //   document.removeEventListener("click", updateMouse);
    // });

    watch(greetings, (newValue, oldValue) => {
      // console.log("old", oldValue);
      // console.log("new", newValue);
      document.title = "updated" + greetings.value;
    });
    const data: DataProps = reactive({
      count: 0,
      increase: () => {
        data.count++;
      },
      double: computed(() => {
        return data.count * 2;
      }),
      numbers: [0, 1, 2],
      person: {},
    });
    //修改陣列的第一個數值
    data.numbers[0] = 5;
    //替物件新增內容
    data.person.name = "viking";

    const refData = toRefs(data);
    return {
      // ...data,
      ...refData,
      updateGreeting,
      x,
      y,
    };
  },
};

// export default {
//   name: "App",
//   setup() {
//     const count = ref(0);
//     const double = computed(() => {
//       return count.value * 2;
//     });
//     const increase = () => {
//       count.value++;
//     };
//     return {
//       count,
//       increase,
//       double,
//     };
//   },
// };

// export default {
//   data() {
//     return {
//       count: 0,
//     };
//   },
//   methods: {
//     increase() {
//       this.count++;
//     },
//   },
// };
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
