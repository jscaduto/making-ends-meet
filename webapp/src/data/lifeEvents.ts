import LifeEvent from '../types/LifeEvent';
import Budget from '../types/Budget';

const lifeEvents: LifeEvent[] = [
  {
    title: 'YOU ARE THE HART FAMILY',
    description: "You live with your partner in Kansas, and together you have two children, ages 3 and 10. You work 20 hours per week in order to complete an Associate's Degree, while your partner works 40 hours per week."
      + " Kansas has no minimum wage law, so you both earn the federal hourly minimum wage of $7.25, bringing your family's income to: $22,620/year."
      + " How will you provide for your family while living on the poverty line?",
    income: 6,
  },
  {
    title: 'UNEXPECTED CHALLENGE: HEALTHCARE',
    description: 'You cannot remember the last time you received dental care, and a pain in your tooth is severe. After visiting the dentist, you learn that you need emergency dental surgery.',
    income: 6,
    outcomes: [
      'Unfortunately, you took a risk and chose to not have insurance coverage, and the medical bill will cost you 3 credits.',
      "You chose a partial-coverage insurance plan, so it will cost you 2 Credits from next month's budget.",
      "Luckily, you chose a full-coverage insurance plan, and it will cost you just 1 Credit from next month's budget.",
    ],
    scenario: (budget: Budget, income: number) => { return income + (budget.healthcare - 4)}},
  {
    title: 'UNEXPECTED BENEFIT: UTILITY ASSISTANCE',
    description: "While talking with your friend about how expensive your utility bills are, they told you about calling 2-1-1: a free and confidential service that helps people across the U.S. find the local resources they need. After calling, 2-1-1 found a program in which you qualify to receive financial assistance with your utility bills, saving you 2 credits in next month's budget.",
    income: 8,
    outcomes: 'You will start next month with an extra 2 credits.',
  },
  {
    title: 'UNEXPECTED CHALLENGE: JOB LOSS',
    description: "You were just laid off from your part-time job with no explanation. Losing your income has drastically hurt next month's budget, leaving just 8 Credits of income to pay the bills.",
    income: 2,
    outcomes: 'You will start next month with a 4 less credits.',
  },
];

export default lifeEvents;