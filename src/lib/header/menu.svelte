<script lang="ts">
  import Fa from 'svelte-fa'
  import Connect from '$lib/connect/index.svelte'

  export let showModal: boolean
</script>

{#if showModal}
  <div class="modal">
    <dib class="window-box">
      <div class="window-bar">
        <div class="window-close">
          <div class="x-box" on:click>x</div>
        </div>
      </div>
      <div class="window-content">
        <div class="menu-list">
          <a href="#my-nft" class="header-menu-item-link" style="color: black;" on:click>
            <div class="header-menu-item-text" style="color: black;">MyNFT</div>
          </a>
        </div>
        <div class="menu-list">
          <a href="https://opensea.io/" class="header-menu-item-link" target="_blank" on:click>
            <div class="header-menu-item-text">Opensea</div>
          </a>
        </div>
        <div class="menu-list">
          <a href="#status" class="header-menu-item-link" on:click>
            <div class="header-menu-item-text">Status</div>
          </a>
        </div>
        <div class="menu-list"><Connect /></div>
      </div>
    </dib>
  </div>
{/if}

<style lang="scss">
  .window-box {
    margin: 0px;
  }
  .window-content {
    border: 0px;
    display: flex;
    flex-direction: column;
  }

  .menu-list {
    font-family: 'Kongtext';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 22px;
    padding: 20px 0px;
  }

  .header-menu-item-text {
    color: $primary-color;
  }

  a {
    text-decoration: none;
  }

  .modal {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: $secondary-color;
    z-index: 100;
  }
</style>
