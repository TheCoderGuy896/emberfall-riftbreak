import { spawnEnemy } from "./Enemies/VoidfallEnemies.js";
import { triggerHazard } from "./Events/VoidfallEvents.js";

export class RealmVoidfall {
  constructor(player) {
    this.player = player;
    this.enemies = [];
    this.hazards = [];
    this.width = 3000;
    this.height = 2500;
    this.init();
  }

  init() {
    // Spawn elite enemies
    for(let i=0;i<18;i++){
      this.enemies.push(spawnEnemy(this.player.worldLevel));
    }

    // Place gravity anomalies & teleport hazards
    for(let i=0;i<10;i++){
      this.hazards.push(triggerHazard(Math.random()*this.width, Math.random()*this.height));
    }
  }

  update(dt) {
    // Apply gravity shifts to player
    this.hazards.forEach(h => {
      if(h.type === "gravity" && Math.hypot(this.player.x-h.x, this.player.y-h.y) < h.radius){
        this.player.vx += (Math.random()-0.5) * 300 * dt;
        this.player.vy += (Math.random()-0.5) * 300 * dt;
      }
      if(h.type === "teleport" && Math.hypot(this.player.x-h.x, this.player.y-h.y) < h.radius){
        this.player.x = Math.random()*this.width;
        this.player.y = Math.random()*this.height;
      }
    });

    // Update enemies
    this.enemies.forEach(e => e.update(this.player, dt));

    // Update hazards
    this.hazards.forEach(h => h.update(dt));

    this.checkCollisions();
  }

  checkCollisions() {
    this.hazards.forEach(h => {
      if(h.type === "voidDamage"){
        const dx = this.player.x - h.x;
        const dy = this.player.y - h.y;
        if(Math.hypot(dx, dy) < h.radius){
          this.player.hp -= h.damage;
        }
      }
    });
  }

  render(ctx) {
    // Draw dark void
    ctx.fillStyle="#0a0a0a";
    ctx.fillRect(0,0,this.width,this.height);

    // Draw hazards
    this.hazards.forEach(h => h.render(ctx));

    // Draw enemies
    this.enemies.forEach(e => e.render(ctx));
  }
}
