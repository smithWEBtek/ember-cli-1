import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      { name: 'Maru', color: 'brown', url: 'https://en.wikipedia.org/wiki/Havana_Brown' },
      { name: 'Felix', color: 'white', url: 'https://en.wikipedia.org/wiki/White_Cat' },
      { name: 'Garfield', color: 'tan', url: 'https://en.wikipedia.org/wiki/Olivia_Cattan' }
    ]
  }
});
