import { Item } from "./gilded-rose";
// Quality Operations

export interface QualityStrategy {
  modifyQuality(item: Item): boolean;
}

export class IncreaseQuality implements QualityStrategy {
  modifyQuality(item: Item): boolean {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
      return true;
    }
    return false;
  }
}

export class DecreaseQuality implements QualityStrategy {
  modifyQuality(item: Item): boolean {
    if (item.quality > 0) {
      item.quality = item.quality - 1;
      return true;
    }
    return false;
  }
}

export class QualityContex {
  private strategy: QualityStrategy;

  constructor(strategy: QualityStrategy) {
    this.strategy = strategy;
  }

  executeStrategy(item: Item) {
    return this.strategy.modifyQuality(item);
  }
}
