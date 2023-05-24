<template>
  <jc-header />
  <jc-services />
  <jc-quiz />
  <jc-purchase-information />
</template>

<script>
import JcServices from "@/components/JC-Services";
import JcQuiz from "@/components/JC-Quiz";
import JcPurchaseInformation from "@/components/JC-PurchaseInformation";
export default {
  name: "jc-main-page",
  components: {
    JcPurchaseInformation,
    JcQuiz,
    JcServices,
  },
}
</script>