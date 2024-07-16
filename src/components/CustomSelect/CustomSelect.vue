<template>
  <div class="custom-select">
    <label for="select" class="custom-select__label">{{ label }}</label>
    <div class="dropdown">
      <input
        id="select"
        class="custom-select__input form-control"
        ref="input"
        type="text"
        placeholder="Search..."
        v-model="searchQuery"
        @input="onInput"
        @focus="showDropdown = true"
        @blur="showDropdown = false"
      />
      <div class="dropdown-menu overflow-y-scroll" :class="{ show: showDropdown }">
        <div v-if="loading" class="dropdown-item">Loading...</div>
        <div v-else>
          <div
            v-for="option in filteredOptions"
            :key="option.value"
            class="dropdown-item"
            @mousedown.prevent="selectOption(option)"
          >
            {{ option.text }}
          </div>
          <div v-if="!filteredOptions.length" class="dropdown-item">No matches found</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomSelect",
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      default: ""
    },
    loading: {
      type: Boolean,
      default: false,
    },
    isDynamic: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      searchQuery: "",
      showDropdown: false,
    };
  },
  computed: {
    filteredOptions() {
      if (this.isDynamic) {
        return this.options;
      }
      return this.options.filter(option =>
        option.text.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  watch: {
    value(newVal) {
      if (!newVal) {
        this.searchQuery = "";
      }
    },
  },
  methods: {
    onInput() {
      if (!this.isDynamic) return
      this.$emit("search", this.searchQuery);
    },
    selectOption(option) {
      this.$emit("input", option.value);
      this.searchQuery = option.text;
      this.showDropdown = false;
      this.$refs.input.blur();
    },
  }
};
</script>

<style scoped>
.custom-select__label{
  display: block;
  margin-bottom: 0.5rem;
}

.dropdown-menu {
  width: 100%;
  max-height: 200px;
}

.dropdown-item {
  cursor: pointer;
}
</style>
