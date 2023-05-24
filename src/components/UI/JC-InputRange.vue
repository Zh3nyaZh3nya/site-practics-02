<template>
  <div
      class="inputs-range"
      v-for="input in inputs"
      :key="input.id"
  >
    <div class="inputs-range-title">
      <span>{{ input.title }}</span>
      <span>{{ getInfoWithMinRange(input) }}</span>
    </div>
    <div class="input-range">
      <input
          type="range"
          class="custom-input-range"
          :min="input.min"
          :max="input.max"
          :step="input.step"
          v-model="input.minRange"
      />
      <div class="input-range-text">
        <span>{{ formatNumber(input.minRange) }}</span>
        <span>{{ formatNumber(input.max) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "jc-input-range",
  props: {
    inputs: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    getInfoWithMinRange() {
      return function (input) {
        const formattedValue = Number(input.minRange).toLocaleString("ru-RU");

        if (input.title === "Стоимость авто: ") {
          return input.info + formattedValue + " ₸";
        } else if (input.title === "Срок займа: ") {
          return input.info + formattedValue + " мес.";
        } else {
          return "";
        }
      };
    },
  },
  methods: {
    formatNumber(number) {
      return Number(number).toLocaleString("ru-RU");
    },
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.inputs-range {
  &-title {
    margin-bottom: 15px;
    span {
      font-size: $small-font-size;
      line-height: $small-line-height;
    }
    span:last-child {
      color: $green-color;
    }
  }
  .input-range {
    max-width: 515px;
    width: 100%;
    margin-bottom: 37px;
    .custom-input-range {
      -webkit-appearance: none;
      background: #D9D9D9;
      border-radius: 10px;
      width: 100%;
      height: 20px;
      outline: none;
      //background: -webkit-linear-gradient(90.62deg, #126F70 0%, #106E3E 48.44%, #8EBF0D 100%);
      margin-bottom: 17px;
      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        position: relative;
        background: white;
        border: 1px solid #BEBEBE;
        width: 30px;
        height: 30px;
        border-radius: 50px;
        cursor: pointer;
      }
    }
    &-text {
      display: flex;
      justify-content: space-between;
      span {
        font-size: $tiny-font-size;
        line-height: $tiny-line-height;
        font-weight: 300;
      }
    }
  }
}
</style>