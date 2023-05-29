<template>
  <section class="getting">
    <div class="container">
      <div class="getting__content">
        <div class="getting__content-title">
          <h2>
            Получите кредит за 3 простых шага!
          </h2>
        </div>
        <div class="getting__content__column">
          <div class="row grid">
            <div
                class="col-lg-4 col-xl-4"
                v-for="item in gettingLoan"
                :key="item.id"
            >
              <div class="getting__content__column-item">
                <div class="getting__content__column-item-title">
                  <div class="getting__content__column-item-title-number">
                    <span>{{item.id}}</span>
                  </div>
                  <div class="getting__content__column-item-title-line">
                    <img v-if="item.image" :src="require('@/assets/image/imageLoan/' + item.image)" alt="">
                  </div>
                </div>
                <div class="getting__content__column-item-text">
                  <div class="getting__content__column-item-text-title">
                    <h3>{{item.title}}</h3>
                  </div>
                  <div class="getting__content__column-item-text-subtitle">
                    <span v-html="item.subtitle"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "jc-getting-loan",
  data() {
    return {
      gettingLoan: [
        {
          id: 1,
          title: "Оставьте заявку",
          subtitle: "Подайте заявку на сайте или в офисе Jet Car. Укажите актуальную информацию для точной предварительной оценки. Дождитесь предложения от специалиста Jet Car.",
          image: "line.png",
        },
        {
          id: 2,
          title: "Подпишите договор",
          subtitle: "Предоставьте машину для оценки и подпишите договор — это все, что нужно для того, чтобы оформить кредит <br /> под залог автомобиля!",
          image: "line.png",
        },
        {
          id: 3,
          title: "Оформите кредит",
          subtitle: "Получите деньги в офисе Jet Car или переводом на банковский <br /> счёт. Не забывайте вносить ежемесячные платежи для погашения кредита.",
        },
      ]
    }
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.getting {
  margin-bottom: 151px;
  &__content {
    &-title {
      margin-bottom: 90px;
      padding-left: 5px;
      h2 {
        font-size: $title-font-size;
        line-height: $title-line-height;
        font-weight: 500;
      }
    }
    &__column {
      margin-bottom: 45px;
      padding: 0;
      &-item {
        width: 100%;
        position: relative;
        display: grid;
        &-title {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          width: 100%;
          &-number {
            padding: 20px 27px;
            background: $green-color;
            border-radius: 50px;
            width: 70px;
            height: 70px;
            margin-bottom: 28px;
            display: flex;
            align-items: center;
            span {
              font-size: $medium-font-size + 4px;
              line-height: $medium-line-height + 4px;
              margin-right: 20px;
              color: #fff;
            }
          }
          &-line {
            img {
              position: absolute;
              right: -150px;
              top: 37px;
            }
          }
        }
        &-text {
          &-title {
            display: flex;
            justify-content: center;
            margin-bottom: 10px;
            h3 {
              font-size: $medium-font-size;
              line-height: $medium-line-height;
              font-weight: 500;
            }
          }
          &-subtitle {
            font-size: $small-font-size;
            line-height: $small-line-height;
          }
        }
      }
    }
  }
}
@media(max-width: 768px) {
  .getting {
    &__content {
      &-title {
        margin-bottom: 67px;
        padding-left: 0px;
        h2 {
          font-size: 36px;
          line-height: 44px;
        }
      }
      &__column {
        &-item {
          display: flex;
          column-gap: 29px;
          margin-bottom: 46px;
          &-title {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            width: 60px;
            &-number {
              padding: 15px 22px;
              width: 60px;
              height: 60px;
              span {
                font-size: $medium-font-size + 4px;
                line-height: $medium-line-height + 4px;
              }
            }
            &-line {
              img {
                position: absolute;
                right: -35px;
                top: 132px;
                transform: rotate(90deg);
                width: 130px;
              }
            }
          }

          &-text {
            &-title {
              display: flex;
              justify-content: flex-start;
              padding-top: 2px;
              h3 {
                font-size: $small-font-size;
                line-height: $small-line-height;
              }
            }

            &-subtitle {
              font-size: $tiny-font-size;
              line-height: $tiny-line-height;
            }
            br{
              display: none;
            }
          }
        }
      }
    }
  }
}
</style>