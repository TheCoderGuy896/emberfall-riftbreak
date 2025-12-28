export function triggerHazard(x, y){
  const type = Math.random() > 0.5 ? "wind" : "lightning";

  return {
    x, y,
    type,
    radius: type==="wind"?100:50,
    force: type==="wind"?500:0,
    damage: type==="lightning"?20:0,
    update(dt){},
    render(ctx){
      if(this.type==="wind"){
        ctx.strokeStyle="white";
        ctx.beginPath();
        ctx.moveTo(this.x-10,this.y);
        ctx.lineTo(this.x+10,this.y);
        ctx.stroke();
      } else {
        ctx.fillStyle="yellow";
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
        ctx.fill();
      }
    }
  }
}
