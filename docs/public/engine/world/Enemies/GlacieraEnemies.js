import { Enemy } from "../enemies/Enemy.js";
import { runAI } from "../enemies/AIController.js";

export function spawnEnemy(worldLevel){
  return new Enemy({
    x: Math.random()*2200,
    y: Math.random()*1400,
    hp: 60*worldLevel,
    element: "ice",
    damage: 12*worldLevel,
    ai: runAI
  });
}
