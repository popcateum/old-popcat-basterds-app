<script lang="ts">
  import Saos from 'saos'

  let modalState: boolean = false
</script>

{#if modalState}
  <div class="modal">
    <div class="window-box">
      <div class="window-bar">
        <div class="window-close">
          <div class="x-box" on:click="{() => (modalState = false)}">x</div>
        </div>
      </div>
      <div class="window-content">
        <div class="content-paragraph">It was not a button actually. <br /> Sorry, you’re fooled.</div>
        <div style="display: flex; justify-content: center;">
          <button class="normal-button" on:click="{() => (modalState = false)}"> close </button>
        </div>
      </div>
    </div>
  </div>
{/if}

<div class="wrap">
  <div class="title-wrap">
    <Saos animation="{'typing 3.5s steps(40, end)'}">
      <div class="middle-title-color">INCENTIVES AND ROADMAP</div>
    </Saos>
  </div>

  <div class="title-wrap-mobile">
    <Saos animation="{'typing 3.5s steps(40, end)'}">
      <div class="middle-title-color">INCENTIVES <br /> AND <br /> ROADMAP</div>
    </Saos>
  </div>

  <Saos animation="{'scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'}">
    <div class="content-wrap">
      <div class="window-box">
        <div class="window-bar">
          <div class="window-close">
            <div class="x-box" on:click="{() => (modalState = true)}">x</div>
          </div>
        </div>
        <div class="window-content">
          <div class="content-paragraph">
            <span class="red-sentence">There are not many incentives and specific roadmap.</span> We will do what you ask
            us to do. Or if you have something that you want to do, then just do it by yourself as you want.
          </div>
          <div class="content-paragraph">
            Maybe you can brag your Old Popcat Basterds NFTs to other people. Owning an OPB NFT will tell a lot about
            yourself.
          </div>
          <div class="content-paragraph">
            <span class="red-sentence">OPB NFT holders will receive POP coin airdrops in the future.</span> POP coin is
            native coin of Popcateum meme blockchain.
            <span class="blue-sentence">But it has no exchange value yet.</span>
            We even don’t know if it will have or not.
          </div>
          <div class="content-paragraph">
            Anyway, OPB NFT holders will be able to participate in the exclusive community of Popcateum.
          </div>
          <div class="content-paragraph">
            If this project continues, your NFT image will be upgraded as your Popcat is getting older.
          </div>
        </div>
      </div>
    </div>
  </Saos>
</div>

<style lang="scss">
  .modal {
    z-index: 100;
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100vh;
  }
  .title-wrap-mobile {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .title-wrap-mobile {
      display: flex;
      flex-direction: column;
      .middle-title-color {
        font-family: 'Karmatic Arcade';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 39px;
        letter-spacing: -0.01em;
        background: linear-gradient(90deg, #05f4fb 0%, #f6efa7 104.29%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }
  }
</style>
