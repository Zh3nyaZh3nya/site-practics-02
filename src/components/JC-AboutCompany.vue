<template>
  <section class="company container">
    <div class="company__content">
      <div class="company__content-title component-title">
        <span>О нас</span>
      </div>
      <div class="company__content-img">
        <img src="@/assets/image/imageAbout/svg/Group.svg" alt="" />
      </div>
      <div class="company__content__column row ">
        <div class="company__content__column__left col-7">
          <div class="company__content__column__left-img">
            <img src="@/assets/image/imageAbout/car.png" alt="" />
          </div>
        </div>
        <div class="company__content__column__right col-5">
          <div class="company__content__column__right-text">
            <span>
              Jet Car — бренд, вобравший в себя опыт Mogo <br/>
              Group и успешно развивающийся на рынке <br/>
              Казахстана. Компания создана в 2018 году <br/>
              специально для клиентов, которых интересуют <br/>
              продажа автомобилей в кредит и другие <br/>
              варианты финансирования покупки машины. <br/>
              Несколько офисов компании открыто в крупных <br/>
              городах Казахстана. На данный момент <br/>
              вы можете найти нас в Алматы и Шымкенте.
            </span>
            <span>
              Главные достоинства наших услуг — высокая <br/>
              скорость рассмотрения заявок и лояльное <br/>
              отношение к документам, подтверждающим <br/>
              платежеспособность. При соблюдении всех <br/>
              условий вы сможете купить б/у или новое авто <br />
              в кредит на выгодных условиях в течение <br />
              одного дня с момента одобрения заявки. <br />
              И все это без справок о доходах и идеальной <br/>
              кредитной истории!
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "jc-about-company"
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.company {
  .company__content {
    margin-bottom: 116px;
    position: relative;
    &-title {
      margin-bottom: 92px;
    }
    &-img {
      position: absolute;
      top: -70px;
      left: 390px;
    }
    &__column {
      &__left {
        padding: 0px;
      }
      &__right {
        padding: 0px;
        &-text {
          display: flex;
          flex-direction: column;
          row-gap: 20px;
          span {
            font-size: $small-font-size;
            line-height: $small-line-height;
          }
        }
      }
    }
  }
}
</style>