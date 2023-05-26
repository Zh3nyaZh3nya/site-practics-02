<template>
  <jc-header />
  <jc-services />
  <jc-quiz />
  <jc-tabs />
  <jc-credit-registration />
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
import JcTabs from "@/components/JC-Tabs";
export default {
  name: "jc-main-page",
  components: {
    JcTabs,
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