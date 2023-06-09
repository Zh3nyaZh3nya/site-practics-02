<template>
  <section class="services wrapper">
    <div class="container">
      <div class="services__content">
        <div class="services__content__main">
          <div class="services__content__main-title">
            <h1>
              Автокредит на любой вкус и кошелёк
            </h1>
          </div>
          <div class="services__content__main-subtitle">
            <h3>
              Приобретите автомобиль своей мечты <br />
              и наслаждайтесь свободой передвижения
            </h3>
          </div>
          <div class="services__content__main-btn">
            <jc-button class="left">
              <template v-slot:img>
                <img src="@/assets/image/svgIcon/arrow-right.svg" alt="arrow">
              </template>
              <template v-slot:text>
                <span>Оставить заявку</span>
              </template>
            </jc-button>
          </div>
        </div>
        <div class="services__content__footer container-fluid">
          <div class="services__content__footer__list row">
            <div
                class="col-xl-4 col-lg-4"
                v-for="item in listServices"
                :key="item.id"
            >
              <div class="services__content__footer__list-item">
                <img :src="require('@/assets/image/imgServices/' + item.img)" alt="">
<!--                <img :src="item.img" alt="">-->
                <span v-html="item.text"></span>
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
  name: "jc-services",
  data() {
    return {
      listServices: [
        {
          id: 1,
          img: "sumCredit.png",
          text: "сумма кредита <br /> до 15 000 000 тг.",
        },
        {
          id: 2,
          img: "loanTerm.png",
          text: "срок кредитования <br /> от 3 мес. до 7 лет",
        },
        {
          id: 3,
          img: "document.png",
          text: "по 1 документу — <br /> удостоверению",
        },
      ]
    }
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.services {
  --bs-gutter-x: 0;
  --bs-gutter-y: 0;
  .services__content {
    margin-bottom: 72px;
    &__main {
      &-title {
        margin-bottom: 32px;
        h1 {
          font-size: $big-title-font-size;
          line-height: $big-title-line-height;
          color: #FFFFFF;
          font-weight: 500;
        }
      }
      &-subtitle {
        margin-bottom: 47px;
        h3 {
          font-size: $medium-font-size;
          line-height: $medium-line-height;
          color: #fff;
          font-weight: 500;
        }
      }
      &-btn {
        margin-bottom: 86px;
      }
    }
    &__footer {
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.9) 54.69%, #FFFFFF 100%);
      box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);
      padding: 37px 0 48px 0;
      border-radius: 70px;
      &__list {
        row-gap: 30px;
        &-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          img {
            margin-bottom: 15px;
          }
          span {
            font-size: $small-font-size;
            line-height: $small-line-height;
            font-weight: 500;
          }
        }
      }
    }
  }
}
@media(min-width: 568px) {
  .services__content {
    background: url("@/assets/image/imgServices/man-drove-open-window-smilesd-happily.png")
    no-repeat;
    background-size: cover;
    border-radius: 70px;
  }
  .services__content__main {
    padding: 141px 154px 0 93px;
  }
  .services__content__main {
    border-radius: 70px;
  }
}
@media(max-width: 567px) {
  .services {
    .services__content {
      background: url("@/assets/image/imgServices/adaptive/man-drove-open-window-smilesd-happily.png")
      no-repeat;
      max-width: 567px;
      border-radius: 20px;
      margin-top: 54px;
      margin-bottom: 32px;
    }
    .services__content__main {
      padding: 53px 21px 0 20px;
      .services__content__main-title {
        max-width: 260px;
        margin-bottom: 114px;
        h1 {
          font-size: 36px;
          line-height: 44px;

        }
      }
      .services__content__main-subtitle {
        margin-bottom: 36px;
        h3 {
          font-size: 20px;
          line-height: 24px;
        }
        br {
          display: none;
        }
      }
      .services__content__main-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 28px;
      }
    }
    .services__content__footer {
      border-radius: 20px;
      &__list {
        text-align: center;
        &-item {
          span {
            line-height: 26px;
          }
        }
      }
    }
  }
}
</style>