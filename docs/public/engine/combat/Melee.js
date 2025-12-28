export class Melee {
  constructor(damage, range, element){
    this.damage = damage;
    this.range = range;
    this.element = element || "none";
    this.cooldown = 0.5;
    this.lastAttack = 0;
  }

  canAttack(time){
    return (time - this.lastAttack) >= this.cooldown;
  }

  attack(time, player, enemies){
    if(!this.canAttack(time)) return;
    this.lastAttack = time;

    enemies.forEach(e => {
      const dx = e.x - player.x;
      const dy = e.y - player.y;
      if(Math.hypot(dx, dy) < this.range){
        e.hp -= this.damage;
        if(this.element !== "none") e.applyStatus(this.element, 2);
      }
    });
  }
}
