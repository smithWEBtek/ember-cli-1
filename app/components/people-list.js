import Component from '@ember/component';

export default Component.extend({
  actions: {
    showPerson(person) {
      // alert(person.name)
      console.log('you clicked: ', person.name)
    }
  }
});
