export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  modifyQuality(item: Item, action: string) {
    if (action === "increase" && item.quality < 50) {
      item.quality = item.quality + 1;

      return true;
    } else if (action === "lower" && item.quality > 0) {
      item.quality = item.quality - 1;

      return true;
    }

    return false;
  }

  modifySellin(item: Item) {
    if (item.sellIn > 0) {
      item.sellIn = item.sellIn - 1;
      return true;
    }
    return false;
  }

  isAgedBrie(item: Item) {
    if (item.name === "Aged Brie") {
      return true;
    }
    return false;
  }

  isBackstagePasses(item: Item) {
    if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
      return true;
    }
    return false;
  }

  isConjured(item: Item) {
    if (item.name === "Conjured") {
      return true;
    }
    return false;
  }

  isSulfuras(item: Item) {
    if (item.name === "Sulfuras, Hand of Ragnaros") {
      return true;
    }
    return false;
  }

  updateBackstagePasses(item: Item) {
    if (item.sellIn === 0) item.quality = 0;

    this.modifyQuality(item, "increase");

    if (item.sellIn < 11) this.modifyQuality(item, "increase");

    if (item.sellIn < 6) this.modifyQuality(item, "increase");
  }

  updateAgedBrie(item: Item) {
    this.modifyQuality(item, "increase");

    if (item.sellIn < 0) this.modifyQuality(item, "increase");
  }

  updateQuality() {
    this.items.forEach((item: Item) => {
      if (!this.isSulfuras(item)) {
        this.modifySellin(item);

        if (this.isBackstagePasses(item)) {
          this.updateBackstagePasses(item);

          return item;
        } else if (this.isAgedBrie(item)) {
          this.updateAgedBrie(item);

          return item;
        } else if (this.isConjured(item)) {
          this.modifyQuality(item, "lower");
          this.modifyQuality(item, "lower");

          return item;
        }

        this.modifyQuality(item, "lower");

        if (item.sellIn < 0) {
          this.modifyQuality(item, "lower");
        }

        return item;
      }
    });
  }
}
