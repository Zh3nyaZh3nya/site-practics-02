<template>
  <jc-header />
  <jc-services />
  <jc-quiz />
  <jc-purchase-information />
  <jc-getting-loan />
</template>

<script>
import JcServices from "@/components/JC-Services";
import JcQuiz from "@/components/JC-Quiz";
import JcPurchaseInformation from "@/components/JC-PurchaseInformation";
import JcGettingLoan from "@/components/JC-GettingLoan";
export default {
  name: "jc-main-page",
  components: {
    JcGettingLoan,
    JcPurchaseInformation,
    JcQuiz,
    JcServices,
  },
}
</script>