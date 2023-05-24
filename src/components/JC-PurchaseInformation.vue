<template>
  <div class="purchase__wrapper">
    <div class="purchase__content">
      <div class="purchase__content-title component-title">
        <h2>
          Простой и безопасный <br />
          путь к приобретению
        </h2>
        <span>авто</span>
      </div>
      <div class="purchase__content__column">
        <div
            class="purchase__content__column-item"
            v-for="item in purchaseItem"
            :key="item.id"
        >
          <div class="bg" v-if="item.backgroundItem">
            <img :src="require('@/assets/image/imagePurchase/' + item.backgroundItem )" alt="">
          </div>
          <img v-if="item.svgItem" :src="require('@/assets/image/svgIcon/' + item.svgItem)" alt="" />
          <span>{{item.textItem}}</span>
        </div>
      </div>
    </div>
  </div>
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
        },
        {
          id: 2,
          svgItem: "man.svg",
          textItem: "Рассматриваем возможность предоставления кредита по одному документу и без справки о доходах! Работаем на прозрачных условиях и доверяем клиентам."
        },
        {
          id: 3,
          svgItem: "headphones.svg",
          textItem: "Отвечаем на заявку всего за 30 минут! Действуем оперативно, потому что ценим ваше время",
        },
        {
          id: 4,
          svgItem: "car.svg",
          textItem: "Предлагаем кредит в размере от 300 000 до 15 000 000 тенге! Сможете купить подержанное или новое авто в кредит любой модели и года выпуска."
        },
        {
          id: 5,
          backgroundItem: "Rectangle 41.png"
        }
      ]
    }
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.purchase__wrapper {
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  .purchase__content {
    margin-bottom: 128px;
    &-title {
      margin-bottom: 24px;
    }
    &__column {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
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
      &-item:nth-child(1) {
        width: 263px;
        height: 320px;
        img {
          width: 263px;
          height: 320px;
        }
      }
      &-item:nth-child(2) {
        max-width: 457px;
        padding: 87px 20px 40px 35px;
      }
      &-item:nth-child(3) {
        max-width: 360px;
        padding: 89px 48px 50px 35px;
      }
      &-item:nth-child(4) {
        max-width: 555px;
        padding: 113px 68px 21px 43px;
      }
      &-item:nth-child(5) {
        img {
          width: 555px;
          height: 320px;
        }
      }
    }
  }
}
</style>