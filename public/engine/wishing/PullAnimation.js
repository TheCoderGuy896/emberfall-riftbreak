export function animatePull(ctx, result, callback){
  let timer = 0;
  const duration = 2; // seconds
  function loop(dt){
    timer += dt;
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle="black";
    ctx.fillRect(0,0,ctx.canvas.width, ctx.canvas.height);

    ctx.fillStyle="white";
    ctx.font="30px Arial";
    ctx.fillText("Rolling...", ctx.canvas.width/2-50, ctx.canvas.height/2);

    if(timer >= duration){
      ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
      ctx.fillText(`You got: ${result.name} (${result.rarity}-star)`, ctx.canvas.width/2-100, ctx.canvas.height/2);
      if(callback) callback(result);
      return;
    }

    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}
