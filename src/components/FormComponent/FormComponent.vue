<template>
  <div class="form-component">
    <form
      class="form-component__form"
      @submit.prevent="handleSubmit"
      @reset.prevent="resetForm"
    >
      <CustomInput class="mb-4" label="Text" v-model="formData.textInput" />
      <CustomInputNumber
        class="mb-4"
        label="Number"
        :min="1"
        v-model="formData.numberInput"
      />
      <CustomTextarea
        class="mb-4"
        label="Textarea"
        v-model="formData.textareaInput"
      />
      <CustomCheckbox
        class="mb-4"
        label="Checkbox"
        v-model="formData.checkbox"
      />
      <CustomRadio
        class="mb-4"
        name="radioGroup"
        :options="radioOptions"
        v-model="formData.radio"
      />
      <CustomSelect
        class="mb-4"
        label="Static select"
        :options="staticOptions"
        v-model="formData.staticSelect"
      />
      <CustomSelect
        class="mb-4"
        label="Dynamic select"
        :options="dynamicOptions"
        :loading="loadingOptions"
        is-dynamic
        v-model="formData.dynamicSelect"
        @search="fetchDynamicOptions"
      />
      <CustomInputFile
        class="mb-4"
        label="File input"
        multiple
        v-model="formData.files"
      />
      <CustomColorPicker
        class="mb-4"
        label="ColorPicker"
        v-model="formData.color"
      />

      <button type="submit" class="form-component__btn btn btn-primary">
        Send
      </button>
      <button type="reset" class="form-component__btn btn btn-secondary">
        Reset
      </button>
    </form>
  </div>
</template>

<script>
import { debounce } from "lodash";
import CustomInput from "@/components/CustomInput";
import CustomCheckbox from "@/components/CustomCheckbox";
import CustomRadio from "@/components/CustomRadio";
import CustomSelect from "@/components/CustomSelect";
import CustomTextarea from "@/components/CustomTextarea";
import CustomInputFile from "@/components/CustomInputFile";
import CustomColorPicker from "@/components/CustomColorPicker";
import CustomInputNumber from "@/components/CustomInputNumber";

export default {
  name: "FormComponent",
  components: {
    CustomInput,
    CustomInputNumber,
    CustomCheckbox,
    CustomRadio,
    CustomSelect,
    CustomTextarea,
    CustomInputFile,
    CustomColorPicker,
  },
  data() {
    return {
      loadingOptions: false,
      formData: {
        textInput: "",
        textareaInput: "",
        numberInput: 1,
        checkbox: false,
        radio: "",
        staticSelect: "",
        dynamicSelect: "",
        color: "#000000",
        files: [],
      },
      radioOptions: [
        { value: "radio1", text: "Radio 1" },
        { value: "radio2", text: "Radio 2" },
      ],
      staticOptions: [
        { value: "option1", text: "Option 1" },
        { value: "option2", text: "Option 2" },
        { value: "option3", text: "Option 3" },
      ],
      dynamicOptions: [],
    };
  },
  methods: {
    resetForm() {
      this.formData = {
        textInput: "",
        textareaInput: "",
        numberInput: 1,
        checkbox: false,
        radio: null,
        staticSelect: "",
        dynamicSelect: "",
        color: "#000000",
        files: [],
      };
      this.dynamicOptions = [];
    },
    handleSubmit() {
      if (Object.values(this.formData).every((i) => !!i)) {
        alert("Form submitted");
        this.resetForm();
      } else {
        alert("All fields are required");
      }
    },
    fetchDynamicOptions: debounce(async function (text) {
      try {
        this.loadingOptions = true;
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?title_like=^${text}`
        );
        const data = await response.json();
        this.dynamicOptions = data.map((item) => ({
          value: item.id,
          text: item.title,
        }));
      } finally {
        this.loadingOptions = false;
      }
    }, 500),
  },
};
</script>

<style scoped>
.form-component {
  padding: 2rem 1rem;
}

.form-component__form {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-component__btn {
  margin-right: 1rem;
}
</style>
