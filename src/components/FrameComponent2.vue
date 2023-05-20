<template>
  <div class="simple-portal-popup-parent">
    <h3 class="simple-portal-popup">Simple Portal Popup</h3>
    <textarea class="frame-inner" />
    <button class="submit-container">
      <b class="submit1">Submit</b>
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "FrameComponent2",

  props: { onClose: { type: Function } },
});
</script>
<style scoped>
.simple-portal-popup {
  margin: 0;
  position: absolute;
  top: 49px;
  left: 171px;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
}
.frame-inner {
  border: none;
  background-color: #f4f2f2;
  position: absolute;
  top: 111px;
  left: 95px;
  width: 364px;
  height: 118px;
  overflow: hidden;
}
.submit1 {
  position: absolute;
  top: 8px;
  left: 148px;
  font-size: 20px;
  font-family: Inter;
  color: #fff;
  text-align: left;
}
.submit-container {
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: #19271a;
  position: absolute;
  top: 260px;
  left: 94px;
  width: 365px;
  height: 40px;
  overflow: hidden;
}
.simple-portal-popup-parent {
  position: relative;
  background-color: #db1d1d;
  width: 539px;
  height: 333px;
  overflow: hidden;
  max-width: 100%;
  max-height: 100%;
  text-align: left;
  font-size: 20px;
  color: #fff;
  font-family: Inter;
}
</style>
