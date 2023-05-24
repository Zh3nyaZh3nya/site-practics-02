<template>
  <router-view/>
</template>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.component-title {
  font-size: $title-font-size;
  line-height: $title-line-height;
  h2 {
    font-weight: 500;
    display: inline;
  }
  span {
    position: relative;
    &:after {
      position: absolute;
      right: 0;
      z-index: -1;
      bottom: 4px;
      content: "";
      background: url("@/assets/image/svgIcon/line-bottom-title.svg");
      display: block;
      width: 119px;
      height: 14px;
    }
  }
}
</style>