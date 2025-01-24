export const SortType = {
  DAY: 'day',
  PRICE: 'price',
  TIME: 'time',
};

export const SORT_OPTIONS = [
  { id: 'sort-day', value: 'day', label: 'Day', isDisabled: false, isChecked: true },
  { id: 'sort-event', value: 'event', label: 'Event', isDisabled: true, isChecked: false },
  { id: 'sort-time', value: 'time', label: 'Time', isDisabled: false, isChecked: false },
  { id: 'sort-price', value: 'price', label: 'Price', isDisabled: false, isChecked: false },
  { id: 'sort-offer', value: 'offer', label: 'Offers', isDisabled: true, isChecked: false },
];
