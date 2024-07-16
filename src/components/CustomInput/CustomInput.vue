<template>
  <div class="custom-input">
    <label for="text-input" class="custom-input__label">{{ label }}</label>
    <input
      id="text-input"
      class="custom-input__input"
      :type="type" :value="value"
      :placeholder="placeholder"
      @input="updateValue" />
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "Enter value"
    }
  },
  methods: {
    updateValue(e) {
      this.$emit("input", e.target.value);
    }
  },
};
</script>

<style scoped>
.custom-input__label {
  display: block;
  margin-bottom: 0.5rem;
}

.custom-input__input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
