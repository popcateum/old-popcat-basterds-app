<script context="module" lang="ts">
  export const prerender = false
</script>

<script lang="ts">
  import Header from '$lib/header/index.svelte'
  import Footer from '$lib/footer/index.svelte'
  import '../global.css'
  import '../scss/common.scss'
</script>

<Header />

<main>
  <slot />
</main>

<Footer />

<style lang="scss">
  main {
    margin: 0px auto;
  }
</style>
