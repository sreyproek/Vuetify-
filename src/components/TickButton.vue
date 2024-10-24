<template>
  <div class="tick">
  <button @click="toggle">
    {{ isTicked ? "✓" : "" }}
  </button>
</div>
</template>

<script>
export default {
  props: {
    isTicked: Boolean,
  },
  methods: {
    toggle() {
      this.$emit("tick-changed");
    },
  },
};
</script>

<style>
button {
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 5px;
}
.tick{
  margin-top: 3px; 
}

</style>
