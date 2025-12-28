import { spawnEnemy } from "./Enemies/IgnisEnemies.js";
import { triggerHazard } from "./Events/IgnisEvents.js";

export class RealmIgnis {
  constructor(player) {
    this.player = player;
    this.enemies = [];
    this.hazards = [];
    this.width = 2000;   // realm width
    this.height = 1200;  // realm height
    this.init();
  }

  init() {
    // Spawn 10 enemies at random positions
    for(let i=0;i<10;i++){
      this.enemies.push(spawnEnemy(this.player.worldLevel));
    }

    // Place lava hazards
    for(let i=0;i<5;i++){
      this.hazards.push(triggerHazard(Math.random()*this.width, Math.random()*this.height));
    }
  }

  update(dt) {
    // Update enemies
    this.enemies.forEach(e => e.update(this.player, dt));

    // Update hazards
    this.hazards.forEach(h => h.update(dt));

    // Check for player collisions
    this.checkCollisions();
  }

  checkCollisions() {
    this.hazards.forEach(h => {
      const dx = this.player.x - h.x;
      const dy = this.player.y - h.y;
      if(Math.hypot(dx, dy) < h.radius) {
        this.player.hp -= h.damage;
      }
    });
  }

  render(ctx) {
    // Draw ground
    ctx.fillStyle="#6b1f00"; // lava rock
    ctx.fillRect(0,0,this.width,this.height);

    // Draw hazards
    this.hazards.forEach(h => h.render(ctx));

    // Draw enemies
    this.enemies.forEach(e => e.render(ctx));
  }
}
