export default class CategoryOption {
  title: string;
  icon: string;
	description: string[];
  cost: number;

  constructor(title: string, icon: string, description: string[], cost: number) {
    this.title = title;
    this.icon = icon;
    this.description = description;
    this.cost = cost;
  }
};