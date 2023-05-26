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
                    <img v-if="item.image" :src="require('@/assets/image/imageLoan/' + item.image)" alt="">
                  </div>
                  <div class="getting__content__column-item-title-text">
                    <h3>{{item.title}}</h3>
                  </div>
                </div>
                <div class="getting__content__column-item-subtitle">
                  <span v-html="item.subtitle"></span>
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
  .getting__content {
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
        min-height: 270px;
        width: 100%;
        position: relative;
        &-title {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 10px;
          &-number {
            padding: 20px 27px;
            background: $green-color;
            border-radius: 50px;
            width: 70px;
            height: 70px;
            margin-bottom: 28px;
            display: flex;
            align-items: center;
            position: relative;
            span {
              font-size: $medium-font-size + 4px;
              line-height: $medium-line-height + 4px;
              margin-right: 20px;
              color: #fff;
            }
            img {
              position: absolute;
              left: 90px;
              margin-bottom: 5px;
            }
          }
          &-text {
            h3 {
              font-size: $medium-font-size;
              line-height: $medium-line-height;
              font-weight: 500;
            }
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
</style>