<template>
  <div class="second container">
    <div class="second__content row">
      <div class="second__content-title quiz-title">
        <h2>Введите ваши данные</h2>
        <span>Шаг 2 из 3. </span>
        <span>Получите +25% к одобрению, заполнив этот шаг</span>
      </div>
      <div class="second__content__row quiz-input">
        <input
            placeholder="Ваше имя"
            type="text"
            v-model="nameInput"
            :class="{'error-input': error === true}"
        />
        <input
            placeholder="ИИН"
            type="number"
            v-model="iinInput"
            :class="{'error-input': error === true}"
        />
        <input
            type="tel"
            v-model="phoneNumber"
            @input="formatPhoneNumber"
            :placeholder="placeholder"
            :class="{'error-input': error === true}"
        />
        <span class="error" v-show="error === true">Пожалуйста, заполните все обязательные поля</span>
      </div>
      <div class="second__content__agreement">
        <input type="checkbox" id="agreement" class="checkbox"/>
        <label for="agreement">Я соглашаюсь на обработку персональных данных</label>
        <span class="error" v-show="checked === true">Пожалуйста, подтвердите соглашение</span>
      </div>

      <div class="second__content-btn">
        <jc-button class="left" style="column-gap: 30px" @click="decreaseProgress">
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
      checked: false,
      error: false,
      enteredValues: {},
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
      this.iinInput.toString();
      if(this.nameInput === "" || this.iinInput.toString().length < 11 || this.phoneNumber.toString().length < 15 || this.checked == false ) {
        this.error = true;
        this.checked = true;
      } else {
        this.error = false;
        this.checked = false;
        this.enteredValues = {
          phoneNumber: this.phoneNumber,
          nameInput: this.nameInput,
          iinInput: this.iinInput
        };
        this.$emit("entered-values", this.enteredValues)
        this.$emit("update-progress", newProgress);
        this.$emit("next-step", nextStep)
      }
    },
    decreaseProgress() {
      const newProgress = Math.ceil(this.progress - 100 / this.numberStep);
      const prevStep = "first";
      this.enteredValues = {};
      this.$emit("decrease-progress", newProgress);
      this.$emit("prev-step", prevStep)
    }
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.second {
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
      align-items: flex-start;
      margin-bottom: 80px;
      position: relative;
      span {
        position: absolute;
        top: 24px;
      }
    }
    &-btn {
      display: flex;
      justify-content: space-between;
      margin-bottom: 26px;
    }
  }
}
@media (max-width: 769px) {
  .second {
    padding: 24px 22px 37px 13px;
    border-radius: 20px;
    .second__content {
      &-title {
        margin-bottom: 40px;
      }
      &__agreement {
        margin-bottom: 104px;
        span {
          top: 40px;
        }
      }
      &-btn {
        order: 3;
        button {
          padding-left: 19px;
        }
      }
    }
  }
}
</style>