<script lang="ts">
  import { page } from '$app/stores'
  import WalletCheck from '$lib/wallet-check/index.svelte'

  let address: string
  let shortAddress: string
  let thisYear: any
  let ogTitle: string
  let ogDescription: string
  let ogImage: string

  if (checkIsAddress($page.params.id)) {
    address = $page.params.id
    shortAddress = `${address.slice(0, 6)}...${address.slice(-4)}`
    thisYear = $page.url.searchParams.get('year')
    ogTitle = `${shortAddress}'s wallet`
    ogDescription = `born in ${thisYear}`
    ogImage = `/images/${thisYear}.png`
  } else {
    address = 'null'
    ogTitle = `Invalid wallet account.`
    ogDescription = `Invalid wallet account. Please check your wallet account`
    ogImage = `/images/wallet-og.png`
  }
  // const address: string = $page.params.id
  // const shortAddress: string = `${address.slice(0, 6)}...${address.slice(-4)}`
  // const thisYear = $page.url.searchParams.get('year')

  function checkIsAddress(address: string) {
    if (address.length === 42) {
      return true
    } else {
      return false
    }
  }
</script>

<svelte:head>
  <title>Old Popcat Basterds</title>
  <meta property="og:title" content="{ogTitle}" />
  <meta property="og:description" content="{ogDescription}" />
  <meta property="og:image" content="{ogImage}" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="{ogTitle}" />
  <meta
    name="twitter:description"
    content="{ogDescription}"
  />
  <meta name="twitter:image" content="{ogImage}" />
</svelte:head>

<div class="background">
  <WalletCheck address="{address}" />
</div>
