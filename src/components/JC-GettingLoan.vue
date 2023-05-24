<template>
  <div class="getting__wrapper">
    <div class="getting__content">
      <div class="getting__content-title">
        <h2>
          Получите кредит в JetCar <br/>
          за 3 простых шага!
        </h2>
      </div>
      <div class="getting__content__row">
        <div
            class="getting__content__row-item"
            v-for="item in gettingLoan"
            :key="item.id"
        >
          <div class="getting__content__row-item-title">
            <div class="getting__content__row-item-title-number">
              <span>{{item.id}}</span>
            </div>
            <div class="getting__content__row-item-title-text">
              <h3>{{item.title}}</h3>
            </div>
          </div>
          <div class="getting__content__row-item-subtitle">
            <span>{{item.subtitle}}</span>
          </div>
        </div>
      </div>
      <div class="getting__content-btn">
        <jc-button style="background: none;box-shadow: none;border: 1px solid #fff;">
          <template v-slot:img>
            <img src="@/assets/image/svgIcon/arrow-right.svg" alt="arrow">
          </template>
          <template v-slot:text>
            <span>Оставить заявку</span>
          </template>
        </jc-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "jc-getting-loan",
  data() {
    return {
      gettingLoan: [
        {
          id: 1,
          title: "Выберите авто",
          subtitle: "Выберите подходящий автомобиль и определитесь с условиями финансирования. Рассчитать кредит на авто можно с помощью нашего калькулятора.",
        },
        {
          id: 2,
          title: "Оставьте заявку",
          subtitle: "Оставьте онлайн заявку на кредит автомобиля на сайте и ожидайте предложения от Jet Car. Это займет не больше получаса.",
        },
        {
          id: 3,
          title: "Оформите кредит",
          subtitle: "Заключите договор купли-продажи на кредитные средства, перерегистрируйте транспортное средство в ЦОНе и оформите кредит для покупки автомобиля",
        },
      ]
    }
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.getting__wrapper {
  background: $green-color;
  padding-top: 70px;
  padding-bottom: 79px;
  margin-bottom: 128px;
  .getting__content {
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
    &-title {
      margin-bottom: 50px;
      h2 {
        font-size: $title-font-size;
        line-height: $title-line-height;
        color: #fff;
      }
    }
    &__row {
      display: grid;
      grid-template-columns: repeat(3, 330px);
      column-gap: 75px;
      row-gap: 30px;
      margin-bottom: 45px;
      &-item {
        position: relative;
        border-radius: 30px;
        background: #fff;
        padding: 29px 61px 29px 35px;
        &:not(:last-child):after {
          content: "";
          background: url("@/assets/image/imageLoan/arrowRight.png") no-repeat;
          position: absolute;
          top: 121px;
          right: -39px;
          width: 41px;
          height: 36px;
        }
        &-title {
          display: flex;
          align-items: center;
          column-gap: 20px;
          margin-bottom: 23px;
          &-number {
            padding: 10px 15px;
            background: $green-color;
            border-radius: 50px;
            span {
              font-size: $tiny-font-size;
              line-height: $tiny-line-height;
              color: #fff;
            }
          }
          &-text {
            h3 {
              font-size: $small-font-size;
              line-height: $small-line-height;
              color: $green-color;
            }
          }
        }
        &-subtitle {
          font-size: $tiny-font-size;
          line-height: $tiny-line-height;
        }
      }
    }
    &-btn {
      display: flex;
      justify-content: center;
    }
  }
}
</style>