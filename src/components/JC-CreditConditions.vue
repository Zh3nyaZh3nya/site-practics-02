<template>
  <section class="conditions container">
    <div class="conditions__content">
      <div class="conditions__content-title component-title">
        <h2>Основные условия <br/></h2>
        <span>кредитования</span>
      </div>
      <div class="conditions__content__column">
        <div class="row">
          <div class="col-lg-6">
            <div class="conditions__content__column__left">
            <div class="conditions__content__column__left-text">
              <span>
                Чтобы воспользоваться услугой и <br/>
                купить авто в кредит, нужно <br/>
                соответствовать простым <br/>
                требованиям компании и объективно <br/>
                оценивать свои возможности. <br/>
                Как это работает? Выберите <br/>
                объявление о продаже любой машины <br/>
                и обращайтесь в Jet Car!
              </span>
            </div>
          </div>
          </div>
          <div class="col-lg-6">
            <div class="conditions__content__column__right">
            <div
                class="conditions__content__column__right-item"
                v-for="item in conditionItem"
                :key="item.id"
            >
              <div class="conditions__content__column__right-item-img">
                <img :src="require('@/assets/image/imageCondition/svg/' + item.svg)" alt="">
              </div>
              <div class="conditions__content__column__right-item-desc">
                <div class="conditions__content__column__right-item-desc-text">
                  <span v-html="item.text"></span>
                </div>
                <div class="conditions__content__column__right-item-desc-number">
                  <span>0{{item.id}}</span>
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
  name: "jc-credit-conditions",
  data() {
    return {
      conditionItem: [
        {
          id: 1,
          svg: "year.svg",
          text: "Вам от 18 до 65 лет",
        },
        {
          id: 2,
          svg: "home.svg",
          text: "Вы проживаете в Алматы, <br /> Шымкенте, Таразе и их областях, <br /> а также являетесь гражданином <br /> Республики Казахстан",
        },
        {
          id: 3,
          svg: "identityCard.svg",
          text: "У Вас есть действующее <br /> удостоверение личности <br /> и водительские права",
        },
        {
          id: 4,
          svg: "shield.svg",
          text: "Приобретение страховки <br /> от несчастного случая 20% <br /> от суммы займа",
        },
      ]
    }
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.conditions {
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  margin-top: 100px;
  margin-bottom: 150px;
  &__content {
    padding: 59px 65px 84px 59px;
    &-title {
      margin-bottom: 32px;
      h2 {
        position: relative;
        &:after {
          content: "";
          position: absolute;
          bottom: 29px;
          left: 417px;
          background: url("@/assets/image/imageCondition/svg/J-title.svg") no-repeat;
          display: block;
          width: 59px;
          height: 97px;
        }
      }
    }
    &__column {
      padding: 0;
      &__left {
        &-text {
          span {
            font-size: $small-font-size;
            line-height: $small-line-height;
            color: #888888;
          }
        }
      }
      &__right {
        display: flex;
        flex-direction: column;
        row-gap: 39px;
        padding: 0px;
        &-item {
          display: flex;
          align-items: center;
          column-gap: 32px;
          &-img {
            background: rgba(142, 191, 13, 0.1);
            padding: 16px;
            border-radius: 50px;
          }
          &-desc {
            display: flex;
            justify-content: space-between;
            align-items: center;
            column-gap: 24px;
            &-text {
              width: 338px;
              span {
                font-size: $small-font-size;
                line-height: $small-line-height;
              }
            }
            &-number {
              span {
                color: $green-color;
                font-size: $medium-font-size;
                line-height: $medium-line-height;
                font-family: 'Josefin Sans', sans-serif;
              }
            }
          }
        }
      }
    }
  }
}
</style>