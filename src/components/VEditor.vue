<script lang="ts" setup>
import CKEditor from "@ckeditor/ckeditor5-vue";
import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { Bold, Italic } from "@ckeditor/ckeditor5-basic-styles";
import { Link } from "@ckeditor/ckeditor5-link";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { Autoformat } from "@ckeditor/ckeditor5-autoformat";
import { List } from "@ckeditor/ckeditor5-list";
import { CustomMarkdown } from "../../plugins/ckeditor5-markdown-gfm";

const props = defineProps<{
  modelValue: string;
  withoutMarkdown?: boolean;
}>();
defineEmits<{
  (e: "update:model-value", value: string): void;
}>();

const editorConfig = {
  plugins: [
    Autoformat,
    Essentials,
    Bold,
    Italic,
    Link,
    Paragraph,
    List,
    ...(props.withoutMarkdown ? [] : [CustomMarkdown]),
  ],
  toolbar: {
    items: [
      "bulletedList",
      "numberedList",
      "bold",
      "italic",
      "link",
      "undo",
      "redo",
    ],
  },
};
</script>
<template>
  <div class="test">
    <CKEditor.component
      :editor="ClassicEditor"
      :model-value="modelValue"
      @update:model-value="$emit('update:model-value', $event)"
      :config="editorConfig"
    />
    <pre>"{{ modelValue.replace(/\n/g, "\\n") }}"</pre>
  </div>
</template>

<style>
.test {
  width: 800px;
}
</style>
