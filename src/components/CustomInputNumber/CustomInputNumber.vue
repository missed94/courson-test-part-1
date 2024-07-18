<template>
  <div class="custom-input-number">
    <label v-if="label" class="d-block mb-2">{{ label }}</label>
    <div class="d-flex align-items-center">
      <input
        class="custom-input-number__input form-control p-2 w-100 me-1"
        type="number"
        :value="value"
        :placeholder="placeholder"
        :min="min"
        :max="max"
        :step="step"
        @input="updateValue"
      />
      <button
        type="button"
        class="custom-input-number__button p-2"
        @click="decrement"
      >
        -
      </button>
      <button
        type="button"
        class="custom-input-number__button p-2"
        @click="increment"
      >
        +
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomInputNumber",
  props: {
    label: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number],
      default: "",
    },
    placeholder: {
      type: String,
      default: "Enter value",
    },
    min: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    updateValue(e) {
      this.$emit("input", e.target.value);
    },
    increment() {
      if (this.value < this.max) {
        this.$emit("input", this.value + 1);
      }
    },
    decrement() {
      if (this.value > this.min) {
        this.$emit("input", this.value - 1);
      }
    },
  },
};
</script>

<style scoped>
.custom-input-number__input {
  border: 1px solid #ccc;
  border-radius: 4px;
}

.custom-input-number__button {
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
  cursor: pointer;
  width: 30px;
}

.custom-input-number__button:hover {
  background-color: #e0e0e0;
}
</style>
