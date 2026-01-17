import { Skill } from "../model/Model";
import skillsData from '../data/skills.json';
  
export class SkillService {
  private skills: Skill[] = [];

  constructor() {
    this.skills = this.parseSkills(skillsData);
  }

  private parseSkills(data: any[]): Skill[] {
    return data.map(item => ({
      id: item.id,
      title: item.title,
      description1: item.description1,
      description2: item.description2,
      description3: item.description3,
      imagePath: item.imagePath
    }));
  }

  getSkillById(id: string): Skill | undefined {
    return this.skills.find(skill => skill.id === id);
  }

}