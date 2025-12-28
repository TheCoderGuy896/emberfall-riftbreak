export class MapUI {
  constructor(player){
    this.player = player;
    this.show = false;
  }

  toggle(){
    this.show = !this.show;
  }

  render(ctx){
    if(!this.show) return;
    ctx.fillStyle="rgba(0,0,0,0.7)";
    ctx.fillRect(50,50,700,500);

    ctx.fillStyle="white";
    ctx.font="16px Arial";
    ctx.fillText("World Map", 60, 80);

    // Player marker
    ctx.fillStyle="red";
    ctx.fillRect(60 + this.player.x/10, 100 + this.player.y/10, 5, 5);
  }
}
