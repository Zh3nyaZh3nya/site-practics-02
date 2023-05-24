<template>
  <jc-header />
  <jc-services />
  <jc-quiz />
  <jc-purchase-information />
  <jc-getting-loan />
  <jc-credit-conditions />
</template>

<script>
import JcServices from "@/components/JC-Services";
import JcQuiz from "@/components/JC-Quiz";
import JcPurchaseInformation from "@/components/JC-PurchaseInformation";
import JcGettingLoan from "@/components/JC-GettingLoan";
import JcCreditConditions from "@/components/JC-CreditConditions";
export default {
  name: "jc-main-page",
  components: {
    JcCreditConditions,
    JcGettingLoan,
    JcPurchaseInformation,
    JcQuiz,
    JcServices,
  },
}
</script>