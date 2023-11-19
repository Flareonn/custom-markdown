<script setup lang="ts">
import { ref } from "vue";
import VEditor from "../components/VEditor.vue";
import { useRouter } from "vue-router";

const { push, currentRoute } = useRouter();
const saveQuery = (value: string) => {
  push({
    query: {
      input: value,
    },
  });
};
const test = ref<string>(currentRoute.value.query.input?.toString() || "");
</script>
<template>
  <VEditor v-model="test" @update:model-value="saveQuery" />
  <!-- <VEditor v-model="test" without-markdown @update:model-value="saveQuery" /> -->
</template>
