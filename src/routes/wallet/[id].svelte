<script lang="ts">
  import { page } from '$app/stores'
  import WalletCheck from '$lib/wallet-check/index.svelte'

  const address: string = $page.params.id
</script>

<svelte:head>
  <title>Old Popcat Basterds</title>
  <meta property="og:title" content="{address}'s wallet" />
  <meta property="og:description" content="{address}'s wallet" />
  <meta property="og:image" content="/images/wallet-og.png" />
</svelte:head>

<div class="background">
  <WalletCheck address="{address}" />
</div>
