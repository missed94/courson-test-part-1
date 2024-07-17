<template>
  <div class="base-layout">
    <HeaderComponent />
    <slot />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/Header";
import FooterComponent from "@/components/Footer";

export default {
  name: "BaseLayout",
  components: { HeaderComponent, FooterComponent },
};
</script>

<style scoped>
.base-layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
</style>
