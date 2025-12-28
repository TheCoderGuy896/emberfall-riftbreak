export class Menus {
  constructor(player){
    this.player = player;
    this.open = false;
    this.selectedTab = "inventory";
  }

  toggle(){
    this.open = !this.open;
  }

  render(ctx){
    if(!this.open) return;

    ctx.fillStyle="rgba(0,0,0,0.8)";
    ctx.fillRect(100,50,600,400);

    ctx.fillStyle="white";
    ctx.font="20px Arial";
    ctx.fillText(`Menu - ${this.selectedTab}`, 120, 80);

    // Tabs
    ["inventory","skills","map","settings"].forEach((tab,i)=>{
      ctx.fillText(tab, 120 + i*100, 120);
    });

    // Inventory example
    if(this.selectedTab==="inventory"){
      ctx.fillText("Item 1: Healing Potion", 120, 160);
      ctx.fillText("Item 2: Mana Potion", 120, 190);
    }
  }
}
