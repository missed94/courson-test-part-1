<template>
  <div class="custom-color-picker form-group">
    <label v-if="label" class="d-block mb-2">{{ label }}</label>
    <input
      type="color"
      class="custom-color-picker__input form-control"
      :value="value"
      @input="updateValue"
    />
  </div>
</template>

<script>
export default {
  name: "CustomColorPicker",
  props: {
    label: {
      type: String,
      required: "",
    },
    value: {
      type: String,
      default: "#000000",
    },
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style scoped>
.custom-color-picker__input {
  width: 70px;
  height: 50px;
}

.custom-color-picker__input {
  cursor: pointer;
}
</style>
