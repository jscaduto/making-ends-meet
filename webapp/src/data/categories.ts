import Category from '../types/Category';

const categories: Category[] = [
  {
    name: 'housing',
    displayName: 'Housing',
    options: [
      {
        title: 'Difficult',
        icon: 'housing-difficult.png',
        description: [
          '1-bedroom apartment',
          'No outdoor space',
          'No dishwasher',
          'Must use laundromat',
          'Apartment not equipped for central air',
        ],
        cost: 1,
      },
      {
        title: 'Limited',
        icon: 'housing-limited.png',
        description: [
          '2-bedroom apartment',
          'Limited outdoor space',
          'Shared laundry room',
          'Includes dishwasher',
          'Apartment not equipped for central air',
        ],
        cost: 2,
      },
      {
        title: 'Convenient',
        icon: 'housing-convenient.png',
        description: [
          '3-bedroom rental house',
          'Backyard space',
          'Nearby playground',
          'In-home laundry',
          'Dishwasher',
          'Equipped for central air',
        ],
        cost: 3,
      },
    ],
  },
  {
    name: 'healthcare',
    displayName: 'Healthcare',
    options: [
      {
        title: 'Difficult',
        icon: '',
        description: [
          'Pay all health expenses out of pocket.  A health emergency would mean default, collections, and bankruptcy.',
        ],
        cost: 0,
      },
      {
        title: 'Limited',
        icon: '',
        description: [
          '$5000 Deductible Health Plan from Insurer that covers children',
          'If anyone needs health care it would be very expensive – but a health care emergency wouldn’t cost more than $5000.',
        ],
        cost: 3,
      },
      {
        title: 'Convenient',
        icon: '',
        description: [
          'Employer offers Co-play plan. Emergency costs are capped and routine medical expenses would be limited to about $50. Dental and vision plans.',
        ],
        cost: 4,
      },
    ],
  },
  {
    name: 'food',
    displayName: 'Food',
    options: [
      {
        title: 'Difficult',
        icon: '',
        description: [
          '1 Full meal per day',
          'Heavily relying on fast food and corner stores',
        ],
        cost: 1,
      },
      {
        title: 'Limited',
        icon: '',
        description: [
          '2 Full Meal Per Day',
          'Frozen Dinners, Limited Produce',
          'Discount grocer like “Save-A-Lot”',
        ],
        cost: 2,
      },
      {
        title: 'Convenient',
        icon: '',
        description: [
          '3 full meals per day',
          'High quality grocery stores with full produce sections',
          'Home cooked meals with fresh ingredients',
        ],
        cost: 3,
      },
    ],
  },
  {
    name: 'education',
    displayName: 'Education',
    options: [
      {
        title: 'Difficult',
        icon: '',
        description: [
          'Children attend unaccredited public school district',
          '74% graduation rate',
          'High incidence of violence at school',
        ],
        cost: 1,
      },
      {
        title: 'Limited',
        icon: '',
        description: [
          'Children bussed to charter schools',
          'Website boasts high graduation rate and student satisfaction',
          'Schools are unregulated and data is not verified',
        ],
        cost: 3,
      },
      {
        title: 'Convenient',
        icon: '',
        description: [
          'Private or Montessori school',
          'Small class size',
          'Children receive personalized attention, care, and guidance',
        ],
        cost: 4,
      },
    ],
  },
  {
    name: 'transportation',
    displayName: 'Transportation',
    options: [
      {
        title: 'Difficult',
        icon: '',
        description: [
          'Used bike',
          'Reliant on Spotty public transportation',
        ],
        cost: 1,
      },
      {
        title: 'Limited',
        icon: '',
        description: [
          'Used Car purchased from lot',
          'Prone to serious mechanical problems',
          'Can use bike or public transportation when necessary',
        ],
        cost: 2,
      },
      {
        title: 'Convenient',
        icon: '',
        description: [
          'Pre-owned vehicle purchased from dealer',
          'Reliable – purchased with warranty',
          'Can use bike or public transportation when necessary',
        ],
        cost: 4,
      },
    ],
  },
  {
    name: 'utilities',
    displayName: 'Utilities',
    options: [
      {
        title: 'Difficult',
        icon: '',
        description: [
          'Electricity and Water provided by city',
          'Use of space heater when gas heat is inadequate',
          "Can’t afford electric bills when AC is on – rely on box fans",
          'No cable television',
          'No internet plan',
          'Family uses pre-paid flip phones to stay connected',
        ],
        cost: 2,
      },
      {
        title: 'Limited',
        icon: '',
        description: [
          'Electricity and Water provided by city',
          'Can use window unit or central air (depending on housing option)',
          'Discount internet plan (low bandwidth; intermittent signal)',
          'No Cable, 1-2 Streaming services',
          'Refurbished early generation smart phones',
        ],
        cost: 3,
      },
      {
        title: 'Convenient',
        icon: '',
        description: [
          'Electricity and Water provided by city',
          'Can use window unit or central air (depending on housing option)',
          'Spectrum Internet',
          'Can choose cable or streaming services based on viewing preferences',
          'Refurbished smartphones that were manufactured in the last 5 years',
        ],
        cost: 4,
      },
    ],
  },
  {
    name: 'childcare',
    displayName: 'Childcare',
    options: [
      {
        title: 'Difficult',
        icon: '',
        description: [
          'No childcare. Rely on availability and willingness of neighborhood parents and and family.',
        ],
        cost: 0,
      },
      {
        title: 'Limited',
        icon: '',
        description: [
          'Unaccredited, Unlicensed neighbor with an off-the-books childcare side hustle.',
        ],
        cost: 1,
      },
      {
        title: 'Convenient',
        icon: '',
        description: [
          'Accredited, safe, reliable childcare facility.',
        ],
        cost: 4,
      },
    ],
  },
];

export default categories;