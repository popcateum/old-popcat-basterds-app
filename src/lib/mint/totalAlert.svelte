<script lang="ts">
  export let modalState: boolean
</script>

{#if modalState}
  <div class="modal">
    <div class="window-box">
      <div class="window-bar">
        <div class="window-close">
          <div class="x-box" on:click>x</div>
        </div>
      </div>
      <div class="window-content">
        <div class="content-paragraph" style="width: 100%;">Minting has ended.</div>
        <div>
          <button class="normal-button" on:click> close </button>
        </div>
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  .modal {
    z-index: 1000;
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
  }

  .window-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .content-paragraph {
    width: 60%;
  }

  @media screen and (max-width: 768px) {
    .content-paragraph {
      width: 80%;
    }
  }
</style>
