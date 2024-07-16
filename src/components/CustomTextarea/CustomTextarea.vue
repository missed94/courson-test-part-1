<template>
  <div class="custom-textarea">
    <label for="textarea" class="custom-textarea__label">{{ label }}</label>
    <textarea
      id="textarea"
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
      required: true
    },
    value: {
      type: String,
      default: ""
    },
    rows: {
      type: Number,
      default: 3
    },
    placeholder: {
      type: String,
      default: "Enter value"
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
.custom-textarea__label{
  display: block;
  margin-bottom: 0.5rem;
}
</style>
