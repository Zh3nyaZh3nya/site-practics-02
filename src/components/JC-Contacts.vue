<template>
  <section class="contacts">
    <div class="container">
      <div class="contacts__content">
        <div class="contacts__content-title">
          <h2>Свяжитесь с нами</h2>
        </div>
        <div class="contacts__content__column">
          <div class="row">
            <div class="col-lg-6">
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
            </div>
            <div class="col-lg-6">
              <yandex-map
                  :coords="coords"
                  :zoom="15"
                  class="yandex-map w-100"
              >
                <ymap-marker
                    :coords="coords"
                    marker-id="123"
                    hint-content="some hint"
                />
              </yandex-map>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

export default {
  name: "jc-contacts",
  components: { yandexMap, ymapMarker },
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
      ],
      settings: {
        apiKey: 'd788c73c-29d9-479c-89da-856189171458',
        lang: 'ru_RU',
        version: '2.1'
      },
      coords: [
        43.25440107454222,
        76.93175699999989
      ],
    }
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.contacts {
  margin-bottom: 160px;
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
        padding-top: 26px;
        &__link {
          display: flex;
          flex-direction: column;
          row-gap: 36px;
          &-item {
            display: flex;
            align-items: center;
            column-gap: 17px;
            span {
              font-size: $tiny-font-size;
              line-height: $tiny-line-height;
              font-weight: 500;
            }
          }
        }
      }
      &__right {
      }
    }
  }
}
.yandex-map {
  height: 385px;
}
@media (max-width: 1024px) {
  .contacts {
    .contacts__content {
      margin-bottom: 0;
    }
    .contacts__content__column__left {
      padding-top: 0;
      margin-bottom: 81px;
      &__link {
        row-gap: 22px;
      }
    }
  }
}
@media (max-width: 768px) {
  .contacts {
    margin-bottom: 0px;
    .contacts__content {
      &-title {
        margin-bottom: 28px;
        h2 {
          font-size: 36px;
          line-height: 44px;
        }
      }
    }
  }
}
</style>