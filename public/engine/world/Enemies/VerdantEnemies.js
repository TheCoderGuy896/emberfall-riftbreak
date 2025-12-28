import { Enemy } from "../enemies/Enemy.js";
import { runAI } from "../enemies/AIController.js";

export function spawnEnemy(worldLevel){
  return new Enemy({
    x: Math.random()*2600,
    y: Math.random()*1800,
    hp: 80*worldLevel,
    element: "nature",
    damage: 18*worldLevel,
    ai: runAI,
    stealth: true // some enemies will hide and ambush
  });
}
