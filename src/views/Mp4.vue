<template>
  <div class="Mp4">
    <!-- <iframe class="iframe" frameborder="0" src="https://baidu.com" style="width:100%;height:100%;"></iframe> -->
    <iframe class="iframe" frameborder="0" src="https://z1.m1907.cn/" height="100%" width="100%"></iframe>
  </div>
</template>
<script type="text/javascript">
window.onerror = function () {
  return true
}

</script>
<script>
export default {
  created () {
    $('.Mp4').height(this.window.outerHeight + 'px')
  }
}
</script>

<style lang="less" scoped>
.Mp4{
  height: 100%
}
.iframe{
  margin:0;
  padding:0;
  overflow-y:hidden
}
</style>
