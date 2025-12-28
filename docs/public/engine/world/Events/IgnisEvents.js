export function triggerHazard(x, y) {
  return {
    x, y,
    radius: 40,
    damage: 5,
    update(dt){},
    render(ctx){
      ctx.fillStyle="orange";
      ctx.beginPath();
      ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
      ctx.fill();
    }
  }
}
