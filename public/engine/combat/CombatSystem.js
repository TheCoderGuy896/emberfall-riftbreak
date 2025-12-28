import { Weapon } from "./Weapon.js";
import { Melee } from "./Melee.js";
import { checkHits } from "./HitDetection.js";

export class CombatSystem {
  constructor(player){
    this.player = player;
    this.projectiles = [];
    this.weapons = [new Weapon({name:"Blaster", damage:20, rate:5, ammo:30, element:"fire"})];
    this.melee = new Melee(15, 50, "ice");
    this.currentWeaponIndex = 0;
  }

  get currentWeapon(){
    return this.weapons[this.currentWeaponIndex];
  }

  shoot(time, direction){
    this.currentWeapon.shoot(time, {x:this.player.x, y:this.player.y}, direction, this.projectiles);
  }

  meleeAttack(time){
    this.melee.attack(time, this.player, this.player.currentRealm.enemies);
  }

  update(dt, time){
    this.projectiles.forEach(p => p.update(dt));
    checkHits(this.projectiles, this.player.currentRealm.enemies);
  }

  render(ctx){
    this.projectiles.forEach(p => p.render(ctx));
  }
}
