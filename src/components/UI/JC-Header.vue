<template>
  <header class="header">
    <div class="container">
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
          <div class="header__content-btn">
            <button>
              <span>Связаться</span>
            </button>
          </div>
        </nav>
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
          link: "Преимущества",
        },
        {
          id: 2,
          ref: "/",
          link: "Как это работает",
        },
        {
          id: 3,
          ref: "/",
          link: "Условия кредитования",
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
    margin: 45px 0 58px 0;
    display: flex;
    align-items: center;
    column-gap: 31px;
    justify-content: flex-start;
    &-title {
      padding: 0;
    }
    &__nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      ul {
        padding: 0;
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
        min-width: 165px;
        width: 100%;
        background: none;
        border: 1px solid $green-color;
        padding: 9px 26px;
        border-radius: 30px;
        span {
          font-size: $small-font-size;
          line-height: $small-line-height;
          color: $green-color;
        }
      }
    }
  }
}
@media(max-width: 768px) {
  .header {
    display: none;
  }
}
</style>