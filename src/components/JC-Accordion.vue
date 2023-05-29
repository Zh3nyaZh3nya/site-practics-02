<template>
  <section class="accordion-sec">
    <div class="container">
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div
            class="accordion-item"
            v-for="item in accordionItem"
            :key="item.id"
        >
          <h2 class="accordion-header">
            <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
                @click="toggleAccordion(item.id)"
            >
              <span>{{item.title}}</span>
              <img src="@/assets/image/svgIcon/plus.svg" v-if="item.open === false" alt="" />
              <img src="@/assets/image/svgIcon/closed.svg" v-else alt="" />
            </button>
          </h2>
          <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
              :class="{ show: item.open }"
          >
            <div class="accordion-body">
              <span>{{item.text}}</span>
            </div>
          </div>
        </div>
        <div
            class="accordion-item-mobile"
            v-for="item in accordionItemMobile"
            :key="item.id"
        >
          <h2 class="accordion-header">
            <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
                @click="toggleAccordion(item.id)"
            >
              <span>{{item.title}}</span>
              <img src="@/assets/image/svgIcon/plus.svg" v-if="item.open === false" alt="" />
              <img src="@/assets/image/svgIcon/closed.svg" v-else alt="" />
            </button>
          </h2>
          <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
              :class="{ show: item.open }"
          >
            <div class="accordion-body">
              <span>{{item.text}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-sec-btn">
        <jc-button>
          <template v-slot:img>
            <img src="@/assets/image/svgIcon/arrow-right.svg" alt="arrow">
          </template>
          <template v-slot:text>
            <span style="padding:0 19px 0 8px">Смотреть все</span>
          </template>
        </jc-button>
      </div>
    </div>
  </section>
</template>

<script>
import JcButton from "@/components/UI/JC-Button";
export default {
  name: "jc-accordion",
  components: {JcButton},
  data() {
    return {
      accordionItem: [
        {
          id: 1,
          title: "Какие шаги следует предпринять, если я покупаю автомобиль?",
          text: "да",
          open: false,
        },
        {
          id: 2,
          title: "Могу ли я подать заявку на получение кредита, если уже имею другие кредитные обязательства?",
          text: "можно",
          open: false,
        },
        {
          id: 3,
          title: "Какие условия автокредитования предлагает Jet Car?",
          text: "неадекватные",
          open: false,
        },
        {
          id: 4,
          title: "Как я узнаю, что моя заявка на получение кредита одобрена?",
          text: "никак",
          open: false,
        },
        {
          id: 5,
          title: "В течение какого времени после одобрения заявки деньги будут перечислены на мой банковский счет?",
          text: "в течение дня",
          open: false,
        },
        {
          id: 6,
          title: "В какое время можно получить автокредит?",
          text: "Вы можете подать заявку в любое удобное для Вас время. Мы рассматриваем заявки ежедневно с 10:00 до 20:00, выдача кредита производится с понедельника по пятницу с 10:00 до 17:00",
          open: false,
        },
      ],
      accordionItemMobile: [
        {
          id: 1,
          title: "Какие шаги следует предпринять, если я покупаю автомобиль?",
          text: "да",
          open: false,
        },
        {
          id: 2,
          title: "Могу ли я подать заявку на получение кредита, если уже имею другие кредитные обязательства?",
          text: "можно",
          open: false,
        },
        {
          id: 3,
          title: "Какие условия автокредитования предлагает Jet Car?",
          text: "неадекватные",
          open: false,
        },
        {
          id: 4,
          title: "Как я узнаю, что моя заявка на получение кредита одобрена?",
          text: "никак",
          open: false,
        },
        {
          id: 5,
          title: "В течение какого времени после одобрения заявки деньги будут перечислены на мой банковский счет?",
          text: "в течение дня",
          open: false,
        },
        {
          id: 6,
          title: "В какое время можно получить автокредит?",
          text: "Вы можете подать заявку в любое удобное для Вас время. Мы рассматриваем заявки ежедневно с 10:00 до 20:00, выдача кредита производится с понедельника по пятницу с 10:00 до 17:00",
          open: false,
        },
        {
          id: 7,
          title: "Взимаются ли компанией комиссии при оформлении и выдаче кредита",
          text: "da",
          open: false,
        },
        {
          id: 8,
          title: "Могу ли я получить кредит наличными?",
          text: "da",
          open: false,
        }
      ]
    }
  },
  methods: {
    toggleAccordion(itemId) {
      this.accordionItem.forEach((item) => {
        if (item.id === itemId) {
          item.open = !item.open;
        } else {
          item.open = false;
        }
      });
      this.accordionItemMobile.forEach((item) => {
        if (item.id === itemId) {
          item.open = !item.open;
        } else {
          item.open = false;
        }
      });
    },
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.accordion-sec {
  margin-top: 78px;
  margin-bottom: 204px;
  .accordion-flush .accordion-item .accordion-button, .accordion-flush .accordion-item .accordion-button.collapsed {
    border-radius: 20px;
    border: none;
    font-size: $medium-font-size;
  }
  .accordion-button:focus {
    box-shadow: none;
  }
  .accordion-item-mobile {
    display: none;
  }
  .accordion-item {
    border: none;
    background: #fff;
    border-radius: 22px;
    margin-bottom: 15px;
    button {
      span {
        max-width: 907px;
      }
    }
  }
  .accordion-button {
    display: flex;
    justify-content: space-between;
    padding: 21px 28px;
    button {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
      width: 45px;
      height: 45px;
    }
    &::after {
      display: none;
    }
  }
  .accordion-body {
    font-size: $small-font-size;
    line-height: $small-line-height;
    padding: 0 28px;
  }
  .accordion-sec-btn {
    display: none;
  }
}
@media (max-width: 568px) {
  .accordion-sec {
    margin-top: 34px;
    margin-bottom: 131px;
    .accordion {
      margin-bottom: 30px;
    }
    .accordion-flush .accordion-item .accordion-button, .accordion-flush .accordion-item .accordion-button.collapsed {
      border-radius: 20px;
      border: none;
      font-size: $tiny-font-size;
    }
    .accordion-button {
      padding: 16px 11px;
      img {
        width: 24px;
        height: 24px;
      }
    }
    .accordion-item {
      display: none;
    }
    .accordion-item-mobile {
      display: block;
      margin-bottom: 7px;
    }
    .accordion-body {
      font-size: 14px;
      line-height: 17px;
      padding: 0 11px;
    }
    .accordion-sec-btn {
      display: flex;
      justify-content: center;
      button {
        column-gap: 1px;
        padding: 6px 7px 5px 31px;
      }
    }
  }
}
</style>