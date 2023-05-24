<template>
  <jc-header />
  <jc-services />
  <jc-quiz />
  <jc-purchase-information />
  <jc-getting-loan />
  <jc-credit-conditions />
  <jc-credit-registration />
  <jc-about-company />
  <jc-questions />
  <jc-contacts />
  <jc-footer />
</template>

<script>
import JcServices from "@/components/JC-Services";
import JcQuiz from "@/components/JC-Quiz";
import JcPurchaseInformation from "@/components/JC-PurchaseInformation";
import JcGettingLoan from "@/components/JC-GettingLoan";
import JcCreditConditions from "@/components/JC-CreditConditions";
import JcCreditRegistration from "@/components/JC-CreditRegistration";
import JcAboutCompany from "@/components/JC-AboutCompany";
import JcQuestions from "@/components/JC-Questions";
import JcContacts from "@/components/JC-Contacts";
import JcFooter from "@/components/UI/JC-Footer";
export default {
  name: "jc-main-page",
  components: {
    JcFooter,
    JcContacts,
    JcQuestions,
    JcAboutCompany,
    JcCreditRegistration,
    JcCreditConditions,
    JcGettingLoan,
    JcPurchaseInformation,
    JcQuiz,
    JcServices,
  },
}
</script>