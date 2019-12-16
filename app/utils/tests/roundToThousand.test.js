/**
 * Test roundToThousand
 */
import roundToThousand from '../roundToThousand';
describe('roundToThousand()', () => {
  it('Expect to return K formatted number', () => {
    const a = roundToThousand(3200);
    expect(a).toEqual('3.2K');
    const b = roundToThousand(-32);
    expect(b).toEqual('-32');
  });
});
