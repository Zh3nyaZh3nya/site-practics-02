<template>
  <header class="header container">
    <div class="header__content">
      <div class="header__content-title">
        <img src="@/assets/image/svgIcon/logo.svg" alt="jet.car">
      </div>
      <nav class="header__content__nav">
        <ul class="header__content__nav__list">
          <li
              class="header__content__nav__list-link"
              v-for="item in navLink"
              :key="item.id"
          >
            <a :href="item.ref">
              <span>{{ item.link }}</span>
            </a>
          </li>
        </ul>
      </nav>
      <div class="header__content-btn">
        <button>
          <span>Связаться</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "jc-header",
  data() {
    return {
      navLink: [
        {
          id: 1,
          ref: "/",
          link: "Автокредитование",
        },
        {
          id: 2,
          ref: "/",
          link: "Кредит под залог авто",
        },
        {
          id: 3,
          ref: "/",
          link: "Оплата",
        },
        {
          id: 4,
          ref: "/",
          link: "О нас",
        },
        {
          id: 5,
          ref: "/",
          link: "Контакты",
        },
      ]
    }
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.header {
  padding: 0;
  .header__content {
    margin: 32px 0;
    display: flex;
    align-items: center;
    &-title {
      padding: 0;
      margin-right: 82px;
    }
    &__nav {
      display: flex;
      align-items: center;
      margin-right: 32px;
      ul {
        margin-bottom: 0px;
      }
      &__list {
        display: flex;
        align-items: center;
        column-gap: 34px;
        &-link {
          font-size: $small-font-size;
          line-height: $small-line-height;
        }
      }
    }
    &-btn {
      button {
        background: none;
        border: 1px solid $green-color;
        padding: 10px 26px;
        span {
          color: $green-color;
        }
      }
    }
  }
}
</style>