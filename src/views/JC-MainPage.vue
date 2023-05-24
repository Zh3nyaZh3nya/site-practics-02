<template>
  <jc-header />
  <jc-services />
  <jc-quiz />
</template>

<script>
import JcServices from "@/components/JC-Services";
import JcQuiz from "@/components/JC-Quiz";
export default {
  name: "jc-main-page",
  components: {
    JcQuiz,
    JcServices,
  },
}
</script>