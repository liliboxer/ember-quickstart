import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return ['Garfield', 'Max', 'Felix', 'Hello Kitty', 'Simba', 'Nala', 'Puss in Boots', 'Cheshire', ]
  }
});
