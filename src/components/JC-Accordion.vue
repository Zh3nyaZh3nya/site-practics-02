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
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample"             :class="{ show: item.open }"
          >
            <div class="accordion-body">
              {{item.text}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "jc-accordion",
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
    },
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.accordion-sec {
  margin-top: 70px;
  margin-bottom: 175px;
  .accordion-flush .accordion-item .accordion-button, .accordion-flush .accordion-item .accordion-button.collapsed {
    border-radius: 20px;
    border: none;
    font-size: 24px;
  }
  .accordion-item {
    border: none;
    background: #fff;
    border-radius: 22px;
    button {
      span {
        max-width: 907px;
      }
    }
  }
  .accordion-button {
    padding: 28px;
    &::after {
      background-image: url("@/assets/image/svgIcon/plus.svg");
      background-size: cover;
      width: 45px;
      height: 45px;
    }
  }
  .accordion-body {
    font-size: $small-font-size;
    line-height: $small-line-height;
    padding: 0 28px;
  }
}
</style>