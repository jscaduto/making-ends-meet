export default interface LifeEvent {
  title: string;
  description: string;
  income: number;
  outcomes?: string | string[];
  scenario?: CallableFunction;
}