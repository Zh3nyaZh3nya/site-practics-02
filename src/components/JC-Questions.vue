<template>
  <div class="questions__wrapper">
    <div class="questions__content">
      <div class="questions__content-title">
        <h2>Остались вопросы?</h2>
        <span>Закажите бесплатную консультацию</span>
      </div>
      <div class="questions__content__form">
        <form action="#" class="row-sb">
          <input type="text" v-model="nameInput" placeholder="Ваше имя">
          <input type="tel" v-model="phoneNumber" @input="formatPhoneNumber" :placeholder="placeholder" />
          <jc-button style="padding: 20px 28px">
            <template v-slot:text>
              <span style="font-size: 16px; line-height: 20px">Перезвоните мне</span>
            </template>
          </jc-button>
        </form>
      </div>
      <div class="questions__content-checkbox second__content__agreement">
        <input type="checkbox" id="agreement" class="checkbox" @change="checked = !checked"/>
        <label for="agreement">Я соглашаюсь на обработку персональных данных</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "jc-questions",
  data() {
    return {
      phoneNumber: "",
      nameInput: "",
      checked: false,
    }
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
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.questions__wrapper {
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 80px;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  .questions__content {
    padding: 62px 68px 96px 68px;
    &-title {
      margin-bottom: 16px;
      h2 {
        font-weight: 500;
        font-size: $title-font-size;
        line-height: $title-line-height;
      }
      span {
        font-size: $small-font-size;
        line-height: $small-line-height;
      }
    }
    &__form {
      margin-bottom: 26px;
      form {
        column-gap: 37px;
        input {
          margin-top: 25px;
          border-bottom: 1px solid $green-color;
          width: 365px;
          height: 35px;
          &::placeholder {
            font-size: $small-font-size;
            line-height: $small-line-height;
          }
        }
      }
    }
    &-checkbox {
      display: flex;
      align-items: center;
    }
  }
}
</style>