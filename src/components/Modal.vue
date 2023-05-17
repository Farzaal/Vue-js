<template>
<div>
    <Teleport to="body">
      <div
        class="portalPopupOverlay"
        :style="popupStyle"
        @click="onOverlayClick"
      >
        <div :ref="relContainerRef" :style="relativeStyle">
          <slot></slot>
        </div>
      </div>
    </Teleport>
</div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'Modal',
    data() {
        return {
            relContainerRef: ref(null),
            relativeStyle: { type: "static" }
        }
    },
    props: {
        isOpen: { type: Boolean, default: false },
        overlayColor: { type: String },
        placement: { type: String },
        onOutsideClick: { type: Function }
  },
    },
    mounted() {
      setPosition();
      window.addEventListener("resize", setPosition);
      window.addEventListener("scroll", setPosition, true);
    },
    unmounted() {
      window.removeEventListener("resize", setPosition);
      window.removeEventListener("scroll", setPosition, true);
    },
    methods: {
        closeModal() {
            this.$emit('close')
        },
        onOverlayClick() {
          if (this.onOutsideClick && e.target.classList.contains("portalPopupOverlay")) {
            this.onOutsideClick();
          }
          e.stopPropagation();
        } 
        setPosition() {
            const relativeItem = this.relativeLayerRef?.current?.getBoundingClientRect();
            const containerItem = this.relContainerRef?.current?.getBoundingClientRect();
            const style = {};
            if (relativeItem && containerItem) {
                const {
                    x: relativeX,
                    y: relativeY,
                    width: relativeW,
                    height: relativeH,
                } = relativeItem;
                const { width: containerW, height: containerH } = containerItem;
                style.position = "absolute";
                switch (placement) {
                    case "Top left":
                        style.top = relativeY - containerH - top;
                        style.left = relativeX + left;
                        break;
                    case "Top right":
                        style.top = relativeY - containerH - top;
                        style.left = relativeX + relativeW - containerW - right;
                        break;
                    case "Bottom left":
                        style.top = relativeY + relativeH + bottom;
                        style.left = relativeX + left;
                        break;
                    case "Bottom right":
                        style.top = relativeY + relativeH + bottom;
                        style.left = relativeX + relativeW - containerW - right;
                        break;
                }
                this.relativeStyle = style;
            } else {
                style.maxWidth = "90%";
                style.maxHeight = "90%";
                this.relativeStyle = style;
            }
        }
    },
    computed: {
        popupStyle() {
            const style = {};
            style.zIndex = zIndex;
            if (overlayColor) {
                style.backgroundColor = overlayColor;
            }
            if (!relativeLayerRef?.current) {
                switch (placement) {
                    case "Centered":
                        style.alignItems = "center";
                        style.justifyContent = "center";
                        break;
                    case "Top left":
                        style.alignItems = "flex-start";
                        break;
                    case "Top center":
                        style.alignItems = "center";
                        break;
                    case "Top right":
                        style.alignItems = "flex-end";
                        break;
                    case "Bottom left":
                        style.alignItems = "flex-start";
                        style.justifyContent = "flex-end";
                        break;
                    case "Bottom center":
                        style.alignItems = "center";
                        style.justifyContent = "flex-end";
                        break;
                    case "Bottom right":
                        style.alignItems = "flex-end";
                        style.justifyContent = "flex-end";
                        break;
                }
            }
            return style;
        }
    }
})
</script>

<style>
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
