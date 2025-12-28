export class TutorialSystem {
  constructor(player){
    this.player = player;
    this.steps = [
      "Use WASD to move",
      "Use mouse to aim",
      "Left-click to shoot",
      "Press E for melee",
      "Open Menu with M",
      "Hover over skills to see effects",
      "Collect items to survive",
      "Check elemental weaknesses!"
    ];
    this.currentStep = 0;
    this.show = true;
  }

  nextStep(){
    this.currentStep++;
    if(this.currentStep >= this.steps.length) this.show=false;
  }

  render(ctx){
    if(!this.show) return;
    ctx.fillStyle="rgba(0,0,0,0.8)";
    ctx.fillRect(200,500,400,60);

    ctx.fillStyle="white";
    ctx.font="18px Arial";
    ctx.fillText(this.steps[this.currentStep], 210, 540);
  }
}
