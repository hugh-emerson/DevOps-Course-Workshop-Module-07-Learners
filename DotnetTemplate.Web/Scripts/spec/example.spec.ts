import { exampleTestedFunction } from '../home/example';

describe('Example', () => {
  it('runs test', () => {
    // Given
    const one = 1;

    // When
    exampleTestedFunction();

    // Then
    expect(one).toEqual(1);
  });
});
