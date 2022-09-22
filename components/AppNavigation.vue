<template>
    <div :class="classObject">
      {{ props.attributes.title }}
    </div>
</template>
<script setup>
const props = defineProps({
  attributes: {
    type: Object,
    required: true,
  },
});

const classObject = ref(props.attributes.inline);
</script>
