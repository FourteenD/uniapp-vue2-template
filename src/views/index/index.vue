<template>
  <view>
    首屏
    <u-button @click="go">GO</u-button>
  </view>
</template>

<script>
export default {
  name: "Index",
  props: {},
  data() {
    return {};
  },
  onInit() {
    console.log("onInit:面初始化");
  },
  onShow() {
    console.log("onShow:页面显示");
  },
  onLoad() {
    console.log("onLoad:页面加载");
  },
  onReady() {
    console.log("onReady:面初次渲染完成");
  },
  onHide() {
    console.log("onHide:页面隐藏");
  },
  onUnload() {
    console.log("onUnload:页面卸载");
  },
  beforeCreate() {
    console.log("beforeCreate:组件创建之前");
  },
  created() {
    console.log("created:组件创建完成");
  },
  beforeMount() {
    console.log("beforeMount:组件挂载之前");
  },
  mounted() {
    console.log("mounted:组件挂载完成");
  },
  beforeDestroy() {
    console.log("beforeDestroy:组件销毁之前");
  },
  destroyed() {
    console.log("destroyed:组件销毁完成");
  },
  onPullDownRefresh() {
    console.log("onPullDownRefresh:下拉刷新");
  },
  onReachBottom() {
    console.log("onReachBottom:到达底部");
  },
  methods: {
    go() {
      this.$Router.push("/views/home/index");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
