import { Item } from "./gilded-rose";
import {
  QualityContex,
  IncreaseQuality,
  DecreaseQuality,
} from "./QualityContex";

// Update Operations
export interface UpdateStratergy {
  updatedItem(item: Item): void;
}

export class UpdateBackstagePasses implements UpdateStratergy {
  updatedItem(item: Item): void {
    const qualityContex = new QualityContex(new IncreaseQuality());

    if (item.sellIn === 0) item.quality = 0;

    qualityContex.executeStrategy(item);

    if (item.sellIn < 11) qualityContex.executeStrategy(item);

    if (item.sellIn < 6) qualityContex.executeStrategy(item);
  }
}

export class UpdateAgedBrie implements UpdateStratergy {
  updatedItem(item: Item): void {
    const qualityContex = new QualityContex(new IncreaseQuality());

    qualityContex.executeStrategy(item);

    if (item.sellIn < 0) qualityContex.executeStrategy(item);
  }
}

export class UpdateConjured implements UpdateStratergy {
  updatedItem(item: Item): void {
    const qualityContex = new QualityContex(new IncreaseQuality());

    qualityContex.executeStrategy(item);
    qualityContex.executeStrategy(item);

    if (item.sellIn < 0) qualityContex.executeStrategy(item);
  }
}

export class UpdateNormal implements UpdateStratergy {
  updatedItem(item: Item): void {
    const qualityContex = new QualityContex(new DecreaseQuality());

    qualityContex.executeStrategy(item);

    if (item.sellIn < 0) {
      qualityContex.executeStrategy(item);
    }
  }
}

export class UpdateContex {
  private strategy: UpdateStratergy;

  constructor(strategy: UpdateStratergy) {
    this.strategy = strategy;
  }

  executeStrategy(item: Item) {
    return this.strategy.updatedItem(item);
  }
}
