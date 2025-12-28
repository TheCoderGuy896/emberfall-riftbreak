import { Banner } from "./Banner.js";

export class WishingSystem {
  constructor(player){
    this.player = player;
    this.banners = {};
    this.currentBanner = null;

    // Example banner
    this.banners["Standard"] = new Banner("Standard", [
      {name:"HeroA", rarity:5, type:"character"},
      {name:"HeroB", rarity:4, type:"character"},
      {name:"SwordX", rarity:5, type:"weapon"},
      {name:"SwordY", rarity:4, type:"weapon"},
      {name:"Potion", rarity:3, type:"item"}
    ]);

    this.currentBanner = this.banners["Standard"];
  }

  singlePull(){
    if(this.player.gems < 160) return null; // cost
    this.player.gems -= 160;
    return this.currentBanner.pull();
  }

  tenPull(){
    if(this.player.gems < 1600) return [];
    this.player.gems -= 1600;
    const results = [];
    for(let i=0;i<10;i++){
      results.push(this.currentBanner.pull());
    }
    return results;
  }
}
