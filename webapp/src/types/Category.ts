import CategoryOption from '../types/CategoryOption';

export default class Category {
  name: string;
  options: CategoryOption[];
	displayName?: string;

  constructor(name: string, options: CategoryOption[], displayName?: string) {
    this.name = name;
    this.displayName = displayName || (name[0].toUpperCase() + name.substring(1));
    this.options = options;
  };

  getOptionIndexByCost(cost: number): number {
    let result: number = -1;
    this.options.forEach((option, index) => {
      if (option.cost === cost) {
        result = index;
      };
    });
    return result;
  };
};