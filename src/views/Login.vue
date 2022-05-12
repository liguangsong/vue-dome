<template>
  <div class="login">
    <div class="login-left">
      <img src="../assets/login-left.png" alt />
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      formLayout: "horizontal",
      form: {
        phone: "",
        password: ""
      },
    };
  },
  mounted() {},
  methods: {
    handleSubmit(e) {
    }
  }
};
</script>
<style lang="less" scoped>

</style>