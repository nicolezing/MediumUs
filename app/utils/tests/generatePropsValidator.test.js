/**
 * Test generatePropsValidator
 */
import 'jest-dom/extend-expect';
import generatePropsValidator from '../generatePropsValidator';

describe('generatePropsValidator()', () => {
  it('Expect to return error if wrong parameter entered', () => {
    expect(() => generatePropsValidator()).toThrow();
  });

  it('Expect generator to fail with invalid requiredType input', () => {
    expect(() => generatePropsValidator(['A'], 'str')).toThrow();
  });

  it('Expect generator to fail if no dependency is provided', () => {
    expect(() => generatePropsValidator([], 'string')).toThrow();
  });

  it('Expect to return error if A is true, but B is not provided', () => {
    expect(
      generatePropsValidator(['A'], 'string')(
        { A: true },
        'B',
        'test component',
      ),
    ).toBeInstanceOf(Error);
  });

  it('Expect to have no error if dependencies are not true, and B is not provided', () => {
    const spy = jest.spyOn(global.console, 'error');
    generatePropsValidator(['A'], 'string')(
      { A: true, D: false },
      'B',
      'test component',
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to return error if A is true, B is provided with wrong type', () => {
    expect(
      generatePropsValidator(['A'], 'string')(
        { A: true, B: 2 },
        'B',
        'test component',
      ),
    ).toBeInstanceOf(Error);
  });
});
