<template>
  <section class="services__wrapper">
    <div class="services__content">
      <div class="services__content__main">
        <div class="services__content__main-title">
          <h1>
            Автокредит на любой вкус <br />
            и кошелек
          </h1>
        </div>
        <div class="services__content__main-subtitle">
          <h3>
            Приобретите автомобиль своей мечты и <br />
            наслаждайтесь свободой передвижения
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
      <div class="services__content__footer">
        <div
            class="services__content__footer__list"
            v-for="item in listServices"
            :key="item.id"
        >
          <div class="services__content__footer__list-item">
            <img :src="require('@/assets/image/imgServices/' + item.img)" alt="">
            <span v-html="item.text"></span>
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
          text: "по 1 документу - <br /> удостоверению",
        },
      ]
    }
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.services__wrapper {
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  background: url("@/assets/image/imgServices/man-drove-open-window-smilesd-happily.png")
              no-repeat;
  border-radius: 70px;
  margin-bottom: 72px;
  .services__content {
    &__main {
      padding: 150px 0 0 68px;
      &-title {
        margin-bottom: 30px;
        h1 {
          font-size: $big-title-font-size;
          line-height: $big-title-line-height;
          color: #FFFFFF;
          font-weight: 500;
        }
      }
      &-subtitle {
        margin-bottom: 26px;
        h3 {
          font-size: $medium-font-size;
          line-height: $medium-line-height;
          color: #fff;
          font-weight: 500;
        }
      }
      &-btn {
        margin-bottom: 97px;
      }
    }
    &__footer {
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.9) 54.69%, #FFFFFF 100%);
      box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);
      border-radius: 70px;
      padding: 37px 93px 47px 93px;
      display: flex;
      justify-content: space-between;
      &__list {
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
</style>