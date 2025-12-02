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

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';

const { counter, squareCounter } = useCounter();
// import { ref, computed } from 'vue';

// definimos como variable el definir como queremos o de que tipo queremos que sea el valor y con esa estructura le decimos que obligatoriamente tiene que ser un numero
// interface Props {
//   value: number;
// }
// const props = defineProps<Props>();

// las ref se pueden modificar desde las devtools de el localhost
// Pedimos el valor de la constante props
// const counter = ref(props.value);
// // Los computed no se pueden modificar desde las devtools de el localhost, ya que al poner computed indicamos que es un valor de lectura
// const squareCounter = computed(() => counter.value * counter.value);
</script>
