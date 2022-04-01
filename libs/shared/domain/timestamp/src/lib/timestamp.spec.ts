import { TimestampMother } from '@circular-dependencies/shared/testing/timestamp-mother';
import { Timestamp } from './timestamp';

describe('timestamp', () => {
  it('should work', () => {
    // Generate a random timestamp
    const timestamp = TimestampMother.random();

    expect(timestamp).toBeInstanceOf(Timestamp);
  });
});
