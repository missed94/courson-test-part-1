<template>
  <div class="custom-radio__radio-group">
    <div
      v-for="input in options"
      :key="input.value"
      class="custom-radio d-flex flex-grow-1 align-items-center p-2"
      :class="{ __checked: value === input.value }"
      @click="onInput(input.value)"
    >
      <slot name="label" :label="input.text" :value="input.value">
        <div class="custom-radio__label me-2">{{ input.text }}</div>
      </slot>
      <div class="custom-radio__box ms-auto"></div>
      <input
        type="radio"
        :name="name"
        :checked="value === input.value"
        style="display: none"
        @change="onInput(input.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomRadio",
  props: {
    name: { type: String, default: "" },
    value: { type: [String, Boolean], default: "" },
    options: { type: Array, required: true },
  },
  methods: {
    onInput(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style scoped>
.custom-radio__radio-group {
  display: flex;
  gap: 8px;
}

.custom-radio {
  min-height: 24px;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  cursor: pointer;
}

.custom-radio__box {
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 12px;
  border: 1px solid #d3d3d3;
  cursor: pointer;
}

.custom-radio__box:after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  background-color: #0d6efd;
}

.custom-radio.__checked .custom-radio__box {
  border-color: #0d6efd;
}

.custom-radio.__checked .custom-radio__box:after {
  width: 10px;
  height: 10px;
  margin-left: -5px;
  margin-top: -5px;
}

.custom-radio:hover .custom-radio__box {
  border-color: #0d6efd;
}

.custom-radio.__checked,
.custom-radio:hover {
  background-color: #f5f5f5;
}
</style>
