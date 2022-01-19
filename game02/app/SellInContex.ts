// Sell In Operations

import { Item } from "./gilded-rose";

export interface SellInStrategy {
  modifySellIn(item: Item): boolean;
}

export class DecreaseSellIn implements SellInStrategy {
  modifySellIn(item: Item): boolean {
    if (item.sellIn > 0) {
      item.sellIn = item.sellIn - 1;
      return true;
    }
    return false;
  }
}

export class SellInContex {
  private strategy: SellInStrategy;

  constructor(strategy: SellInStrategy) {
    this.strategy = strategy;
  }

  executeStrategy(item: Item) {
    return this.strategy.modifySellIn(item);
  }
}
