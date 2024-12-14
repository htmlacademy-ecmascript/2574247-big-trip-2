export const events = [
  {
    id: '1',
    basePrice: 200,
    dateFrom: '2024-11-10T22:55:56',
    dateTo: '2024-11-11T11:22:13',
    destination: '3',
    isFavorite: false,
    offers: ['1', '4'],
    type: 'taxi'
  },
  {
    id: '2',
    basePrice: 90,
    dateFrom: '2024-11-12T22:55:56',
    dateTo: '2024-11-13T11:22:13',
    destination: '1',
    isFavorite: false,
    offers: ['2', '4'],
    type: 'bus'
  },
  {
    id: '3',
    basePrice: 900,
    dateFrom: '2024-11-14T02:42:56',
    dateTo: '2024-11-14T11:22:13',
    destination: '2',
    isFavorite: true,
    offers: ['1', '2'],
    type: 'flight'
  },
  {
    id: '4',
    basePrice: 300,
    dateFrom: '2024-11-16T22:55:56',
    dateTo: '2024-11-17T11:22:13',
    destination: '4',
    isFavorite: false,
    offers: [],
    type: 'train'
  }
];

export function getEvents (){
  return events;
}


