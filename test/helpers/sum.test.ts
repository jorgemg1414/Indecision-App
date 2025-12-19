import { describe, expect, test } from 'vitest';
import { sum, addArray } from '../../src/helpers/sum.ts';

describe('add function', () => {
  test('adds 1 + 2 to equal 3', () => {
    // Preparación
    const a = 1;
    const b = 2;

    // Estímulo
    const result = sum(a, b);

    // El comportamiento esperado
    expect(result).toBe(a + b);

    //   if ((sum(1, 2) === 3)) {
    //   throw new Error('La suma no es correcta');
    // }
  });
});

describe('addArrary Function', () => {
  test('Should return 0 if the array is empty', () => {
    const numberArray = [];

    const result = addArray(numberArray);
    console.log({ result });

    expect(result).toBe(0);
  });

  test('Should return the proper value of the addArray function', () => {
    const numberArray = [1, 2, 3, 4, 5];

    const result = addArray(numberArray);
    console.log({ result });

    expect(result).toBe(15);
  });
});
