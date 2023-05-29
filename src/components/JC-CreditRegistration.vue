<template>
  <section class="registration">
    <div class="container">
      <div class="registration__inner">
        <div class="registration__content">
          <div class="registration__content-title">
            <h2>
              Получите автокредит <br/>
              на выгодных условиях
            </h2>
          </div>
          <div class="registration__content-subtitle">
            <span>
              Наши специалисты помогут вам пройти путь от выбора до оформления <br />
              кредита на авто с пробегом. По любым непонятным моментам получите <br />
              профессиональную консультацию.
            </span>
          </div>
          <div class="registration__content-btn">
            <jc-button>
              <template v-slot:img>
                <img src="@/assets/image/svgIcon/arrow-right.svg" alt="arrow">
              </template>
              <template v-slot:text>
                <span>Подобрать</span>
              </template>
            </jc-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "jc-credit-registration",
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.registration {
  background: url("@/assets/image/imageReg/business-men-work-with-tablet-computers-their-cars.png") no-repeat;
  background-size: cover;
  padding: 130px 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 149px;
  .registration__inner {
    background: rgba(0, 0, 0, 0.1);
    border: 1px solid #AEAEAE;
    backdrop-filter: blur(25px);
    border-radius: 50px;
    padding: 52px 0 36px 82px;
    .registration__content {
      &-title {
        margin-bottom: 20px;
        h2 {
          font-size: $title-font-size;
          line-height: $title-line-height;
          color: #fff;
        }
      }
      &-subtitle {
        margin-bottom: 26px;
        span {
          font-size: $small-font-size;
          line-height: $small-line-height;
          color: #fff;
          font-weight: 400;
        }
      }
      &-btn {
        button {
          column-gap: 26px;
          padding-left: 38px;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .registration {
    padding: 76px 2px 80px 0px;
    margin-bottom: 115px;
    background: url("@/assets/image/imageReg/adaptive/business-men-work-with-tablet-computers-their-cars.png") no-repeat;
    background-size: cover;
    .registration__inner {
      padding: 31px 28px 56px 24px;
      border-radius: 20px;
      width: 100%;
      .registration__content {
        &-title {
          margin-bottom: 20px;
          h2 {
            font-size: 36px;
            line-height: 44px;
          }
        }
        &-subtitle {
          br {
            display: none;
          }
        }
        &-btn {
          display: flex;
          justify-content: center;
          button {
            column-gap: 26px;
            padding-left: 38px;
          }
        }
      }
    }
  }
}
</style>