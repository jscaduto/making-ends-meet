export default class Budget {
  [key: string]: any

  constructor(
    public savings: number = 0,
    public housing: number = 1,
    public healthcare: number = 1,
    public food: number = 1,
    public education: number = 1,
    public transportation: number = 1,
    public utilities: number = 1,
    public childcare: number = 1,
  ) {
    this.savings = savings;
    this.housing = housing;
    this.healthcare = healthcare;
    this.food = food;
    this.education = education;
    this.transportation = transportation;
    this.utilities = utilities;
    this.childcare = childcare;
  }

  getValues(): Map<string, number> {
    return new Map<string, number>([
      ['housing', this.housing],
      ['healthcare', this.healthcare],
      ['food', this.food],
      ['education', this.education],
      ['transportation', this.transportation],
      ['utilities', this.utilities],
      ['childcare', this.childcare],
    ]);
  }
}