<script lang="ts">
  import Intro from '$lib/intro/index.svelte'
  import Rule from '$lib/rule/index.svelte'
  import Info from '$lib/info/index.svelte'
  import Status from '$lib/status/index.svelte'
  import Incentive from '$lib/incentive/index.svelte'
  import MyNFT from '$lib/mynft/index.svelte'
  import Roadmap from '$lib/roadmap/index.svelte'
</script>

<svelte:head>
  <title>Old Popcat Basterds</title>
  <meta property="og:title" content="Old Popcat Basterds" />
  <meta property="og:description" content="The world’s first NFT project based on real Ethereum history." />
  <meta property="og:image" content="/images/og-image.png" />
</svelte:head>

<div class="background">
  <Intro />
  <Rule />
  <Info />
  <Status />
  <Incentive />
  <MyNFT />
  <Roadmap />
</div>
