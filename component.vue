<template>
  <section>
   <slot></slot>
   <h2>sample text</h2>
  </section>
</template>

<style scoped>
  section {
      background-color: greenyellow;
      height: 100vh;
      width: 100vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
</style>