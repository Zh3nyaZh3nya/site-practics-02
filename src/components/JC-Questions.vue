<template>
  <section class="questions">
    <div class="container">
      <div class="questions__content">
        <div class="questions__content-title">
          <h2>Остались вопросы?</h2>
          <span>Закажите бесплатную консультацию</span>
        </div>
        <div class="questions__content__form">
          <form action="#">
            <div class="questions__content__form-input">
              <input type="text" v-model="nameInput" placeholder="Ваше имя">
              <input type="tel" v-model="phoneNumber" @input="formatPhoneNumber" :placeholder="placeholder" />
            </div>
            <div class="questions__content__form-btn">
              <jc-button>
                <template v-slot:text>
                  <span style="font-size: 16px; line-height: 20px">Перезвоните мне</span>
                </template>
              </jc-button>
            </div>
          </form>
        </div>
        <div class="questions__content-checkbox second__content__agreement">
          <input type="checkbox" id="agreement" class="checkbox" @change="checked = !checked"/>
          <label for="agreement">Я соглашаюсь на обработку персональных данных</label>
        </div>
      </div>
    </div>
  </section>
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
.questions {
  margin-bottom: 127px;
  .questions__content {
    padding: 62px 32px 90px 68px;
    box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    &-title {
      margin-bottom: 23px;
      h2 {
        font-weight: 500;
        font-size: $title-font-size;
        line-height: $title-line-height + 1px;
        margin-bottom: 18px;
      }
      span {
        font-size: $small-font-size;
        line-height: $small-line-height;
      }
    }
    &__form {
      margin-bottom: 28px;
      form {
        display: flex;
        flex-wrap: wrap;
        column-gap: 29px;
        row-gap: 30px;
        .questions__content__form-input {
          display: flex;
          flex-wrap: wrap;
          column-gap: 37px;
        }
        input {
          margin-top: 23px;
          border-bottom: 1px solid $green-color;
          height: 35px;
          width: 390px;
          &:nth-child(2) {
            width: 354px;
          }
          &::placeholder {
            font-size: $small-font-size;
            line-height: $small-line-height;
            color: #A7A7A7;
          }
        }
        button {
          padding: 20px 28px;
        }
      }
    }
    &-checkbox {
      display: flex;
      align-items: flex-start;
      .checkbox {
        margin-right: 13px;
      }
      label {
        font-size: 14px;
        line-height: 17px;
      }
    }
  }
}
@media (max-width: 768px) {
  .questions {
    margin-bottom: 127px;
    .questions__content {
      padding: 31px 14px 51px 19px;
      border-radius: 20px;
      &-title {
        h2 {
          font-size: 36px;
          line-height: 44px;
        }
      }
      &__form {
        form {
          .questions__content__form-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
          }
          input {
            width: 310px;
            &:nth-child(2) {
              width: 310px;
            }
          }
          button {
            padding: 16px 32px;
          }
        }
      }
      &-checkbox {
        display: flex;
        align-items: flex-start;
        .checkbox {
          margin-right: 13px;
        }
        label {
          font-size: 14px;
          line-height: 17px;
        }
      }
    }
  }
}
</style>