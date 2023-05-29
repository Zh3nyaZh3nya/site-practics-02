<template>
  <div class="third container">
    <div class="third__content row">
      <div class="third__content-title quiz-title">
        <h2>Введите ваши данные</h2>
        <span>Шаг 2 из 3. </span>
        <span>Получите +50% к одобрению, заполнив этот шаг</span>
      </div>
      <div class="third__content__row quiz-input">
        <input
            placeholder="Город проживания"
            type="text"
            v-model="cityResidential"
            :class="{'error-input': this.error === true}"
        />
        <input
            placeholder="Адрес проживания"
            type="text"
            v-model="addressResidential"
            :class="{'error-input': this.error === true}"
        />
        <input
            placeholder="Ваш доход"
            type="number"
            v-model="income"
            :class="{'error-input': this.error === true}"
        />
        <input
            placeholder="Удобный ежемес. платеж"
            type="number"
            v-model="monthlyPayment"
            :class="{'error-input': this.error === true}"
        />
        <div class="third__content__row__switch">
          <jc-switch-input @toggle-switch="toggleSwitch">
            <template v-slot:text>
              <h3>Уже нашли машину?</h3>
            </template>
          </jc-switch-input>
        </div>
        <span class="error" v-show="this.error === true">Заполните все поля</span>
      </div>
      <div class="third__content__row__other" v-show="visibleSelect">
        <div class="third__content__row__other__selects quiz-input">
          <div
              class="third__content__row__other__selects__mark"
              v-for="mark in selectMark"
              :key="mark.id"
          >
            <div
                class="third__content__row__other__selects__mark-title select-title"
                @click="visibleSelectMark = !visibleSelectMark"
            >
              <span>{{mark.titleSelect}}</span>
              <img src="@/assets/image/svgIcon/arrowDown.svg" alt="">
            </div>
            <div class="third__content__row__other__selects__mark-select select" v-show="visibleSelectMark">
              <ul class="select__list">
                <li
                    v-for="option in mark.optionSelect"
                    :key="option.id"
                    @click="selectFilter = option.optionName, visibleSelectMark = false"
                    class="select__list-item"
                >
                  {{option.optionName}}
                </li>
              </ul>
            </div>
          </div>
          <div
              class="third__content__row__other__selects__model"
              v-for="model in selectModel"
              :key="model.id"
          >
            <div
                class="third__content__row__other__selects__model-title select-title"
                v-if="selectFilter.length"
                @click="visibleSelectModel = !visibleSelectModel"
            >
              <span>{{model.titleSelect}}</span>
              <img src="@/assets/image/svgIcon/arrowDown.svg" alt="">
            </div>
            <div
                class="third__content__row__other__selects__model-select"
                v-for="options in model.optionSelect"
                :key="options.id"
                v-show="visibleSelectModel"
            >
              <ul class="select__list" v-if="options.optionFilter === selectFilter">
                <li
                    v-for="option in options.options"
                    :key="option.id"
                    @click="selectOptionModel = option.optionName, visibleSelectModel = false"
                    class="select__list-item"
                >
                  {{option.optionName}}
                </li>
              </ul>
            </div>
          </div>
          <div
              class="third__content__row__other__selects__year"
              v-for="year in selectYear"
              :key="year.id"
          >
            <div
                class="third__content__row__other__selects__year-title select-title"
                v-if="selectFilter.length"
                @click="visibleSelectYear = !visibleSelectYear"
            >
              <span>{{year.titleSelect}}</span>
              <img src="@/assets/image/svgIcon/arrowDown.svg" alt="">
            </div>
            <div
                class="third__content__row__other__selects__year__models"
                v-for="options in year.optionSelect"
                :key="options.id"
                v-show="visibleSelectYear"
            >
              <ul class="select__list" v-if="options.optionFilter === selectFilter">
                <li
                    v-for="option in options.options"
                    :key="option.id"
                    @click="selectOptionYear = option.optionName, visibleSelectYear = false"
                    class="select__list-item"
                >
                  {{option.optionName}}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="third__content-btn">
        <jc-button class="left" style="column-gap: 30px" @click="decreaseProgress">
          <template v-slot:img>
            <img src="@/assets/image/svgIcon/arrow-left.svg" alt="arrow">
          </template>
          <template v-slot:text>
            <span>Назад</span>
          </template>
        </jc-button>
        <jc-button style="column-gap: 30px" @click="increaseProgress">
          <template v-slot:img>
            <img src="@/assets/image/svgIcon/arrow-right.svg" alt="arrow">
          </template>
          <template v-slot:text>
            <span>Далее</span>
          </template>
        </jc-button>
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
  name: "jc-quiz-third-step",
  props: {
    progress: {
      type: Number,
      default: 0,
    },
    numberStep: {
      type: Number,
      default: 0,
    },
    currentStep: {
      type: String,
      default: "",
    }
  },
  data() {
    return {
      selectMark: [
        {
          id: 1,
          titleSelect: "Марка автомобиля",
          optionSelect: [
            {
              id: 1,
              optionName: "Toyota",
            },
            {
              id: 2,
              optionName: "Audi",
            },
            {
              id: 3,
              optionName: "Hyundai",
            },
          ]
        }
      ],
      selectModel: [
        {
          id: 1,
          titleSelect: "Модель автомобиля",
          optionSelect: [
            {
              id: 1,
              optionFilter: "Toyota",
              options: [
                {
                  id: 1,
                  optionName: "Mark",
                },
                {
                  id: 2,
                  optionName: "Chaser",
                },
              ]
            },
            {
              id: 2,
              optionFilter: "Audi",
              options: [
                {
                  id: 1,
                  optionName: "A8",
                },
                {
                  id: 2,
                  optionName: "R8",
                },
              ]
            },
            {
              id: 3,
              optionFilter: "Hyundai",
              options: [
                {
                  id: 1,
                  optionName: "Accent",
                },
              ]
            },
          ]
        }
      ],
      selectYear: [
        {
          id: 1,
          titleSelect: "Год производства",
          optionSelect: [
            {
              id: 1,
              optionFilter: "Toyota",
              options: [
                {
                  id: 1,
                  optionName: "1997",
                },
                {
                  id: 2,
                  optionName: "1995",
                },
              ]
            },
            {
              id: 2,
              optionFilter: "Audi",
              options: [
                {
                  id: 1,
                  optionName: "2015",
                },
                {
                  id: 2,
                  optionName: "2014",
                },
              ]
            },
            {
              id: 3,
              optionFilter: "Hyundai",
              options: [
                {
                  id: 1,
                  optionName: "2008",
                },
                {
                  id: 2,
                  optionName: "2002",
                },
              ]
            },
          ]
        }
      ],
      visibleSelect: false,
      visibleSelectMark: false,
      visibleSelectModel: false,
      visibleSelectYear: false,
      error: false,
      selectFilter: "",
      selectOptionModel: "",
      selectOptionYear: "",
      cityResidential: "",
      addressResidential: "",
      income: "",
      monthlyPayment: "",
      enteredValues: {},
      selectedValues: [],
    }
  },
  methods: {
    toggleSwitch(data) {
      this.visibleSelect = data;
    },
    combineValuesAndEmit() {
      const inputDataAndSelect = {
        cityResidential: this.cityResidential,
        addressResidential: this.addressResidential,
        income: this.income,
        monthlyPayment: this.monthlyPayment,
        selectValue: {
          selectCar: this.selectFilter,
          selectModel: this.selectOptionModel,
          selectYear: this.selectOptionYear,
        }
      };
      this.$emit("input-data-and-select", inputDataAndSelect);
    },
    increaseProgress() {
      if (this.progress < 100) {
        const newProgress = Math.floor(this.progress + 100 / this.numberStep) + 1;
        const nextStep = "fourth";
        this.error = true;
        if(this.cityResidential > "" && this.addressResidential > "" && this.income > 4 && this.monthlyPayment > 4) {
          this.error = false;
          this.combineValuesAndEmit();
          this.$emit("update-progress", newProgress);
          this.$emit("next-step", nextStep)
        }
      }
    },
    decreaseProgress() {
      if (this.progress > 0 && this.progress <= 100) {
        const newProgress = Math.ceil(this.progress - 100 / this.numberStep);
        const prevStep = "second";
        this.$emit("decrease-progress", newProgress);
        this.$emit("prev-step", prevStep)
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.third {
  padding: 43px 69px 50px 72px;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, .2);
  border-radius: 70px;
  .third__content {
    &-title {
      margin-bottom: 28px;
    }
    &__row {
      margin-bottom: 17px;
      display: flex;
      align-items: center;
      &__other {
        margin-bottom: 30px;
      }
    }
    &-btn {
      display: flex;
      justify-content: space-between;
      margin-bottom: 26px;
    }
  }
}
.select-title {
  display: flex;
  justify-content: space-between;
  padding: 18px 20px 18px 34px;
  border: 1px solid $gray-color;
  border-radius: 30px;
  width: 320px;
  span {
    font-weight: 500;
    font-size: $small-font-size;
    line-height: $small-line-height;
  }
  img {
    transition: transform 0.3s;
    transform: rotate(0deg);
    &.rotate {
      transform: rotate(180deg);
    }
  }
}
.select__list {
  padding: 18px 0px 14px 0;
  border: 1px solid $gray-color;
  border-radius: 30px;
  text-align: center;
  &-item {
    font-size: $small-font-size - 2px;
    line-height: $tiny-line-height;
    font-weight: 500;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
      transition: ease all .3s;
      color: $gray-color;
    }
  }
}
@media (max-width: 769px) {
  .third {
    padding: 24px 9px 37px 9px;
    border-radius: 20px;
    .third__content {
      &__row {
        margin-bottom: 17px;
        display: flex;
        align-items: center;
        &__other {
          margin-bottom: 30px;
        }
      }
      &-btn {
        order: 3;
        button {
          padding-left: 19px;
        }
      }
    }
  }
}
</style>