import { exampleTestedFunction, exampleUntestedFunction } from '../home/example';

describe('Example', () => {
  it('runs test', () => {
    // Given
    const one = 1;

    // When
    exampleTestedFunction();

    // Then
    expect(one).toEqual(1);
  });
  it('runs second test', () => {
    // Given
    const one = 1;

    // When
    exampleUntestedFunction();

    // Then
    expect(one).toEqual(1);
  });
});
