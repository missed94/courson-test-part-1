<template>
  <div class="custom-input">
    <label v-if="label" class="d-block mb-2">{{ label }}</label>
    <input
      class="custom-input__input form-control p-2 w-100"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @input="updateValue"
    />
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Enter value",
    },
  },
  methods: {
    updateValue(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style scoped>
.custom-input__input {
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
