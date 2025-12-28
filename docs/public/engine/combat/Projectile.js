export class Projectile {
  constructor(x, y, direction, damage, element){
    this.x = x;
    this.y = y;
    this.dx = Math.cos(direction) * 1000; // speed pixels/sec
    this.dy = Math.sin(direction) * 1000;
    this.damage = damage;
    this.element = element;
    this.radius = 5;
  }

  update(dt){
    this.x += this.dx * dt;
    this.y += this.dy * dt;
  }

  render(ctx){
    switch(this.element){
      case "fire": ctx.fillStyle="orange"; break;
      case "ice": ctx.fillStyle="lightblue"; break;
      case "lightning": ctx.fillStyle="yellow"; break;
      case "nature": ctx.fillStyle="green"; break;
      case "void": ctx.fillStyle="purple"; break;
      default: ctx.fillStyle="white"; break;
    }
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
    ctx.fill();
  }
}
