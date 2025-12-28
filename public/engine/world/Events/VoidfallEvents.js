export function triggerHazard(x, y){
  const typeRoll = Math.random();
  let type = "voidDamage";
  if(typeRoll < 0.33) type = "gravity";
  else if(typeRoll < 0.66) type = "teleport";

  return {
    x, y,
    type,
    radius: 60,
    damage: type==="voidDamage"?30:0,
    update(dt){},
    render(ctx){
      switch(this.type){
        case "gravity":
          ctx.strokeStyle="purple";
          ctx.beginPath();
          ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
          ctx.stroke();
          break;
        case "teleport":
          ctx.fillStyle="magenta";
          ctx.beginPath();
          ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
          ctx.fill();
          break;
        case "voidDamage":
          ctx.fillStyle="darkviolet";
          ctx.beginPath();
          ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
          ctx.fill();
          break;
      }
    }
  }
}
