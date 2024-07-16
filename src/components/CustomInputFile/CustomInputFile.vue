<template>
  <div class="custom-input-file form-group">
    <label for="file" class="custom-input-file__label">{{ label }}</label>
    <input
        class="form-control"
        id="file"
        ref="input"
        type="file"
        :files="value"
        :multiple="multiple"
        @change="updateValue"
    />
  </div>
</template>

<script>
export default {
  name: "CustomInputFile",
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: Array,
      default: () => [],
    },
    multiple: {
      type: Boolean,
      default: false,
    }
  },

  methods: {
    updateValue(event) {
      event.stopPropagation();
      const element = event.target
      const files = element.files
          ? Array.from(element.files)
          : [];
      if (!files.length) return;
      this.$emit("input", files);
    }
  }
};
</script>

<style scoped>
.custom-input-file__label {
  display: block;
  margin-bottom: 0.5rem;
}
</style>
