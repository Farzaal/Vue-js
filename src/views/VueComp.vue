
    <template>
      <div class="lottie-player-parent">
        <div class="lottie-player">Lottie Player</div>
        <button class="change-page-wrapper" @click="onFrameButton1Click">
          <div class="change-page">Change Page</div>
        </button>
        <button class="open-url-external-wrapper" @click="onFrameButton2Click">
          <div class="open-url-external">Open URL External</div>
        </button>
      </div></template>
      <script lang="ts">
      
      import { defineComponent } from 'vue'
      import router from "../router/index";
      
      export default defineComponent({
        name: "FrameComponent",
        methods: {
          onFrameButton1Click() {
            router.push("/frame-6");
          },
          onFrameButton2Click() {
            window.location.href = "https://locofy.ai";
          }
        }
      })
      </script>
      <style scoped>.lottie-player {
  position: absolute;
  top: 71px;
  left: 50px;
  font-weight: 600;
  }
  .change-page {
  position: absolute;
  top: 14px;
  left: 144px;
  font-size: 20px;
  font-weight: 600;
  font-family: Inter;
  color: #fff;
  text-align: left;
  }
  .change-page-wrapper {
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: #22c1e3;
  position: absolute;
  top: 233px;
  left: 53px;
  width: 416px;
  height: 52px;
  overflow: hidden;
  }
  .open-url-external {
  position: absolute;
  top: 15px;
  left: 116px;
  font-size: 20px;
  font-weight: 600;
  font-family: Inter;
  color: #fff;
  text-align: left;
  }
  .open-url-external-wrapper {
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: #2a79c2;
  position: absolute;
  top: 318px;
  left: 56px;
  width: 413px;
  height: 53px;
  overflow: hidden;
  }
  .lottie-player-parent {
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 797px;
  overflow: hidden;
  text-align: left;
  font-size: 20px;
  color: #000;
  font-family: Inter;
  }
  
  </style>