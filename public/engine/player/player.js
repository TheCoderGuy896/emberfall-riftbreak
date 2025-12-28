import { CombatSystem } from "../combat/CombatSystem.js";

export class Player {
  constructor() {
    this.x = 100;
    this.y = 100;
    this.hp = 100;
    this.vx = 0;
    this.vy = 0;
    this.currentRealm = null;
    this.combat = new CombatSystem(this);
  }

  update(dt, time){
    // Movement
    this.x += this.vx * dt;
    this.y += this.vy * dt;

    // Combat
    this.combat.update(dt, time);
  }

  render(ctx){
    // Player
    ctx.fillStyle="cyan";
    ctx.beginPath();
    ctx.arc(this.x,this.y,20,0,Math.PI*2);
    ctx.fill();

    // Combat
    this.combat.render(ctx);
  }
}
