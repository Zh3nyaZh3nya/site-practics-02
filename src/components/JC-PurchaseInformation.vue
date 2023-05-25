<template>
  <section class="purchase container">
    <div class="purchase__content">
      <div class="purchase__content-title component-title">
        <h2>
          Простой и безопасный <br />
          путь к приобретению
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
            <img v-if="item.svgItem" :src="require('@/assets/image/svgIcon/' + item.svgItem)" alt="" />
            <span>{{item.textItem}}</span>
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
          col: "col-lg-3 col-7",
        },
        {
          id: 2,
          svgItem: "man.svg",
          textItem: "Рассматриваем возможность предоставления кредита по одному документу и без справки о доходах! Работаем на прозрачных условиях и доверяем клиентам.",
          col: "col-lg-5 col-5",
          padding: "padding-2"
        },
        {
          id: 3,
          svgItem: "headphones.svg",
          textItem: "Отвечаем на заявку всего за 30 минут! Действуем оперативно, потому что ценим ваше время",
          col: "col-lg-4",
          padding: "padding-2"
        },
        {
          id: 4,
          svgItem: "car.svg",
          textItem: "Предлагаем кредит в размере от 300 000 до 15 000 000 тенге! Сможете купить подержанное или новое авто в кредит любой модели и года выпуска.",
          col: "col-lg-6",
          padding: "padding-3",
        },
        {
          id: 5,
          backgroundItem: "Rectangle 41.png",
          col: "col-lg-6",
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
    margin-bottom: 128px;
    &-title {
      margin-bottom: 24px;
    }
    &__column {
      --bs-gutter-x: 30px;
      --bs-gutter-y: 25px;
      &-item {
        display: grid;
        height: 320px;
        border-radius: 30px;
        box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.2);
        img {
          margin-bottom: 15px;
        }
        span {
          font-weight: 400;
          font-size: $small-font-size;
          line-height: $small-line-height;
        }
      }
      .padding-2 {
        padding: 87px 48px 40px 35px;
      }
      .padding-3 {
        padding: 113px 68px 21px 43px;
      }
    }
  }
}

</style>