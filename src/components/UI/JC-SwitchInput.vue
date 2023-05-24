<template>
  <div class="switch__input">
    <slot name="text"></slot>
    <input type="checkbox" id="switch" @change="toggleSwitch"/>
    <label for="switch">Toggle</label>
  </div>
</template>

<script>
export default {
  name: "jc-switch-input",
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    toggleSwitch() {
      this.$emit("toggle-switch", this.checked = !this.checked)
    },
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.switch__input {
  h3 {
    font-weight: 400;
    font-size: $tiny-font-size;
  }
  input[type=checkbox]{
    height: 0;
    width: 0;
    visibility: hidden;
    &:checked + label {
      background: $green-color;
    }
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 66px;
    height: 33px;
    background: #fff;
    display: block;
    border-radius: 100px;
    position: relative;
    border: 1px solid #9E9E9E;
    border-radius: 30px;
    &:after {
      content: '';
      position: absolute;
      top: 1px;
      left: 2px;
      width: 29px;
      height: 29px;
      background: #D9D9D9;
      border-radius: 90px;
      transition: 0.3s;
    }
    &:active:after {
      width: 33px;
    }
  }

  input:checked + label:after {
    left: calc(100% - 2px);
    transform: translateX(-100%);
    background: #fff;
  }

}
</style>