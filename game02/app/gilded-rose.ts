import { SellInContex, DecreaseSellIn } from "./SellInContex";
import {
  UpdateContex,
  UpdateNormal,
  UpdateBackstagePasses,
  UpdateAgedBrie,
  UpdateConjured,
} from "./UpdateContex";

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

//Main

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    const sellInContext = new SellInContex(new DecreaseSellIn());
    let updateContext: UpdateContex;

    this.items.forEach((item) => {
      if (item.name !== "Sulfuras, Hand of Ragnaros") {
        sellInContext.executeStrategy(item);

        if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
          updateContext = new UpdateContex(new UpdateBackstagePasses());
        } else if (item.name === "Aged Brie") {
          updateContext = new UpdateContex(new UpdateAgedBrie());
        } else if (item.name === "Conjured") {
          updateContext = new UpdateContex(new UpdateConjured());
        } else {
          updateContext = new UpdateContex(new UpdateNormal());
        }

        updateContext.executeStrategy(item);

        return item;
      }
    });
  }
}
