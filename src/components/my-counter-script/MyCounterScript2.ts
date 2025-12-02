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
