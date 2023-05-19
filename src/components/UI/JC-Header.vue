<template>
  <div class="header__wrapper">
    <div class="header__content">
      <div class="header__content-title">
        <img src="@/assets/image/svgIcon/logo.svg" alt="jet.car">
      </div>
      <nav class="header__content__nav">
        <ul
            class="header__content__nav__list"
            v-for="item in navLink"
            :key="item.id"
        >
          <li class="header__content__nav__list-link">
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
  </div>
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
          link: "Как это работает",
        },
        {
          id: 3,
          ref: "/",
          link: "Условия кредитования",
        },
        {
          id: 4,
          ref: "/",
          link: "О нас",
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
.header__wrapper {
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  .header__content {
    display: flex;
    align-items: center;
    column-gap: 31px;
    margin-top: 33px;
    &__nav {
      display: flex;
      column-gap: 38px;
      &__list {
        &-link {
          font-size: $small-font-size;
          line-height: $small-line-height;
        }
      }
    }
    &-btn {
      button {
        border: 1px solid #8EBF0D;
        border-radius: 30px;
        padding: 10px 18px;
        span {
          font-size: $small-font-size;
          line-height: $small-line-height;
          color: $green-color;
        }
      }
    }
  }
}
</style>