export function checkHits(projectiles, enemies){
  projectiles.forEach((p, index) => {
    enemies.forEach(e => {
      const dx = e.x - p.x;
      const dy = e.y - p.y;
      if(Math.hypot(dx, dy) < p.radius + 20){
        e.hp -= p.damage;
        if(p.element !== "none") e.applyStatus(p.element,2);
        projectiles.splice(index,1); // remove projectile after hit
      }
    });
  });
}
