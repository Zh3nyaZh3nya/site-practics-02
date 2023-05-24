<template>
  <div class="contacts__wrapper">
    <div class="contacts__content">
      <div class="contacts__content-title">
        <h2>Свяжитесь с нами</h2>
      </div>
      <div class="contacts__content__column cl-2">
        <div class="contacts__content__column__left">
          <div class="contacts__content__column__left__link">
            <div
                class="contacts__content__column__left__link-item"
                v-for="item in contactItem"
                :key="item.id"
            >
              <img :src="require('@/assets/image/imageContacts/svg/' + item.svg)" alt="" />
              <span v-html="item.text"></span>
            </div>
          </div>
        </div>
        <div class="contacts__content__column__right">
          <div class="contacts__content__column__right__map">
            <div class="contacts__content__column__right__map-img">
              <img src="@/assets/image/imageContacts/map.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "jc-contacts",
  data() {
    return {
      contactItem: [
        {
          id: 1,
          svg: "mail.svg",
          text: "ok@jetfin.kz",
        },
        {
          id: 2,
          svg: "phone.svg",
          text: "+7 775 030 00 77",
        },
        {
          id: 3,
          svg: "geo.svg",
          text: "Казахстан, г. Алматы, Толе би 83",
        },
        {
          id: 4,
          svg: "time.svg",
          text: "Пн-Пт: 10:00-19:00 <br /> Сб-Вс: выходной",
        },
      ]
    }
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.contacts__wrapper {
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 75px;
  .contacts__content {
    &-title {
      margin-bottom: 42px;
      h2 {
        font-size: $title-font-size;
        line-height: $title-line-height;
        font-weight: 500;
      }
    }
    &__column {
      &__left {
        padding-top: 40px;
        &__link {
          display: flex;
          flex-direction: column;
          row-gap: 34px;
          &-item {
            display: flex;
            align-items: center;
            column-gap: 20px;
            span {
              font-size: $tiny-font-size;
              line-height: $tiny-line-height;
              font-weight: 500;
            }
          }
        }
      }
    }
  }
}
</style>