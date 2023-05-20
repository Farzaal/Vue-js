<template>
  <div class="drawer-parent" data-animate-on-scroll>
    <b class="drawer">Drawer</b>
    <input class="frame-child" type="text" />
    <select class="car-parent">
      <option value="Honda">car</option>
      <option value="CD 70">bike</option>
      <option value="Shehzore">truck</option>
    </select>
    <input class="frame-item" type="file" />
    <div class="submit-wrapper">
      <b class="submit">Submit</b>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "FrameComponent1",
  data() {
    return { observer: null };
  },

  mounted() {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            this.observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      this.observer.observe(scrollAnimElements[i]);
    }
  },
  beforeUnmount() {
    this.observer.disconnect();
  },

  props: { onClose: { type: Function } },
});
</script>
<style scoped>
.drawer {
  position: absolute;
  top: 29px;
  left: 109px;
}
.frame-child {
  border: none;
  background-color: #f3f3f3;
  position: absolute;
  top: 76px;
  left: 39px;
  width: 210px;
  height: 30px;
  overflow: hidden;
}
.car-parent {
  position: absolute;
  top: 124px;
  left: 39px;
  background-color: #f3f3f3;
  width: 210px;
  height: 30px;
  overflow: hidden;
}
.frame-item {
  position: absolute;
  top: 177px;
  left: 39px;
  background-color: #f3f3f3;
  width: 210px;
  height: 30px;
  overflow: hidden;
}
.submit {
  position: absolute;
  top: 6px;
  left: 79px;
  display: inline-block;
  width: 74px;
}
.submit-wrapper {
  position: absolute;
  top: 236px;
  left: 39px;
  background-color: #297fe2;
  width: 210px;
  height: 32px;
  overflow: hidden;
  font-size: 16px;
  color: #fff;
}
.drawer-parent {
  position: relative;
  background-color: #fff;
  width: 289px;
  height: 100%;
  overflow: hidden;
  opacity: 0;
  max-width: 90%;
  text-align: left;
  font-size: 20px;
  color: #000;
  font-family: Inter;
}
.drawer-parent.animate {
  animation: 0.25s ease 0s 1 normal forwards slide-in-left;
}

@keyframes slide-in-left {
  0% {
    transform: translateX(-200px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
