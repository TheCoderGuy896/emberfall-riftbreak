export function triggerHazard(x, y){
  return {
    x, y,
    radius: 60,
    damage: 5,
    update(dt){
      // Slowly expand poison cloud
      this.radius += 2*dt;
    },
    render(ctx){
      ctx.fillStyle="rgba(0,150,0,0.4)";
      ctx.beginPath();
      ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
      ctx.fill();
    }
  }
}
