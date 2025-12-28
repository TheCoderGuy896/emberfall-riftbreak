import { Enemy } from "../enemies/Enemy.js";
import { runAI } from "../enemies/AIController.js";

export function spawnEnemy(worldLevel){
  return new Enemy({
    x: Math.random()*2500,
    y: Math.random()*2000,
    hp: 70*worldLevel,
    element: "lightning",
    damage: 15*worldLevel,
    ai: runAI
  });
}
