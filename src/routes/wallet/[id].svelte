<script lang="ts">
  import { page } from '$app/stores'
  import WalletCheck from '$lib/wallet-check/index.svelte'

  const address: string = $page.params.id
  const shortAddress: string = `${address.slice(0, 6)}...${address.slice(-4)}`
  const thisYear = $page.url.searchParams.get('year')
</script>

<svelte:head>
  <title>Old Popcat Basterds</title>
  <meta property="og:title" content="{shortAddress}'s wallet" />
  <meta property="og:description" content="born in {thisYear}" />
  <meta property="og:image" content="/images/{thisYear}.png" />
</svelte:head>

<div class="background">
  <WalletCheck address="{address}" />
</div>
