<script lang="ts">
  import Mint from '$lib/mint/index.svelte'
  let modalState: boolean = false
</script>

<div class="explain">
  You have no Old Popcat Basterds NFT.
  <br />
  <br />
  If you want to be a Basterd, you need to get one.
</div>
<div class="button-wrap">
  <button class="normal-button" on:click="{() => (modalState = !modalState)}">Free Mint</button>
  <button
    class="normal-button"
    on:click="{() => window.open('https://opensea.io/')}"
    >Opensea</button
  >
</div>

<Mint modalState="{modalState}" on:click="{() => (modalState = !modalState)}" />

<style lang="scss">
  .explain {
    font-weight: 400;
    font-size: 20px;
    line-height: 40px;
  }
  .button-wrap {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
  .normal-button {
    margin: 10px;
  }

  @media screen and (max-width: 1280px) {
    .explain {
      font-weight: 400;
      font-size: 16px;
      line-height: 30px;
    }
  }

  @media screen and (max-width: 768px) {
    .explain {
      font-weight: 400;
      font-size: 14px;
      line-height: 30px;
    }
  }
</style>
