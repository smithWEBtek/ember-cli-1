import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      { name: 'DHH', url: 'https://en.wikipedia.org/wiki/David_Heinemeier_Hansson' },
      { name: 'Edgar F. Codd', url: 'https://en.wikipedia.org/wiki/Edgar_F._Codd' },
      { name: 'Yukihiro Matsumoto', url: 'https://en.wikipedia.org/wiki/Yukihiro_Matsumoto' }
    ]
  }
});
