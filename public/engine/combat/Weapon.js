export class Weapon {
  constructor({name, damage, rate, ammo, element}) {
    this.name = name;
    this.damage = damage;
    this.rate = rate; // shots per second
    this.ammo = ammo;
    this.maxAmmo = ammo;
    this.element = element || "none";
    this.lastShot = 0;
  }

  canShoot(time) {
    return (time - this.lastShot) >= 1/this.rate && this.ammo > 0;
  }

  shoot(time, origin, direction, projectiles) {
    if(this.canShoot(time)){
      this.lastShot = time;
      this.ammo--;
      projectiles.push(new Projectile(origin.x, origin.y, direction, this.damage, this.element));
    }
  }

  reload() {
    this.ammo = this.maxAmmo;
  }
}
