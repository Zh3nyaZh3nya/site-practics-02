<template>
  <section class="tabs">
    <div class="container">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item text-nowrap" role="presentation">
          <button class="nav-link" :class="{ active: activeTab === 'about-loan' }" @click="activeTab = 'about-loan'" type="button" role="tab" aria-controls="about-loan" aria-selected="true">
            О кредите
          </button>
        </li>
        <li class="nav-item text-nowrap" role="presentation">
          <button class="nav-link" :class="{ active: activeTab === 'conditions' }" @click="activeTab = 'conditions'" type="button" role="tab" aria-controls="conditions" aria-selected="false">
            Условия
          </button>
        </li>
        <li class="nav-item text-nowrap" role="presentation">
          <button class="nav-link" :class="{ active: activeTab === 'about-us' }" @click="activeTab = 'about-us'" type="button" role="tab" aria-controls="about-us" aria-selected="false">
            О нас
          </button>
        </li>
        <li class="nav-item text-nowrap" role="presentation">
          <button class="nav-link" :class="{ active: activeTab === 'questions' }" @click="activeTab = 'questions'" type="button" role="tab" aria-controls="questions" aria-selected="false">
            Вопросы и ответы
          </button>
        </li>
      </ul>
    </div>
    <div class="tab-content">
      <div class="tab-pane" :class="{ active: activeTab === 'about-loan' }" id="about-loan" role="tabpanel" aria-labelledby="about-loan-tab" tabindex="0">
        <jc-purchase-information />
        <jc-getting-loan />
      </div>
      <div class="tab-pane" :class="{ active: activeTab === 'conditions' }" id="conditions" role="tabpanel" aria-labelledby="conditions-tab" tabindex="0">
        <jc-credit-conditions />
      </div>
      <div class="tab-pane" :class="{ active: activeTab === 'about-us' }" id="about-us" role="tabpanel" aria-labelledby="about-us-tab" tabindex="0">
        <jc-about-company />
      </div>
      <div class="tab-pane" :class="{ active: activeTab === 'questions' }" id="questions" role="tabpanel" aria-labelledby="questions-tab" tabindex="0">
        <jc-accordion />
      </div>
    </div>
  </section>
</template>

<script>
import JcPurchaseInformation from "@/components/JC-PurchaseInformation";
import JcGettingLoan from "@/components/JC-GettingLoan";
import JcCreditConditions from "@/components/JC-CreditConditions";
import JcAboutCompany from "@/components/JC-AboutCompany";
import JcAccordion from "@/components/JC-Accordion";
export default {
  name: "jc-tabs",
  components: {JcAccordion, JcAboutCompany, JcCreditConditions, JcGettingLoan, JcPurchaseInformation},
  data() {
    return {
      activeTab: 'about-loan'
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.tabs {
  .nav {
    justify-content: space-between;
  }
  .nav-tabs {
    border-bottom: 1px solid #404040;
  }
  .nav-item {
    display: flex;
    justify-content: center;
    font-size: $medium-font-size;
    line-height: $medium-line-height;
    padding: 0;
  }
  .nav-link {
    color: #000;
    margin-bottom: 0px;
    border: none;
    padding: 7px 9px 16px 2px;
    width: 285px;
  }
  .nav-link.active {
    border-bottom: 3px solid $green-color;
  }
}
@media (max-width: 1024px) {
  .tabs, .nav, .nav-tabs {
    flex-wrap: nowrap;
  }
  .tabs {
    .nav-tabs {
      overflow-x: auto;
      white-space: nowrap;
      scrollbar-width: none; /* Скрывает полосу прокрутки в Firefox */
      -ms-overflow-style: none; /* Скрывает полосу прокрутки в IE и Edge */
    }

    .nav-tabs::-webkit-scrollbar {
      display: none; /* Скрывает полосу прокрутки в Chrome, Safari и Opera */
    }
    .nav-link {
      color: #000;
      margin-bottom: 0px;
      border: none;
      padding: 15px 23px 7px 20px;
      width: 100%;
    }
  }
}
</style>