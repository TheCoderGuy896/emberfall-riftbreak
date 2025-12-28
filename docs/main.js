import { RealmIgnis } from "./engine/world/Realms/RealmIgnis.js";

const ignisRealm = new RealmIgnis(player);

function loop(dt) {
  ignisRealm.update(dt);
  ignisRealm.render(ctx);
  requestAnimationFrame(loop);
}

loop();

import { RealmGlaciera } from "./engine/world/Realms/RealmGlaciera.js";

const glacieraRealm = new RealmGlaciera(player);

function loop(dt){
  glacieraRealm.update(dt);
  glacieraRealm.render(ctx);
  requestAnimationFrame(loop);
}

loop();

import { RealmTempestVale } from "./engine/world/Realms/RealmTempestVale.js";

const tempestRealm = new RealmTempestVale(player);

function loop(dt){
  tempestRealm.update(dt);
  tempestRealm.render(ctx);
  requestAnimationFrame(loop);
}

loop();

import { RealmVerdantHollow } from "./engine/world/RealmVerdantHollow.js";

const verdantRealm = new RealmVerdantHollow(player);

function loop(dt){
  verdantRealm.update(dt);
  verdantRealm.render(ctx);
  requestAnimationFrame(loop);
}

loop();

import { RealmVoidfall } from "./engine/world/RealmVoidfall.js";

const voidfallRealm = new RealmVoidfall(player);

function loop(dt){
  voidfallRealm.update(dt);
  voidfallRealm.render(ctx);
  requestAnimationFrame(loop);
}

loop();

import { EmberfallPrime } from "./engine/bosses/EmberfallPrime.js";

const finalBoss = new EmberfallPrime(player);

function loop(dt){
  finalBoss.update(dt);
  finalBoss.render(ctx);
  requestAnimationFrame(loop);
}

loop();

import { HUD } from "./ui/HUD.js";
import { Menus } from "./ui/Menus.js";
import { SkillTreeUI } from "./ui/SkillTreeUI.js";
import { MapUI } from "./ui/MapUI.js";
import { TutorialSystem } from "./ui/TutorialSystem.js";

const hud = new HUD(player);
const menus = new Menus(player);
const skills = new SkillTreeUI(player);
const mapUI = new MapUI(player);
const tutorial = new TutorialSystem(player);

function loop(dt, time){
  // Game world update
  currentRealm.update(dt);

  // Player update
  player.update(dt, time);

  // Render
  ctx.clearRect(0,0,canvas.width,canvas.height);
  currentRealm.render(ctx);
  player.render(ctx);

  // UI
  hud.render(ctx);
  menus.render(ctx);
  skills.render(ctx);
  mapUI.render(ctx);
  tutorial.render(ctx);

  requestAnimationFrame(loop);
}

loop();

import { WishingSystem } from "./engine/wishing/WishingSystem.js";
import { animatePull } from "./engine/wishing/PullAnimation.js";

const wishing = new WishingSystem(player);

// Single pull
document.getElementById("singlePull").onclick = () => {
  const result = wishing.singlePull();
  if(result) animatePull(ctx, result, r => player.inventory.push(r));
}

// Ten pull
document.getElementById("tenPull").onclick = () => {
  const results = wishing.tenPull();
  results.forEach(r => animatePull(ctx, r, r => player.inventory.push(r)));
}
