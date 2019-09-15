import Route from '@ember/routing/route';

export default Route.extend({
  // model() {
  //   return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann', 'Heddy Lamar']
  // }
  model() {
    return [
      { name: 'Marie Curie', url: 'https://en.wikipedia.org/wiki/Marie_Curie' },
      { name: 'Mae Jemison', url: 'https://en.wikipedia.org/wiki/Mae_Jemison' },
      { name: 'Albert Hofmann', url: 'https://en.wikipedia.org/wiki/Albert_Hofmann' },
      { name: 'Heddy Lamarr', url: 'https://en.wikipedia.org/wiki/Hedy_Lamarr' }
    ]
  }
});
