import { spawnEnemy } from "./Enemies/TempestEnemies.js";
import { triggerHazard } from "./Events/TempestEvents.js";

export class RealmTempestVale {
  constructor(player) {
    this.player = player;
    this.enemies = [];
    this.hazards = [];
    this.width = 2500;
    this.height = 2000;
    this.init();
  }

  init() {
    // Spawn enemies
    for(let i=0;i<14;i++){
      this.enemies.push(spawnEnemy(this.player.worldLevel));
    }

    // Place wind currents & lightning hazards
    for(let i=0;i<8;i++){
      this.hazards.push(triggerHazard(Math.random()*this.width, Math.random()*this.height));
    }
  }

  update(dt) {
    // Apply wind effects on player
    this.hazards.forEach(h => {
      if(h.type === "wind" && Math.hypot(this.player.x-h.x, this.player.y-h.y) < h.radius){
        this.player.vy -= h.force*dt; // lift player upward
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
      if(h.type === "lightning"){
        const dx = this.player.x - h.x;
        const dy = this.player.y - h.y;
        if(Math.hypot(dx, dy) < h.radius){
          this.player.hp -= h.damage;
        }
      }
    });
  }

  render(ctx) {
    // Draw stormy sky
    ctx.fillStyle="#4c6eb1"; // dark storm blue
    ctx.fillRect(0,0,this.width,this.height);

    // Draw hazards
    this.hazards.forEach(h => h.render(ctx));

    // Draw enemies
    this.enemies.forEach(e => e.render(ctx));
  }
}
