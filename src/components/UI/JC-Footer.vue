<template>
  <footer class="footer container-fluid">
    <div class="container">
      <div class="footer__content">
        <nav class="footer__content__nav">
          <div
              class="footer__content__nav-item"
              v-for="item in footerNav"
              :key="item.id"
          >
            <router-link :to="item.ref">
              {{item.text}}
            </router-link>
          </div>
        </nav>
        <div class="footer__content__services">
          <div class="footer__content__services-title">
            <h3>Информация об услугах, предоставляемых Jet Car:</h3>
          </div>
          <div class="footer__content__services__column row">
            <div class="footer__content__services__column__left col-6">
              <div
                  class="footer__content__services__column__left-item services-item"
                  v-for="item in footerServicesLeft"
                  :key="item.id"
              >
                <div class="footer__content__services__column__left-item-text">
                  <span v-html="item.text"></span>
                </div>
              </div>
            </div>
            <div class="footer__content__services__column__right col-6">
              <div
                  class="footer__content__services__column__right-item services-item"
                  v-for="item in footerServicesRight"
                  :key="item.id"
              >
                <div class="footer__content__services__column__right-item-text">
                  <span v-html="item.text"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "jc-footer",
  data() {
    return {
      footerNav: [
        {
          id: 1,
          text: "О JetFinance",
          ref: "/"
        },
        {
          id: 2,
          text: "Машины на продажу",
          ref: "/"
        },
        {
          id: 3,
          text: "Вопросы и ответы",
          ref: "/"
        },
        {
          id: 4,
          text: "Страхование",
          ref: "/"
        },
        {
          id: 5,
          text: "Политика конфиденциальности",
          ref: "/"
        },
        {
          id: 6,
          text: "Политика файлов cookies",
          ref: "/"
        },
        {
          id: 7,
          text: "Документы",
          ref: "/"
        },
      ],
      footerServicesLeft: [
        {
          id: 1,
          text: "1. Мы предлагаем автокредиты и займы под авто (автозалоги)",
        },
        {
          id: 2,
          text: "2. Сумма кредитования: от 300 000 до 10 000 000 тенге",
        },
        {
          id: 3,
          text: "3. Период погашения долга: от 3 до 84 месяцев",
        },
        {
          id: 4,
          text:
              "4. Ставка по кредиту (в зависимости от суммы кредита и стоимости <br /> " +
              "автомобиля): от 3,2 до 3,7% ежемесячно или от 45,84 до 54,65% ГЭСВ. <br />" +
              " При этом никаких комиссий за выдачу и обслуживание кредита нет. <br/>" +
              " Первоначальный взнос от 0% до 40%",
        },
        {
          id: 5,
          text: "5. Комиссия за досрочное и частичное погашение 0%",
        },
      ],
      footerServicesRight: [
        {
          id: 6,
          text:
              "6. В случае, если вы не можете своевременно погасить кредит, <br />" +
              "сразу же свяжитесь с нами. Мы обсудим с вами возможные варианты <br /> " +
              "решения: пересмотр графика платежей, частичное погашение текущего <br />" +
              "платежа или продажа залогового автомобиля, в случае если кредит <br /> " +
              "вам больше не подходит.",
        },
        {
          id: 7,
          text:
              "7. Пример автокредита: срок - 36 месяцев, цена авто - 3 000 000 тенге, <br /> " +
              "первоначальный взнос - 900 000 тенге, ежемесячный платеж - 106 493 тенге",
        },
        {
          id: 8,
          text:
              "8. Пример автозалога: срок - 36 месяцев, сумма займа - 3 000 000 тенге, <br /> " +
              "ежемесячный платеж - 152 133 тенге",
        },
      ]
    }
  },
}
</script>

<style lang="scss">
.footer {
  background: #454741;
  .footer__content {
    padding-top: 44px;
    padding-bottom: 40px;
    &__nav {
      margin-bottom: 36px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      column-gap: 30px;
      row-gap: 20px;
      &-item {
          a {
            font-size: 14px;
            line-height: 17px;
            color: #fff;
            font-weight: 600;
          }
      }
    }
    &__services {
      &-title {
        display: flex;
        justify-content: center;
        margin-bottom: 25px;
        h3 {
          font-weight: 600;
          font-size: 14px;
          line-height: 17px;
          color: #fff;
        }
      }
    }
  }
}
.services-item {
  display: flex;
  span {
    font-size: 14px;
    line-height: 17px;
    font-weight: 400;
    color: #fff;
  }
}
</style>