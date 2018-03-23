<template>
  <div>
    Please Enter Tonnage
    <input class="tonnageInput"/>
    <div>
      Please Enter Movement
      <input v-model='walkingSpeed' @keyup='calculateRun' class="movementInput"/>
    </div>
    <div class="runningSpeed">
      Running Speed: {{runningSpeed}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'MechGenerator',
  data () {
    return {
      msg: 'Begin entering your \'mech data',
      walkingSpeed: 0,
      runningSpeed: 0,
      BattleMech
    }
  },
  methods: {
    calculateRun () {
      this.runningSpeed = Math.round(this.walkingSpeed * 1.5)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
