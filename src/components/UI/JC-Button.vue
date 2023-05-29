<template>
  <div class="animated-button">
    <button>
      <slot name="text"></slot>
      <slot name="img"></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "jc-button"
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.animated-button {
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    column-gap: 16px;
    background: $green-color;
    padding: 5px 7px 5px 23px;
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
}
.animated-button.left {
  button {
    padding: 5px 23px 5px 7px;
  }
  img {
    order: -1;
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