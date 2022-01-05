export default interface LifeEvent {
  description: string;
  income: number;
  scenario?: CallableFunction;
}