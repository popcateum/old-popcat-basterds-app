<script lang="ts">
  import Saos from 'saos'
  import Mint from '$lib/mint/index.svelte'
  let isMouseOver = true
  let modalState: boolean = false

  function popcatImageupdate() {
    isMouseOver = !isMouseOver
  }
</script>

<div class="wrap">
  <div class="title-wrap">
    <Saos animation="{'typing 3.5s steps(40, end)'}">
      <div class="middle-title">Do you want to be</div>
      <div class="middle-title-color">Old Popcat Bastard?</div>
      <div class="middle-title">Here are the rules.</div>
    </Saos>
  </div>
  <!-- animation: typing 3.5s steps(40, end); -->
  <div class="title-wrap-mobile">
    <Saos animation="{'typing 3.5s steps(40, end)'}">
      <div class="middle-title">Do you <br /> want to be</div>
    </Saos>
    <Saos animation="{'typing 3.5s steps(40, end)'}">
      <div class="middle-title-color">Old Popcat <br /> Bastard?</div>
    </Saos>
    <Saos animation="{'typing 3.5s steps(40, end)'}">
      <div class="middle-title">Here are <br /> the rules.</div>
    </Saos>
  </div>

  <div class="content-wrap">
    <div class="image-wrap">
      {#if isMouseOver}
        <img src="images/laser1.png" alt="popcat" on:mouseenter="{popcatImageupdate}" />
      {:else}
        <!-- svelte-ignore a11y-mouse-events-have-key-events -->
        <img src="images/laser2.png" alt="popcat" on:mouseout="{popcatImageupdate}" />
      {/if}
    </div>
    <Saos animation="{'scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'}">
      <div class="red-box">
        <div class="inner-box">
          <div class="inner-wrap">
            <div class="inner-title">RULE No.1</div>
            <div class="inner-content">
              According to your wallet age, the NFT that you can mint is different. More older it is, more valuable
            </div>
          </div>
          <div class="inner-wrap">
            <div class="inner-title">RULE No.2</div>
            <div class="inner-content">Old Popcat Basterds NFT holders will receive POP coins soon.</div>
          </div>
          <div class="inner-wrap">
            <div class="inner-title">RULE No.3</div>
            <div class="inner-content">You can only mint 1 NFTs with one wallet.</div>
          </div>
          <div class="inner-wrap">
            <div class="inner-title">RULE No.4</div>
            <div class="inner-content">
              Minting Old Popcat Basterds NFT is free, but you need to send 0.01ETH grant to OBP dev.
            </div>
          </div>
        </div>
      </div>
    </Saos>

    <div class="button-wrap">
      <button class="normal-button" on:click="{() => (modalState = !modalState)}">Mint NFT</button>
      <button class="normal-button" on:click="{() => window.open('https://opensea.io/')}">Opensea</button>
    </div>
  </div>
</div>

<Mint modalState="{modalState}" on:click="{() => (modalState = !modalState)}" />

<style lang="scss">
  @keyframes -global-scale-in-center {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes -global-title {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes typing {
    from {
      width: 0;
    }

    to {
      width: 100%;
    }
  }
  .title-wrap-mobile {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .middle-title {
      display: block;
      text-align: center;
      font-family: 'Karmatic Arcade';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;
      background: white;
      letter-spacing: -0.01em;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .middle-title-color {
      font-family: 'Karmatic Arcade';
      text-align: center;
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
  .normal-button {
    margin: 10px;
  }

  .button-wrap {
    padding: 30px;
  }
  .inner-box {
    margin: 15px;
    padding: 20px;
  }
  .inner-wrap {
    margin-bottom: 30px;
  }

  .inner-title {
    font-style: normal;
    font-size: 30px;
    line-height: 50px;
  }

  .inner-content {
    font-style: normal;
    font-size: 22px;
    line-height: 40px;
  }

  .image-wrap {
    margin-bottom: 30px;
    width: 456px;
    height: 440px;
  }
  .red-box {
    background: #c4c4c4;
    border: 2px solid #000000;
    box-sizing: border-box;
    color: black;
    box-shadow: 10px 10px #000;
    /* animation: fadeInUp 1s; */
  }

  .inner-box {
    border: 2px solid #000000;
    box-sizing: border-box;
  }

  @media screen and (max-width: 1280px) {
    .normal-button {
      margin: 10px;
    }

    .button-wrap {
      padding: 30px;
    }
    .inner-box {
      margin: 15px;
      padding: 20px;
    }
    .inner-wrap {
      margin-bottom: 30px;
    }

    .inner-title {
      font-style: normal;
      font-size: 20px;
      line-height: 40px;
    }

    .inner-content {
      font-style: normal;
      font-size: 16px;
      line-height: 30px;
    }

    .image-wrap {
      margin-bottom: 25px;
      width: 341px;
      height: 330px;
      img {
        width: 100%;
      }
    }
    .red-box {
      box-sizing: border-box;
    }

    .inner-box {
      box-sizing: border-box;
    }
  }

  @media screen and (max-width: 768px) {
    .title-wrap-mobile {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .middle-title {
        display: block;
        text-align: center;
        font-family: 'Karmatic Arcade';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        background: white;
        letter-spacing: -0.01em;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      .middle-title-color {
        font-family: 'Karmatic Arcade';
        text-align: center;
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
    .normal-button {
      margin: 4px;
    }

    .button-wrap {
      padding: 30px;
    }
    .inner-box {
      margin: 15px;
      padding: 20px;
    }
    .inner-wrap {
      margin-bottom: 20px;
    }

    .inner-title {
      font-style: normal;
      font-size: 18px;
      line-height: 30px;
    }

    .inner-content {
      font-style: normal;
      font-size: 12px;
      line-height: 20px;
    }

    .image-wrap {
      margin-bottom: 25px;
      width: 255px;
      height: 249px;
      img {
        width: 100%;
      }
    }
    .red-box {
      box-sizing: border-box;
    }

    .inner-box {
      box-sizing: border-box;
    }
  }
</style>
