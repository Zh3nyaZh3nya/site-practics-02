<template>
  <div class="first container">
    <div class="first__content row">
      <div class="first__content-title quiz-title">
        <h2>Рассчитать стоимость</h2>
        <span>Шаг 1 из 3.</span>
      </div>
      <div class="first__content__column row">
        <div class="first__content__column__left col-6">
          <div
              class="first__content__column__left-inputs"
              v-for="input in inputRange"
              :key="input.id"
          >
            <div class="first__content__column__left-inputs-title">
              <span>{{ input.title }}</span>
              <span>{{ formatNumber(input.value) }}</span>
              <span>{{ input.postFix }}</span>
            </div>
            <slider
                :min="input.min"
                :max="input.max"
                :step="input.step"
                :tooltips="false"
                v-model="input.value"
            />
            <div class="first__content__column__left-inputs-subtitle">
              <span>{{ formatNumber(input.value) }}</span>
              <span>{{ formatNumber(input.max) }}</span>
            </div>
          </div>
          <span class="error" v-show="this.error === true">Укажите цену и срок займа</span>
        </div>
        <div class="first__content__column__right col-6">
          <div class="first__content__column__right__calc">
            <div class="first__content__column__right__calc__pay">
              <span>Ежемесячный платеж: </span>
              <span>{{ formatNumber(getInfoPay) }} ₸</span>
            </div>
            <div class="first__content__column__right__calc__insurance">
              <span>Страховка от несчастного случая: <br /> </span>
              <span>{{ formatNumber(getInfoInsurance) }} ₸</span>
            </div>
          </div>
        </div>
      </div>
      <div class="first__content-btn">
        <jc-button style="column-gap: 30px" @click="increaseProgress">
          <template v-slot:img>
            <img src="@/assets/image/svgIcon/arrow-right.svg" alt="arrow">
          </template>
          <template v-slot:text>
            <span>Далее</span>
          </template>
        </jc-button>
      </div>
      <div class="quiz__progress">
        <div class="quiz__progress-title">
          <span>ГОТОВО</span>
          <span>{{progress}}%</span>
        </div>
        <div class="quiz__progress-line">
          <div class="quiz__progress-line-width" :style="{ width: progress + '%' }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from '@vueform/slider'
export default {
  name: "jc-quiz-first-step",
  components: {Slider},
  props: {
    progress: {
      type: Number,
      default: 0,
    },
    numberStep: {
      type: Number,
      default: 0,
    },
    currentStep: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      error: false,
      selectedAmount: [],
      inputRange: [
        {
          id: 1,
          title: "Стоимость авто: ",
          postFix: " ₸",
          info: "",
          min: 300_000,
          max: 15_000_000,
          step: 150_000,
          value: 300_000,
        },
        {
          id: 2,
          title: "Срок займа: ",
          postFix: " мес.",
          info: "",
          min: 1,
          max: 84,
          step: 1,
          value: 1,
        },
      ],
    }
  },
  computed: {
    getInfoPay() {
      const [minPrice, minTemp] = this.inputRange.map(item => item.value);
      const monthlyPayment = minPrice * 0.89079 / (minTemp + 1.71);
      return Math.floor(monthlyPayment);
    },
    getInfoInsurance() {
      const [minPrice, minTemp] = this.inputRange.map(item => item.value);
      const insurance = minPrice * 5.73;
      return Math.round(insurance);
    },
  },
  methods: {
    formatNumber(number) {
      return Number(number).toLocaleString("ru-RU");
    },
    increaseProgress() {
      const newProgress = Math.floor(this.progress + 100 / this.numberStep);
      const nextStep = "second";
      this.error = true;
      if(this.getInfoPay > 0 && this.getInfoInsurance > 0) {
        this.error = false;
        this.selectedAmount = this.inputRange.map(item => item.value);
        this.$emit("selected-amount", this.selectedAmount);
        this.$emit("next-step", nextStep);
        this.$emit("update-progress", newProgress);
      }
    },
  },
}
</script>

<style src="@vueform/slider/themes/default.css"></style>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.first {
  padding: 45px 66px 50px 67px;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, .2);
  border-radius: 70px;
  .first__content {
    &-title {
      margin-bottom: 26px;
    }
    &__column {
      &__left {
        &-inputs {
          &-title {
            margin-bottom: 15px;
            span {
              font-size: $small-font-size;
              line-height: $small-line-height;
            }
          }
          .slider-target {
            height: 20px;
            margin-bottom: 16px;
            .slider-base {
              .slider-origin {
                .slider-handle {
                  width: 30px;
                  height: 30px;
                  right: -25px;
                }
              }
            }
          }
          &-subtitle {
            display: flex;
            justify-content: space-between;
            margin-bottom: 37px;
            span {
              font-size: $tiny-font-size;
              line-height: $tiny-line-height - 1px;
              font-weight: 300;
            }
          }
        }
      }
      &__right {
        padding: 53px 43px 40px 98px;
        &__calc {
          span {
            font-size: $small-font-size;
            line-height: $small-line-height;
          }
          span:last-child {
            color: $green-color;
          }
          &__pay {
            margin-bottom: 36px;
          }
          &__insurance {
            span {
              line-height: $small-line-height + 4px;
            }
          }
        }
      }
    }
    &-btn {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 31px;
    }
  }
}
.slider-connect {
  background: linear-gradient(90.62deg, #126F70 0%, #106E3E 48.44%, #8EBF0D 100%);
}
</style>