<template>
  <section class="quiz">
    <div class="quiz__row">
      <div class="container">
        <jc-quiz-first-step
            :number-step="numberStep"
            :progress="progress"
            :current-step="currentStep"
            @update-progress="updateProgress"
            @next-step="nextStep"
            @selected-amount="selectedAmount"
            v-if="currentStep === 'first'"
        />
        <jc-quiz-second-step
            :number-step="numberStep"
            :progress="progress"
            :current-step="currentStep"
            @update-progress="updateProgress"
            @decrease-progress="decreaseProgress"
            @prev-step="prevStep"
            @next-step="nextStep"
            @entered-values="enteredValues"
            v-else-if="currentStep === 'second'"
        />
        <jc-quiz-third-step
            :number-step="numberStep"
            :progress="progress"
            :current-step="currentStep"
            @update-progress="updateProgress"
            @decrease-progress="decreaseProgress"
            @prev-step="prevStep"
            @next-step="nextStep"
            @input-data-and-select="inputDataAndSelect"
            v-else-if="currentStep === 'third'"
        />
        <jc-quiz-end-step
          :progress="progress"
          v-else-if="currentStep === 'fourth'"
        />
      </div>
    </div>
  </section>
</template>

<script>
import JcQuizFirstStep from "@/components/JC-QuizFirstStep";
import JcQuizSecondStep from "@/components/JC-QuizSecondStep";
import JcQuizThirdStep from "@/components/JC-QuizThirdStep";
import JcQuizEndStep from "@/components/JC-QuizEndStep";
export default {
  name: "jc-quiz",
  components: {
    JcQuizEndStep,
    JcQuizThirdStep,
    JcQuizSecondStep,
    JcQuizFirstStep,
  },
  data() {
    return {
      progress: 0,
      numberStep: 3,
      currentStep: "first",
      allInfo: [],
    };
  },
  methods: {
    updateProgress(newProgress) {
      this.progress = newProgress;
    },
    decreaseProgress(newProgress) {
      this.progress = newProgress;
    },
    prevStep(data) {
      this.currentStep = data;
    },
    nextStep(data) {
      this.currentStep = data;
    },
    selectedAmount(data) {
      this.allInfo.push(data);
    },
    enteredValues(data) {
      this.allInfo.push(data);
    },
    inputDataAndSelect(data) {
      this.allInfo.push(data);
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.quiz {
  margin-bottom: 176px;
  .quiz__row {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.quiz-title {
  h2 {
    font-size: $title-font-size;
    line-height: $title-line-height;
    margin-bottom: 12px;
  }
  span {
    font-size: $tiny-font-size;
    line-height: $tiny-line-height;
    font-weight: 700;
  }
  span:nth-child(2) {
    color: $gray-color;
  }
}
.quiz-input {
  display: flex;
  flex-wrap: wrap;
  column-gap: 17px;
  row-gap: 17px;
  input {
    border: 1px solid #9E9E9E;
    border-radius: 30px;
    width: 320px;
    padding: 18px 30px 17px 33px;
    font-size: $small-font-size;
    line-height: $small-line-height;
    &::placeholder {
      font-size: $small-font-size;
      line-height: $small-line-height;
      color: #A7A7A7;
    }
  }
  .error-input {
    border: 1px solid $warning-color;
  }
}
.quiz__progress {
  &-title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    span {
      font-size: $small-font-size;
      line-height: $small-line-height;
    }
  }
  &-line {
    width: 100%;
    border: 1px solid $gray-color;
    height: 24px;
    border-radius: 20px;
    overflow: hidden;
    &-width {
      height: 100%;
      background-color: $green-color  ;
      transition: width 0.3s ease;
      border-radius: 20px;
    }
  }
}
.content-btn {
  display: flex;
  justify-content: space-between;
  margin-bottom: 26px;
}
.error {
  font-size: $tiny-font-size - 2px;
  line-height: $tiny-line-height - 3px;
  font-weight: 400;
  color: $warning-color;
  border: none;
}
</style>