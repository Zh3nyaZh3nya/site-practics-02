<template>
  <div class="end container">
    <div class="end__content">
      <div class="end__content-title">
        <h2>
          Спасибо! Ваша <br />
          заявка отправлена
        </h2>
        <img src="@/assets/image/svgIcon/check-circle.svg" alt="">
      </div>
      <div class="end__content-subtitle">
        <span>В ближайшее время с вами свяжется специалист</span>
      </div>
      <div class="quiz__progress">
        <div class="quiz__progress-title">
          <span>ГОТОВО</span>
          <span>{{progress}}%</span>
        </div>
        <div class="quiz__progress-line">
          <div class="quiz__progress-line-width" :style="{ width: progress + '%' }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "jc-quiz-end-step",
  props: {
    progress: {
      type: Number,
      default: 0,
    },
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.end {
  padding: 195px 47px 50px 90px;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, .2);
  border-radius: 70px;
  .end__content {
    &-title {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      column-gap: 15px;
      text-align: center;
      margin-bottom: 42px;
      h2 {
        font-size: $title-font-size;
        line-height: $title-line-height;
      }
    }
    &-subtitle {
      margin-bottom: 98px;
      display: flex;
      justify-content: center;
      span {
        font-size: $medium-font-size;
        line-height: $medium-font-size;
      }
    }
  }
}
@media (max-width: 768px) {
  .end {
    padding: 191px 16px 50px 21px;
    border-radius: 20px;
    .end__content {
      &-title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        column-gap: 0px;
        text-align: center;
        margin-bottom: 42px;
        h2 {
          font-size: 32px;
          line-height: 39px;
          order: 1;
        }
        img {
          order: -1;
          margin-bottom: 27px;
        }
      }
      &-subtitle {
        margin-bottom: 134px;
        display: flex;
        justify-content: center;
        text-align: center;
      }
    }
  }
}
</style>