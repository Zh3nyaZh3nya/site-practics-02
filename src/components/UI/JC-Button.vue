<template>
  <button class="animated-button">
    <slot name="img"></slot>
    <slot name="text"></slot>
  </button>
</template>

<script>
export default {
  name: "jc-button"
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
button {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  column-gap: 8px;
  background: $green-color;
  padding: 5px 23px 5px 7px;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  img {
    border-radius: 50px;
    padding: 12px;
    background: #fff;
  }
  span {
    font-size: $small-font-size;
    line-height: $small-line-height;
    color: #fff;
    font-weight: 500;
  }
}
//.animated-button {
//  position: relative;
//  overflow: hidden;
//}
//
//.animated-button img, .animated-button span {
//  transition: transform 0.3s ease-out;
//  position: relative;
//}
//
//.animated-button:hover img {
//  transform: translate(390%);
//}
//.animated-button:hover span {
//  transform: translate(-25%);
//}
</style>