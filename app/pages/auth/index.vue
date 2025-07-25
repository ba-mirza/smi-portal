<template>
  <div>
    <h1>Auth page</h1>
    <form @submit="toAuth">
      <input type="text" placeholder="Login">
      <input type="password" placeholder="Password">
      <input type="submit">
    </form>
  </div>
</template>

<script lang="ts" setup>
const toAuth = (e: Event) => {
  e.preventDefault();
  console.log("auth...")
}
</script>

<style></style>