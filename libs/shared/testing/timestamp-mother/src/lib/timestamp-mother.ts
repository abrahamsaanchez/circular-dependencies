import { Timestamp } from '@circular-dependencies/shared/domain/timestamp';

export class TimestampMother {
  public static random() {
    // Some logic to generate a random timestamp
    return new Timestamp(new Date());
  }
}
