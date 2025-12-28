export class SkillTreeUI {
  constructor(player){
    this.player = player;
    this.selectedSkill = null;
  }

  render(ctx){
    ctx.fillStyle="rgba(50,50,50,0.9)";
    ctx.fillRect(100,50,600,400);

    ctx.fillStyle="white";
    ctx.font="18px Arial";
    ctx.fillText("Skill Tree", 120, 80);

    // Example: Display 3 skills
    const skills = ["Flame Burst","Ice Shield","Lightning Dash"];
    skills.forEach((skill,i)=>{
      ctx.fillText(skill, 120, 120 + i*40);
    });
  }
}
