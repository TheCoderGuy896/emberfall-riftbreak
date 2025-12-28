import { Enemy } from "../enemies/Enemy.js";
import { runAI } from "../enemies/AIController.js";

export function spawnEnemy(worldLevel) {
  return new Enemy({
    x: Math.random()*2000,
    y: Math.random()*1200,
    hp: 50*worldLevel,
    element: "fire",
    damage: 10*worldLevel,
    ai: runAI
  });
}
