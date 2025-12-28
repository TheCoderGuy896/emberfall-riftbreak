import { spawnEnemy } from "./Enemies/VerdantEnemies.js";
import { triggerHazard } from "./Events/VerdantEvents.js";

export class RealmVerdantHollow {
  constructor(player) {
    this.player = player;
    this.enemies = [];
    this.hazards = [];
    this.width = 2600;
    this.height = 1800;
    this.init();
  }

  init() {
    // Spawn tactical enemies
    for(let i=0;i<15;i++){
      this.enemies.push(spawnEnemy(this.player.worldLevel));
    }

    // Place poison hazards
    for(let i=0;i<7;i++){
      this.hazards.push(triggerHazard(Math.random()*this.width, Math.random()*this.height));
    }
  }

  update(dt) {
    // Update enemies
    this.enemies.forEach(e => e.update(this.player, dt));

    // Update hazards
    this.hazards.forEach(h => h.update(dt));

    // Poison damage
    this.checkCollisions();
  }

  checkCollisions() {
    this.hazards.forEach(h => {
      const dx = this.player.x - h.x;
      const dy = this.player.y - h.y;
      if(Math.hypot(dx, dy) < h.radius){
        this.player.applyStatus("poison", 3); // 3 seconds
      }
    });
  }

  render(ctx) {
    // Draw forest floor
    ctx.fillStyle="#2e7d32"; // dark green
    ctx.fillRect(0,0,this.width,this.height);

    // Draw hazards
    this.hazards.forEach(h => h.render(ctx));

    // Draw enemies
    this.enemies.forEach(e => e.render(ctx));
  }
}
