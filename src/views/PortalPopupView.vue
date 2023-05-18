<template>
<div>
    <button @click="closeModal">Open Modal</button>
    <div v-if="showModal">
        <PortalPopup 
            overlayColor="rgba(113, 113, 113, 0.3)"
            placement="Centered"
            :isOpen="showModal"
            @close="closeModal"
            :onOutsideClick="true"
        >
            <div class="this-is-a-simple-portal-popup-parent">
            <b class="this-is-a">This is a simple Portal popup</b>
            <button class="x" @click="closeModal">
                x
            </button>
            </div>
        </PortalPopup>
    </div>
</div>
</template>

<script>
import { defineComponent } from 'vue'
import PortalPopup from '../components/PortalPopup.vue'

export default defineComponent({
    name: "PortalPopupView",
    data() {
        return {
            modalOpen: false,
            showModal: false
        }
    },
    components: { PortalPopup },
    methods: {
        closeModal() {
            this.showModal = !this.showModal
        }
    }
})
</script>
<style scoped>
.this-is-a,
.x {
  position: absolute;
  top: 170px;
  left: 74px;
  display: inline-block;
  width: 455px;
}
.x {
  cursor: pointer;
  border: 0;
  padding: 0;
  background-color: transparent;
  top: 0;
  left: 538px;
  font-size: 40px;
  font-family: Inter;
  color: #fb1515;
  text-align: left;
  width: 25px;
}
.this-is-a-simple-portal-popup-parent {
  position: relative;
  background-color: #fff;
  width: 573px;
  height: 488px;
  overflow: hidden;
  max-width: 100%;
  max-height: 100%;
  text-align: center;
  font-size: 40px;
  color: #000;
  font-family: Inter;
}
</style>
