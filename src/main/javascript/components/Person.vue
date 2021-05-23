<template>
<div>
  <h3>{{person.firstname}} {{person.lastname}}</h3>
  <div class="person-bio">
    <p><strong>Age:</strong>&nbsp;{{person.age}}</p>
    <p><strong>Where:</strong>&nbsp;{{person.location}}</p>
    <p><strong>Who they are to me:</strong>&nbsp;{{person.relationship}}</p>
    <p><strong>What they do:</strong>&nbsp;{{person.occupation}}</p>
  </div>
  <hr>
</div>
</template>
<script>
export default {
    props: [ "person" ]
}
</script>