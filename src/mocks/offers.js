export const offers = [
  {
    type: 'taxi',
    offers: [
      {
        id: '1',
        title: 'Upgrade to a business class',
        price: 120
      },
      {
        id: '2',
        title: 'Upgrade to a limousine',
        price: 300
      },
      {
        id: '3',
        title: 'Upgrade to a minivan',
        price: 30
      },
      {
        id: '4',
        title: 'oversized luggage',
        price: 60
      },
      {
        id: '5',
        title: 'chair for child',
        price: 30
      }
    ]
  },
  {
    type: 'bus',
    offers: []
  },
  {
    type: 'flight',
    offers: [
      {
        id: '1',
        title: 'Upgrade to a business class',
        price: 500
      },
      {
        id: '2',
        title: 'Upgrade to a first class',
        price: 1000
      },
      {
        id: '3',
        title: 'Platinum last minute upgrade.',
        price: 20
      },
      {
        id: '4',
        title: 'luggage +10kg',
        price: 40
      }
    ]
  },
  {
    type: 'train',
    offers: [
      {
        id: '1',
        title: 'Upgrade to a business class',
        price: 120
      },
      {
        id: '2',
        title: 'Upgrade to a luxury class',
        price: 120
      },
      {
        id: '3',
        title: 'shower',
        price: 10
      },
      {
        id: '4',
        title: 'Dinner',
        price: 20
      },
      {
        id: '5',
        title: '',
        price: 120
      },
      {
        id: '6',
        title: 'Upgrade to a business class',
        price: 120
      }
    ]
  }
];

export function getOffers(){
  return offers;
}
