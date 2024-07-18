<template>
  <div class="custom-input-file form-group">
    <label v-if="label" class="d-block mb-2">{{ label }}</label>
    <input
      class="form-control"
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
      required: "",
    },
    value: {
      type: Array,
      default: () => [],
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    updateValue(event) {
      event.stopPropagation();
      const element = event.target;
      const files = element.files ? Array.from(element.files) : [];
      if (!files.length) return;
      this.$emit("input", files);
    },
  },
};
</script>
