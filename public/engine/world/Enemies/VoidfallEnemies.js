import { Enemy } from "../enemies/Enemy.js";
import { runAI } from "../enemies/AIController.js";

export function spawnEnemy(worldLevel){
  return new Enemy({
    x: Math.random()*3000,
    y: Math.random()*2500,
    hp: 120*worldLevel,
    element: "void",
    damage: 25*worldLevel,
    ai: runAI,
    teleporting: true,      // enemies may blink around
    elite: true             // stronger than normal
  });
}
