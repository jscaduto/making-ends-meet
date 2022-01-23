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
          'Window A/C',
          'Space heater',
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
          'Window A/C',
          'Space heater',
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
          'Central A/C and heat',
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
          'None',
          'Pay all health expenses',
          'Out of pocket',
        ],
        cost: 1,
      },
      {
        title: 'Limited',
        icon: '',
        description: [
          'Health insurance',
          'Employer provided',
          '- One Parent',
          '- Both children',
          'No coverage for partner',
        ],
        cost: 2,
      },
      {
        title: 'Convenient',
        icon: '',
        description: [
          'Health insurance',
          'Employer provided',
          '- Coverage for family',
        ],
        cost: 3,
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
          '1 full meal/day',
          'Closest stores',
          '- Gas station',
          '- Dollar store',
          'No fresh produce',
        ],
        cost: 1,
      },
      {
        title: 'Limited',
        icon: '',
        description: [
          '2 full meals/day',
          'Closest store',
          '- Discount store',
          'Limited fresh produce',
        ],
        cost: 2,
      },
      {
        title: 'Convenient',
        icon: '',
        description: [
          '3 full meals/day',
          'Various food options',
          'Fresh produce nearby',
          "- Farmer's market",
          '- Full grocery store',
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
          'Oldest child',
          '- Public school',
          '- No school bus',
          'Youngest child',
          '- No preschool',
        ],
        cost: 1,
      },
      {
        title: 'Limited',
        icon: '',
        description: [
          'Oldest child',
          '- Public school',
          '- Rides school bus',
          'Youngest child',
          '- Head Start',
          '- Lottery system',
        ],
        cost: 2,
      },
      {
        title: 'Convenient',
        icon: '',
        description: [
          'Oldest child',
          '- Public school or',
          '- Private school',
          '- Rides school bus',
          'Youngest child',
          '- Preschool',
        ],
        cost: 3,
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
          'Public bus',
          'Bike',
        ],
        cost: 1,
      },
      {
        title: 'Limited',
        icon: '',
        description: [
          'Used, 15-year old car',
          'Bus',
          'Subway',
          'Bike',
        ],
        cost: 2,
      },
      {
        title: 'Convenient',
        icon: '',
        description: [
          'Reliable car',
          'Bus',
          'Subway',
          'Bike',
        ],
        cost: 3,
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
          'Running water',
          'Intermittent electricity',
          'Window A/C',
          'Space heater',
          'No cable television',
          'No internet',
          'Two prepaid phones',
        ],
        cost: 1,
      },
      {
        title: 'Limited',
        icon: '',
        description: [
          'Running water',
          'Electricity',
          'Window A/C',
          'Central heat',
          'No cable television',
          'Low-speed internet',
          'One smartphone',
          'One prepaid phone',
        ],
        cost: 2,
      },
      {
        title: 'Convenient',
        icon: '',
        description: [
          'Running water',
          'Electricity',
          'Central air conditioning',
          'Central heat',
          'High-speed internet',
          'Cable television',
          'Smartphones for both parents',
        ],
        cost: 3,
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
        cost: 1,
      },
      {
        title: 'Limited',
        icon: '',
        description: [
          'Unaccredited, Unlicensed neighbor with an off-the-books childcare side hustle.',
        ],
        cost: 2,
      },
      {
        title: 'Convenient',
        icon: '',
        description: [
          'Accredited, safe, reliable childcare facility.',
        ],
        cost: 3,
      },
    ],
  },
];

export default categories;