<template>
  <section class="purchase container">
    <div class="purchase__content">
      <div class="purchase__content-title component-title">
        <h2>
          Простой и безопасный путь <br />
          к приобретению
        </h2>
        <span>авто</span>
      </div>
      <div class="purchase__content__column row">
        <div
           v-for="item in purchaseItem"
           :key="item.id"
           :class="item.col"
        >
          <div class="purchase__content__column-item" :class="item.padding">
            <div class="bg" v-if="item.backgroundItem">
              <img :src="require('@/assets/image/imagePurchase/' + item.backgroundItem )" alt="" />
            </div>
            <div class="bg-adaptive" v-if="item.backgroundItemAdaptive">
              <img :src="require('@/assets/image/imagePurchase/adaptive/' + item.backgroundItemAdaptive)" alt="">
            </div>
            <img v-if="item.svgItem" :src="require('@/assets/image/svgIcon/' + item.svgItem)" alt="" />
            <span v-html="item.textItem" v-if="item.textItem"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "jc-purchase-information",
  data() {
    return {
      purchaseItem: [
        {
          id: 1,
          backgroundItem: "Rectangle 39.png",
          backgroundItemAdaptive: "Rectangle 39.png",
          col: "col-lg-3 col-6 order-lg-1 order-1",
        },
        {
          id: 2,
          svgItem: "man.svg",
          textItem: "Рассматриваем возможность предоставления кредита по одному документу и без справки о доходах! Работаем на прозрачных условиях <br />  и доверяем клиентам.",
          col: "col-lg-5 order-lg-2 order-3",
          padding: "padding-2",
        },
        {
          id: 3,
          svgItem: "headphones.svg",
          textItem: "Отвечаем на заявку всего за 30 минут! Действуем оперативно, потому <br /> что ценим ваше время",
          col: "col-lg-4 col-6 order-lg-3 order-1",
          padding: "padding-3"
        },
        {
          id: 4,
          svgItem: "car.svg",
          textItem: "Предлагаем кредит в размере от 300 <br /> 000 до 15 000 000 тенге! Сможете купить подержанное или новое авто в кредит любой модели и года выпуска.",
          col: "col-lg-6 order-lg-4 order-2",
          padding: "padding-4",
        },
        {
          id: 5,
          backgroundItem: "Rectangle 41.png",
          backgroundItemAdaptive: "Rectangle 41.png",
          col: "col-lg-6 order-lg-5 order-4",
        }
      ]
    }
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.purchase{
  .purchase__content {
    margin-top: 70px;
    margin-bottom: 150px;
    &-title {
      margin-bottom: 56px;
    }
    &__column {
      --bs-gutter-x: 30px;
      --bs-gutter-y: 18px;
      &-item {
        display: grid;
        height: 100%;
        border-radius: 30px;
        box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.2);
        .bg {
          display: flex;
          justify-content: center;
          width: 100%;
          height: 100%;
          img {
            height: 100%;
            width: 100%;
            margin: 0;
          }
        }
        .bg-adaptive {
          display: none;
        }
        span {
          font-weight: 400;
          font-size: $small-font-size;
          line-height: $small-line-height;
        }
      }
      .padding-2 {
        padding: 87px 48px 40px 35px;
        img {
          margin-bottom: 15px;
        }
      }
      .padding-3 {
        padding: 89px 48px 50px 35px;
        img {
          margin-bottom: 0px;
        }
      }
      .padding-4 {
        padding: 113px 68px 21px 43px;
        img {
          margin-bottom: -22px;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .purchase{
    .purchase__content {
      margin-top: 50px;
      margin-bottom: 79px;
    }
    .purchase__content-title {
      margin-bottom: 32px;
    }
    .purchase__content__column {
      --bs-gutter-y: 26px;
      --bs-gutter-x: 6px;
      &-item {
        border-radius: 20px;
        span {
          font-size: $tiny-font-size;
          line-height: $tiny-line-height;
        }
        .bg {
          display: none;
        }
        .bg-adaptive {
          display: block;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
      img {
        width: 30px;
        height: 30px;
      }
      .padding-2 {
        padding: 17px 11px 27px 12px;
      }
      .padding-3 {
        padding: 17px 20px 20px 17px;
      }
      .padding-4 {
        padding: 12px 41px 21px 13px;
        img {
          margin-bottom: 9px;
        }
        br {
          display: none;
        }
      }
    }
  }
}
</style>