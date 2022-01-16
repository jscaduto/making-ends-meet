import CategoryOption from '../types/CategoryOption';

export default class Category {
  name: string;
  options: CategoryOption[];
	displayName?: string;

  constructor(name: string, options: CategoryOption[], displayName?: string) {
    this.name = name;
    this.displayName = displayName || (name[0].toUpperCase() + name.substring(1));
    this.options = options;
  }
};