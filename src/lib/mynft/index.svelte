<script lang="ts">
  import Saos from 'saos'
  import NftList from './nft-list.svelte'
  import Twitter from './twitter.svelte'
  import NoNFT from './no-nft.svelte'
  import { myBalance } from '$stores/index'
</script>

<div id="my-nft" style="height: 60px;"></div>

<div class="wrap">
  <div class="title-wrap">
    <Saos animation="{'typing 1.5s steps(40, end)'}">
      <div class="middle-title-color">My NFT</div>
    </Saos>
  </div>

  <div class="title-wrap-mobile">
    <Saos animation="{'typing 1.5s steps(40, end)'}">
      <div class="middle-title-color">My NFT</div>
    </Saos>
  </div>

  {#if $myBalance > 0}
    <div class="content-wrap">
      <NftList />
      <Twitter />
    </div>
  {:else}
    <NoNFT />
  {/if}
</div>
