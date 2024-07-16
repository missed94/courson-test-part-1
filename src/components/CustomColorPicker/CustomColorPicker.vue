<template>
  <div class="custom-color-picker form-group">
    <label for="color" class="custom-color-picker__label">{{ label }}</label>
    <input
        type="color"
        id="color"
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
      required: true
    },
    value: {
      type: String,
      default: "#000000",
    }
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>

<style scoped>
.custom-color-picker__label {
  display: block;
  margin-bottom: 0.5rem;
}

.custom-color-picker__input {
  width: 70px;
  height: 50px;
}

.custom-color-picker__label,
.custom-color-picker__input {
  cursor: pointer;
}

</style>
