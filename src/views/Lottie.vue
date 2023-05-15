<template>
<div class="lottie-player-parent">
    <div class="lottie-player">Lottie Player</div>
    <div class="scroll-into-view-wrapper">
        <div class="scroll-into-view">Scroll Into View</div>
    </div>
    <button class="change-page-wrapper" @click="onFrameButtonClick">
        <div class="change-page">Change Page</div>
    </button>
    <button class="open-url-external-wrapper" @click="onFrameButton1Click">
        <div class="open-url-external">Open URL External</div>
    </button>
    <lottie-player class="frame-child" autoplay src="https://dat20jvqpp4ts.cloudfront.net/644d46164250c881b54e4b35/4d5890db-01b9-4c56-9774-5bdb657ee9e3_1684156862143928889?Expires=-62135596800&Signature=lqWZzAJqEVbWKEDQveRuh5HeqRrxbUlj89S51rSOYeuzGevs5pwZiLkdLtohkDHRlF509Q0ssmY3bSrXgR6Jrboo4aYrb2gcPsfREubRJ~iroK2t6Ko24sJQb~-MfPQgx1z0RdoI5cBcXQe5BHnlc2Z-Tc9l~ZCiYPmzSqXiWh4RH~8oK4iRL5zjVLl~ml2mkcaYO4f6zG4VZNtjPh3kwiab9gOAM4jYqgL5ApTzTXpBtbzE5wmUO7peX6dAKUJuI97vruykzeMDKMi4trWgIhSitXLIs~fjMW8Dz0Y5Z9zJ~ko1biOlYIx1ZifqvjKKYqO-9csdSJ~3HqSQqJgVow__&Key-Pair-Id=K2EOYUP2MYY488" speed="1" loop controls />
    <lottie-player class="frame-item" autoplay src="https://dat20jvqpp4ts.cloudfront.net/644d46164250c881b54e4b35/a09758a8-8488-4450-be04-6378016bab4c_1683897893812642790?Expires=-62135596800&Signature=mIbpTfu4VU1OWT46m5j6MrDk2vAj9XkGIQiRKqFxrm12YW8Ohu07Ql6XG4kUIr9yiSKZm1gWxd3lSX0oRTPJFxBcNaLXg85vHBYn6lHBGnFoad0-ac9jVotGVcLBb14XQSKvOpGUoCUSt5S5bbTBa-snLfQnrJj-yIAqTC34Ik3ghtv5pH1baZpHm8V9tYDArWd1Ujy~7PySB0owJ5IfzVbKATW0TzxDRXCQXfJneDhOErMeobx16-qLh0jzaqVhtqT7qh5KgsnQ5kovqeI~f6E9hYJqtV8wGyTQTH0JMIlXDuT0-062hMKcP5kfhIOLZ0E0ceUK42FBcIxGTRQ29g__&Key-Pair-Id=K2EOYUP2MYY488" speed="1" loop controls />
</div>
</template>

      
<script lang="ts">
import { defineComponent } from 'vue'
import "@lottiefiles/lottie-player";
import router from "../router/index";

export default defineComponent({
    name: "FrameComponent",
    methods: {
        onFrameButtonClick() {
            router.push("/frame-6");
        },
        onFrameButton1Click() {
            window.location.href = "https://locofy.ai";
        }
    }
})
</script>
      
<style scoped>
.lottie-player {
    position: absolute;
    top: 71px;
    left: 50px;
    font-weight: 600;
}

.scroll-into-view {
    position: absolute;
    top: 19px;
    left: 134px;
    font-weight: 600;
}

.scroll-into-view-wrapper {
    position: absolute;
    top: 139px;
    left: 51px;
    background-color: #7574cc;
    width: 418px;
    height: 61px;
    overflow: hidden;
    color: #fff;
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

.frame-child {
    position: absolute;
    top: 430px;
    left: 58px;
    background-color: #f8f8f8;
    width: 411px;
    height: 154px;
    overflow: hidden;
}

.frame-item {
    position: absolute;
    top: 628px;
    left: 56px;
    background-color: #f8f8f8;
    width: 411px;
    height: 154px;
    overflow: hidden;
}

.lottie-player-parent {
    position: relative;
    background-color: #fff;
    width: 100%;
    height: 1033px;
    overflow: hidden;
    text-align: left;
    font-size: 20px;
    color: #000;
    font-family: Inter;
}
</style>
