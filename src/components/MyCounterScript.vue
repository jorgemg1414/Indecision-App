<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <!-- Indicamos que al hacer click en el botton el counter sumará 1 y viceversa con el otro -->
      <button @click="counter++">+1</button>
      <button @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';

export default defineComponent({
  // El props es para definir de que tipo van a ser los valores, y el required es que tiene que ser cierto para que no de undefinied
  props: {
    value: { type: Number, required: true },
  },

  setup(props) {
    const counter = ref(props.value);
    const squareCounter = computed(() => counter.value * counter.value);

    return {
      counter,
      squareCounter,
    };
  },
});
</script>
