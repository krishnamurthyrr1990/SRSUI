import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Consumer Electronics' },
      { id: 12, name: 'Mobiles' },
      { id: 13, name: 'Bags' },
      { id: 14, name: 'Batteries' },
      { id: 15, name: 'Bags' },
      { id: 16, name: 'Gold' },
      { id: 17, name: 'Footwear' },
      { id: 18, name: 'Mobile Accessories' },
      { id: 19, name: 'HouseHold' },
      { id: 20, name: 'Tornado' },
      { id: 21, name: 'Consumer Electronics' },
      { id: 22, name: 'Mobiles' },
      { id: 23, name: 'Bags' },
      { id: 24, name: 'Batteries' },
      { id: 25, name: 'Bags' },
      { id: 26, name: 'Gold' },
      { id: 27, name: 'Footwear' },
      { id: 28, name: 'Mobile Accessories' },
      { id: 29, name: 'HouseHold' },
      { id: 30, name: 'Tornado' }
    ];
    return {heroes};
  }
}
