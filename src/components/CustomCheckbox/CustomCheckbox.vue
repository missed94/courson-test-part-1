<template>
  <div class="custom-checkbox" @click.stop="click">
    <div class="custom-checkbox__label d-flex align-items-center">
      <div
        class="custom-checkbox__box d-flex flex-shrink-0 align-items-center justify-content-center position-relative me-2"
      >
        <svg
          v-if="value"
          width="19"
          height="15"
          viewBox="0 0 19 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="custom-checkbox__checked"
            d="M2 5.92857L8 12L17 2"
            stroke-width="3"
          />
        </svg>
      </div>
      <input
        class="custom-checkbox__input mr-2"
        type="checkbox"
        ref="checkbox"
        :checked="value"
        style="display: none"
        @input="emitChange"
      />
      <span v-if="label">{{ label }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomCheckbox",
  props: {
    label: {
      type: String,
      default: "",
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    emitChange(e) {
      this.$emit("input", e.target.checked);
    },
    click() {
      this.$refs.checkbox.click();
    },
  },
};
</script>

<style scoped>
.custom-checkbox__label {
  cursor: pointer;
}

.custom-checkbox__box {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: 1px solid #d3d3d3;
  background-color: #f5f5f5;
}

.custom-checkbox__checked {
  stroke: #0d6efd;
}
</style>
