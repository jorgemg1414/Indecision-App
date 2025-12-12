<script setup lang="ts">
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import ChatBubble from './ChatBubble.vue';
import { ref, watch, nextTick } from 'vue';

interface Props {
  messages: ChatMessage[];
}

const { messages } = defineProps<Props>();
const chatRef = ref<HTMLElement | null>(null);

watch(
  () => messages,
  () => {
    nextTick(() => {
      chatRef.value?.scrollTo({
        top: chatRef.value.scrollHeight,
        behavior: 'smooth',
      });
    });
  },
  { deep: true },
);
</script>

<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />
    </div>
  </div>
</template>
