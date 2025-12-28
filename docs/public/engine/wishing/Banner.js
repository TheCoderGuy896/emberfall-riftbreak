export class Banner {
  constructor(name, pool){
    this.name = name;
    this.pool = pool; // array of {name, rarity, type}
    this.pity = {rare4: 0, rare5: 0}; // pity counters
  }

  pull(){
    let roll = Math.random()*100;
    let result = null;

    // 5-star chance (1%)
    if(this.pity.rare5 >= 89 || roll < 1){
      result = this.pool.filter(item=>item.rarity===5)[Math.floor(Math.random()*this.pool.filter(item=>item.rarity===5).length)];
      this.pity.rare5 = 0;
      this.pity.rare4 = 0;
    }
    // 4-star chance (10%)
    else if(this.pity.rare4 >= 9 || roll < 10){
      result = this.pool.filter(item=>item.rarity===4)[Math.floor(Math.random()*this.pool.filter(item=>item.rarity===4).length)];
      this.pity.rare4 = 0;
      this.pity.rare5++;
    }
    else{
      result = this.pool.filter(item=>item.rarity<=3)[Math.floor(Math.random()*this.pool.filter(item=>item.rarity<=3).length)];
      this.pity.rare4++;
      this.pity.rare5++;
    }

    return result;
  }
}
