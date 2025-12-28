export class HUD {
  constructor(player){
    this.player = player;
  }

  render(ctx){
    // Health bar
    ctx.fillStyle="black";
    ctx.fillRect(20,20,200,20);
    ctx.fillStyle="red";
    ctx.fillRect(20,20,200*(this.player.hp/this.player.maxHp),20);

    // Stamina bar
    ctx.fillStyle="black";
    ctx.fillRect(20,50,200,10);
    ctx.fillStyle="yellow";
    ctx.fillRect(20,50,200*(this.player.stamina/this.player.maxStamina),10);

    // Ammo display
    const weapon = this.player.combat.currentWeapon;
    ctx.fillStyle="white";
    ctx.font="16px Arial";
    ctx.fillText(`${weapon.name}: ${weapon.ammo}/${weapon.maxAmmo}`, 20, 80);

    // Elemental status
    if(this.player.status){
      ctx.fillText(`Status: ${this.player.status.type}`, 20, 110);
    }
  }
}
