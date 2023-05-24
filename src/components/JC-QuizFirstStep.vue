<template>
  <div class="first__wrapper">
    <div class="first__content">
      <div class="first__content-title quiz-title">
        <h2>Рассчитать стоимость</h2>
        <span>Шаг 1 из 3.</span>
      </div>
      <div class="first__content__column">
        <div class="first__content__column__left">
          <div class="first__content__column__left-inputs">
            <jc-input-range :inputs="inputRange"/>
            <span class="error" v-show="this.error === true">Укажите цену и срок займа</span>
          </div>
        </div>
        <div class="first__content__column__right">
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
import JcButton from "@/components/UI/JC-Button";
export default {
  name: "jc-quiz-first-step",
  components: {JcButton},
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
      inputRange: [
        {
          id: 1,
          title: "Стоимость авто: ",
          info: "",
          min: 0,
          max: 15_000_000,
          step: 150_000,
          minRange: 0,
        },
        {
          id: 2,
          title: "Срок займа: ",
          info: "",
          min: 1,
          max: 84,
          step: 1,
          minRange: 1,
        },
      ],
    }
  },
  computed: {
    getInfoPay() {
      const [minPrice, minTemp] = this.inputRange.map(item => item.minRange);
      const monthlyPayment = minPrice * 0.89079 / (minTemp + 1.71);
      return Math.floor(monthlyPayment);
    },
    getInfoInsurance() {
      const [minPrice, minTemp] = this.inputRange.map(item => item.minRange);
      const insurance = minPrice * 5.73;
      return Math.round(insurance);
    }
  },
  methods: {
    formatNumber(number) {
      return Number(number).toLocaleString("ru-RU");
    },
    increaseProgress() {
      const newProgress = Math.floor(this.progress + 100 / this.numberStep);
      const nextStep = "second";
      this.error = !this.error;
      if(this.getInfoPay > 0 && this.getInfoInsurance > 0) {
        this.$emit("next-step", nextStep);
        this.$emit("update-progress", newProgress);
      }
    },
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.first__wrapper {
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  padding: 45px 66px 50px 67px;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, .2);
  border-radius: 70px;
  .first__content {
    &-title {
      margin-bottom: 26px;
    }
    &__column {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
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
</style>