<template>
  <div id="app">
    <Contacts />
  </div>
</template>

<script>
import Contacts from './components/Contacts.vue';

export default {
  name: 'app',
  components: {
    Contacts,
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
