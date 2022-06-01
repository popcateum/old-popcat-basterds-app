<script lang="ts">
  import { page } from '$app/stores'
  import WalletShare from '$lib/wallet-share/index.svelte'

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
    if (parseInt(thisYear) > 2022 || parseInt(thisYear) < 2015 || Number.isNaN(parseInt(thisYear))) {
      ogTitle = `${shortAddress}'s wallet`
      ogDescription = `Invalid year`
      ogImage = `https://storage.googleapis.com/popcateum-asset/images/opb/og/wallet-og.png`
    } else {
      ogTitle = `${shortAddress}'s wallet`
      ogDescription = `born in ${thisYear}`
      ogImage = `https://storage.googleapis.com/popcateum-asset/images/opb/og/${thisYear}-og.png`
    }
  } else {
    address = 'null'
    ogTitle = `Invalid wallet account.`
    ogDescription = `Invalid wallet account. Please check your wallet account`
    ogImage = `https://storage.googleapis.com/popcateum-asset/images/opb/og/wallet-og.png`
  }

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
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@Oldpopcat" />
  <meta name="twitter:title" content="{ogTitle}" />
  <meta name="twitter:description" content="{ogDescription}" />
  <meta name="twitter:image" content="{ogImage}" />
</svelte:head>

<div class="background">
  <WalletShare address="{address}" />
</div>
