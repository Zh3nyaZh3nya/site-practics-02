<template>
  <section class="quiz">
    <div class="quiz__row">
      <div class="container">
        <jc-quiz-first-step
            :number-step="numberStep"
            :progress="progress"
            :current-step="currentStep"
            @update-progress="updateProgress"
            @update-step="updateStep"
            @selected-values="selectedValues"
            v-if="currentStep === 'first'"
        />
        <jc-quiz-second-step
            :number-step="numberStep"
            :progress="progress"
            :current-step="currentStep"
            @update-progress="updateProgress"
            @update-step="updateStep"
            @selected-values="selectedValues"
            v-else-if="currentStep === 'second'"
        />
        <jc-quiz-third-step
            :number-step="numberStep"
            :progress="progress"
            :current-step="currentStep"
            @update-progress="updateProgress"
            @update-step="updateStep"
            @selected-values="selectedValues"
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
    updateStep(data) {
      this.currentStep = data;
    },
    selectedValues(data) {
      this.allInfo.push(data);
    },
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
@media(max-width: 568px) {
  .quiz {
    margin-bottom: 59px;
  }
  .quiz-title {
    h2 {
      font-size: 36px;
      line-height: 44px;
      margin-bottom: 12px;
      font-weight: 500;
    }
    span {
      font-size: 14px;
      line-height: 17px;
      font-weight: 700;
    }
    span:nth-child(2) {
      color: $gray-color;
    }
  }
  .quiz__progress {
    padding: 0 19px 0 13px;
    margin-bottom: 27px;
    &-title {
      margin-bottom: 8px;
      padding: 0 1px 0 4px;
      span {
        font-size: 14px;
        line-height: 17px;
      }
      span:last-child {
        font-size: 16px;
      }
    }
  }
}
.quiz__progress {
  position: relative;
  order: 2;
  //margin-bottom: 25px;
}
</style>