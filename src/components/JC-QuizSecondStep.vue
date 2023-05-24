<template>
  <div class="second__wrapper">
    <div class="second__content">
      <div class="second__content-title quiz-title">
        <h2>Введите ваши данные</h2>
        <span>Шаг 2 из 3. </span>
        <span>Получите +25% к одобрению, заполнив этот шаг</span>
      </div>
      <div class="second__content__row quiz-input">
        <input placeholder="Ваше имя" type="text" v-model="nameInput"/>
        <input placeholder="ИИН" type="number" v-model="iinInput"/>
        <input type="tel" v-model="phoneNumber" @input="formatPhoneNumber" :placeholder="placeholder" />
        <span class="error" v-show="error === true">Заполните все поля</span>
      </div>
      <div class="second__content__agreement">
        <input type="checkbox" id="agreement" class="checkbox" @change="checked = !checked"/>
        <label for="agreement">Я соглашаюсь на обработку персональных данных</label>
      </div>

      <div class="content-btn">
        <jc-button style="column-gap: 30px" @click="decreaseProgress">
          <template v-slot:img>
            <img src="@/assets/image/svgIcon/arrow-left.svg" alt="arrow">
          </template>
          <template v-slot:text>
            <span>Назад</span>
          </template>
        </jc-button>
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
export default {
  name: "jc-quiz-second-step",
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
    }
  },
  data() {
    return {
      phoneNumber: "",
      nameInput: "",
      iinInput: "",
      error: false,
    };
  },
  computed: {
    placeholder() {
      if (this.phoneNumber.length === 0) {
        return "+" + 7 + " (999)-99-99-99";
      } else {
        return "";
      }
    },
  },
  methods: {
    formatPhoneNumber(event) {
      let digits = this.phoneNumber.replace(/\D/g, "");

      if (digits.charAt(0) !== "7") {
        digits = "7" + digits.slice(1);
      }

      let formattedNumber = "+7 (" + digits.slice(1, 4) + ")-" + digits.slice(4, 6) + "-" + digits.slice(6, 8) + "-" + digits.slice(8, 10);

      this.phoneNumber = formattedNumber;
    },
    increaseProgress() {
      const newProgress = Math.floor(this.progress + 100 / this.numberStep);
      const nextStep = "third";
      this.error = true;
      if(this.nameInput > "" && this.iinInput > 11) {
        this.error = false;
        this.$emit("update-progress", newProgress);
        this.$emit("next-step", nextStep)
      }
    },
    decreaseProgress() {
      const newProgress = Math.ceil(this.progress - 100 / this.numberStep);
      const prevStep = "first";
      this.$emit("decrease-progress", newProgress);
      this.$emit("prev-step", prevStep)
    }
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.second__wrapper {
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  padding: 43px 69px 50px 72px;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, .2);
  border-radius: 70px;
  .second__content {
    &-title {
      margin-bottom: 82px;
    }
    &__row {
      margin-bottom: 32px;
    }
    &__agreement {
      display: flex;
      align-items: center;
      margin-bottom: 80px;
    }
  }
}
</style>