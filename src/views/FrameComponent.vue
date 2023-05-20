<template>
  <div class="drawer-component-parent">
    <b class="drawer-component">Drawer Component</b>
    <button class="open-drawer-wrapper" @click="openFrame">
      <b class="open-drawer">Open Drawer</b>
    </button>
    <button class="open-popup-wrapper" @click="openFramePopup">
      <b class="open-drawer">Open Popup</b>
    </button>
    <img class="image-1-icon" alt="" src="/image-1@2x.png" />
    <div class="text-wrapper">
      <b class="text">Text</b>
    </div>
  </div>
  <div v-if="isFrameOpen">
    <PortalDrawer
      overlayColor="rgba(113, 113, 113, 0.3)"
      placement="Left"
      :onOutsideClick="closeFrame"
    >
      <FrameComponent1 :onClose="closeFrame" />
    </PortalDrawer>
  </div>
  <div v-if="isFramePopupOpen">
    <PortalPopup
      overlayColor="rgba(113, 113, 113, 0.3)"
      placement="Centered"
      :onOutsideClick="closeFramePopup"
    >
      <FrameComponent2 :onClose="closeFramePopup" />
    </PortalPopup>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

import FrameComponent1 from "../components/FrameComponent1.vue";
import PortalDrawer from "../components/PortalDrawer.vue";
import FrameComponent2 from "../components/FrameComponent2.vue";
import PortalPopup from "../components/PortalPopup.vue";

export default defineComponent({
  name: "FrameComponent",
  data() {
    return { isFrameOpen: false, isFramePopupOpen: false };
  },

  components: { FrameComponent1, FrameComponent2, PortalPopup, PortalDrawer },

  methods: {
    openFrame() {
      this.isFrameOpen = true;
    },
    closeFrame() {
      this.isFrameOpen = false;
    },
    openFramePopup() {
      this.isFramePopupOpen = true;
    },
    closeFramePopup() {
      this.isFramePopupOpen = false;
    },
  },
});
</script>
<style scoped>
.drawer-component {
  position: absolute;
  top: 41px;
  left: 59px;
}
.open-drawer {
  position: absolute;
  top: 6px;
  left: 36px;
  font-size: 20px;
  font-family: Inter;
  color: #fff;
  text-align: left;
}
.open-drawer-wrapper {
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: #d63dc6;
  position: absolute;
  top: 380px;
  left: 54px;
  width: 196px;
  height: 37px;
  overflow: hidden;
}
.open-popup-wrapper {
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: #d63dc6;
  position: absolute;
  top: 379px;
  left: 268px;
  width: 196px;
  height: 37px;
  overflow: hidden;
}
.image-1-icon {
  position: absolute;
  top: 95px;
  left: 59px;
  width: 576px;
  height: 264px;
  object-fit: cover;
}
.text {
  position: absolute;
  top: 21px;
  left: 142px;
}
.text-wrapper {
  position: absolute;
  top: 17px;
  left: 316px;
  background-color: #d83131;
  width: 313px;
  height: 57px;
  overflow: hidden;
  color: #fff;
}
.drawer-component-parent {
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 449px;
  overflow: hidden;
  text-align: left;
  font-size: 20px;
  color: #000;
  font-family: Inter;
}
</style>
