import { spawnEnemy } from "../Enemies/GlacieraEnemies.js";
import { triggerHazard } from "../Events/GlacieraEvents.js";

export class RealmGlaciera {
  constructor(player) {
    this.player = player;
    this.enemies = [];
    this.hazards = [];
    this.width = 2200;
    this.height = 1400;
    this.init();
  }

  init() {
    // Spawn 12 ice enemies
    for(let i=0;i<12;i++){
      this.enemies.push(spawnEnemy(this.player.worldLevel));
    }

    // Place icy hazards
    for(let i=0;i<6;i++){
      this.hazards.push(triggerHazard(Math.random()*this.width, Math.random()*this.height));
    }
  }

  update(dt) {
    // Slippery player effect
    if(this.player.isOnIce){
      this.player.x += this.player.vx * dt * 1.2;
      this.player.y += this.player.vy * dt * 1.2;
    }

    // Update enemies
    this.enemies.forEach(e => e.update(this.player, dt));

    // Update hazards
    this.hazards.forEach(h => h.update(dt));

    // Collision detection
    this.checkCollisions();
  }

  checkCollisions() {
    this.hazards.forEach(h => {
      const dx = this.player.x - h.x;
      const dy = this.player.y - h.y;
      if(Math.hypot(dx, dy) < h.radius){
        this.player.applyStatus("freeze", 2); // freezes for 2 seconds
      }
    });
  }

  render(ctx) {
    // Draw frozen ground
    ctx.fillStyle="#a0d8f0"; // icy blue
    ctx.fillRect(0,0,this.width,this.height);

    // Draw hazards
    this.hazards.forEach(h => h.render(ctx));

    // Draw enemies
    this.enemies.forEach(e => e.render(ctx));
  }
}
