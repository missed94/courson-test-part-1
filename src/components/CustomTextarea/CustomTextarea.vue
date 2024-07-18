<template>
  <div class="custom-textarea">
    <label v-if="label" class="d-block mb-2">{{ label }}</label>
    <textarea
      class="custom-textarea__input form-control"
      :value="value"
      :rows="rows"
      :placeholder="placeholder"
      @input="updateValue"
    />
  </div>
</template>

<script>
export default {
  name: "CustomTextarea",
  props: {
    label: {
      type: String,
      required: "",
    },
    value: {
      type: String,
      default: "",
    },
    rows: {
      type: Number,
      default: 3,
    },
    placeholder: {
      type: String,
      default: "Enter value",
    },
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>
