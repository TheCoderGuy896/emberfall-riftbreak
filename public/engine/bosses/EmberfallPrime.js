import { Enemy } from "../enemies/Enemy.js";
import { runAI } from "../enemies/AIController.js";
import { spawnHazard } from "../world/Events/TempestEvents.js"; // reuse events

export class EmberfallPrime extends Enemy {
  constructor(player) {
    super({
      x: 1500,
      y: 1000,
      hp: 50000,
      element: "void",
      damage: 50,
      ai: runAI,
      elite: true
    });

    this.player = player;
    this.phase = 1;
    this.timer = 0;
    this.hazards = [];
  }

  update(dt) {
    this.timer += dt;

    // Phase transitions based on HP
    if(this.hp < 40000 && this.phase === 1) this.phase = 2;
    if(this.hp < 30000 && this.phase === 2) this.phase = 3;
    if(this.hp < 20000 && this.phase === 3) this.phase = 4;
    if(this.hp < 10000 && this.phase === 4) this.phase = 5;

    // Execute attacks based on phase
    switch(this.phase){
      case 1: this.firePhase(dt); break;
      case 2: this.icePhase(dt); break;
      case 3: this.lightningPhase(dt); break;
      case 4: this.naturePhase(dt); break;
      case 5: this.voidPhase(dt); break;
    }

    // Update hazards
    this.hazards.forEach(h => h.update(dt));
  }

  // Phase 1: Fire
  firePhase(dt){
    if(this.timer % 2 < dt){
      // Spawn fire hazards around arena
      for(let i=0;i<3;i++){
        this.hazards.push(spawnHazard(Math.random()*3000, Math.random()*2500));
      }
    }
  }

  // Phase 2: Ice
  icePhase(dt){
    this.player.vx *= 0.98; // slippery terrain effect
    this.player.vy *= 0.98;
  }

  // Phase 3: Lightning
  lightningPhase(dt){
    if(this.timer % 1.5 < dt){
      const lightning = spawnHazard(this.player.x + (Math.random()-0.5)*400, this.player.y + (Math.random()-0.5)*400);
      lightning.type = "lightning";
      this.hazards.push(lightning);
    }
  }

  // Phase 4: Nature
  naturePhase(dt){
    if(this.timer % 3 < dt){
      // Spawn poison zones around player
      const poison = spawnHazard(this.player.x + (Math.random()-0.5)*300, this.player.y + (Math.random()-0.5)*300);
      poison.type = "poison";
      poison.radius = 80;
      this.hazards.push(poison);
    }
  }

  // Phase 5: Void
  voidPhase(dt){
    if(this.timer % 2 < dt){
      // Teleport boss randomly
      this.x = Math.random()*3000;
      this.y = Math.random()*2500;
    }
  }

  render(ctx){
    // Boss body
    ctx.fillStyle="magenta";
    ctx.beginPath();
    ctx.arc(this.x,this.y,80,0,Math.PI*2);
    ctx.fill();

    // Hazards
    this.hazards.forEach(h => {
      switch(h.type){
        case "fire": ctx.fillStyle="orange"; break;
        case "ice": ctx.fillStyle="lightblue"; break;
        case "lightning": ctx.fillStyle="yellow"; break;
        case "poison": ctx.fillStyle="green"; break;
        case "voidDamage": ctx.fillStyle="purple"; break;
        default: ctx.fillStyle="red"; break;
      }
      ctx.beginPath();
      ctx.arc(h.x,h.y,h.radius,0,Math.PI*2);
      ctx.fill();
    });
  }
}
