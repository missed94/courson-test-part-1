<template>
  <div id="app">
    <BaseLayout>
      <FormComponent />
    </BaseLayout>
  </div>
</template>

<script>
import FormComponent from "@/components/FormComponent";
import BaseLayout from "@/components/BaseLayout";

export default {
  name: "App",
  components: {
    BaseLayout,
    FormComponent,
  },
};
</script>
