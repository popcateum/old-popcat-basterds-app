<script context="module">
  /** @type {import('@sveltejs/kit').ErrorLoad} */
  export function load({ error, status }) {
    return {
      props: {
        title: `${status}: ${error.message}`
      }
    }
  }
</script>

<script>
  // @ts-nocheck

  export /**
   * @type {any}
   */
  let title
</script>

<div class="background">
  <div class="error">
    <div class="error-title">Error</div>
    <div class="error-message">{title}</div>
  </div>
</div>

<style lang="scss">
  .error-title {
    font-size: 50px;
    color: white;
  }
  .error {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .error-message {
    font-size: 30px;
    color: white;
  }
</style>
