<template>
  <div>
    <Teleport to="body">
      <div
        class="portalPopupOverlay"
        :style="drawerStyle"
        @click="onOverlayClick"
      >
        <slot></slot>
      </div>
    </Teleport>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, Teleport } from "vue";
import type * as CSS from "csstype";

export default defineComponent({
  name: "PortalDrawer",
  props: {
    isOpen: { type: Boolean, default: false },
    overlayColor: { type: String },
    placement: { type: String, default: "Centered" },
    zIndex: { type: Number, default: 100 },
    left: { type: Number, default: 0 },
    right: { type: Number, default: 0 },
    top: { type: Number, default: 0 },
    bottom: { type: Number, default: 0 },
    onOutsideClick: { type: Function },
  },
  methods: {
    onOverlayClick(e) {
      if (
        this.onOutsideClick &&
        e.target.classList.contains("portalPopupOverlay")
      ) {
        this.onOutsideClick();
      }
      e.stopPropagation();
    },
  },
  computed: {
    drawerStyle() {
      const style: CSS.Properties = {};
      style.zIndex = this.zIndex;

      if (this.overlayColor) {
        style.backgroundColor = this.overlayColor;
      }

      switch (this.placement) {
        case "Left":
          style.alignItems = "flex-start";
          break;
        case "Right":
          style.alignItems = "flex-end";
          break;
        case "Top":
          style.alignItems = "center";
          break;
        case "Bottom":
          style.alignItems = "center";
          style.justifyContent = "flex-end";
          break;
      }

      return style;
    },
  },
});
</script>
<style scoped>
.portalPopupOverlay {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
