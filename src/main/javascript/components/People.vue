<template>
<div>
  <h1>The people I know</h1>
  <div class="people-list">
    
    <person :person="p" v-for="p in people" :key="p.firstname + p.lastname"/>

  </div>
</div>
</template>
<script>
import axios from 'axios';
import Person from './Person.vue';

export default {
    components: {
        'person': Person
    },

    mounted() {
        axios.get("/people")
          .then(response => {
              this.people = response.data;
          })
          .catch(err => {
              alert("Failed to fetch data from /people", err);
          })
    },
    data() {
        return {
            people: []
        }
    }
}
</script>