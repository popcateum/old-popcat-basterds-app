<script lang="ts">
  import { myAddress, myYear } from '$stores/index'

  import MovingBar from './moving-bar.svelte'
  import WalletCheck from './walleCheck.svelte'

  let isMouseOver = true
  let modalState = false

  function popcatImageupdate() {
    isMouseOver = !isMouseOver
  }

  function checkWallet() {
    if ($myYear > 0) {
      location.href = `/wallet/${$myAddress}?year=${$myYear}`
    } else {
      modalState = !modalState
    }
  }
</script>

<div class="header-space"></div>

<div class="absolut-image-1">
  {#if isMouseOver}
    <img src="images/popcat1.png" alt="popcat" on:mouseenter="{popcatImageupdate}" />
  {:else}
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <img src="images/popcat2.png" alt="popcat" on:mouseout="{popcatImageupdate}" />
  {/if}
</div>

<div class="absolut-image-2">
  {#if isMouseOver}
    <img src="images/popcat1.png" alt="popcat" on:mouseenter="{popcatImageupdate}" />
  {:else}
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <img src="images/popcat2.png" alt="popcat" on:mouseout="{popcatImageupdate}" />
  {/if}
</div>

<div class="absolut-image-3">
  {#if isMouseOver}
    <img src="images/popcat1.png" alt="popcat" on:mouseenter="{popcatImageupdate}" />
  {:else}
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <img src="images/popcat2.png" alt="popcat" on:mouseout="{popcatImageupdate}" />
  {/if}
</div>

<div class="sub-text-one">
  How old your wallet is ?
  <br />
  Your wallet history becomes value
</div>

<div class="intro-wrap">
  <div class="title">Old Popcat Basterds</div>
</div>

<div class="intro-wrap-mobile">
  <div class="title">Old <br /> Popcat<br /> Basterds</div>
</div>

<div class="sub-text-two">Powered by Popcateum</div>

<div class="intro-wrap-sub">
  <div class="context">
    The world’s first NFT project based on real Ethereum history.
    <br />
    Your wallet address can be your valuable asset.
    <br />
    According to your wallet age, you can mint priviledged NFT.
    <br />
    Are you ready to prove out yourself through Old Popcat Basterds NFT ?
  </div>

  <div class="button-wrap">
    <button class="normal-button" on:click="{checkWallet}"> check my wallet </button>
  </div>
</div>

<WalletCheck modalState="{modalState}" on:click="{() => (modalState = !modalState)}" />

<MovingBar />

<style lang="scss">
  .intro-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1280px;
    margin: 50px auto;
  }

  .intro-wrap-sub {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1280px;
    margin: 20px auto;
  }

  .button-wrap {
    display: flex;
    justify-content: center;
  }

  .title {
    font-family: Karmatic Arcade;
    font-style: normal;
    font-weight: 400;
    font-size: 84px;
    width: 100%;
    line-height: 103px;
    animation: typing 3s steps(22), blink 0.5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
  }

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }

  .sub-text-one {
    transform: rotate(354deg);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 1280px;
    margin: 0px auto;
    font-family: Charybdis;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 30px;
    color: #c4f4bd;
  }

  .sub-text-two {
    transform: rotate(354deg);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    max-width: 1280px;
    margin: 0px auto;
    font-family: '80er Teenie Demo';
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 33px;
    color: #edbdf4;
  }

  .context {
    font-family: 'PC Senior';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 50px;
    width: 100%;
  }

  .button-wrap {
    margin-top: 200px;
    margin-bottom: 200px;
  }

  .absolut-image-1 {
    position: absolute;
    left: 0px;
    top: 735px;
    z-index: -1;
    img {
      width: 100%;
    }
  }

  .absolut-image-2 {
    position: absolute;
    left: -30px;
    top: 215px;
    z-index: -1;
    transform: rotate(57.11deg);
    img {
      width: 135px;
    }
  }

  .absolut-image-3 {
    position: absolute;
    right: -80px;
    top: 140px;
    z-index: -1;
    transform: rotate(-51.78deg);
    img {
      width: 243px;
    }
  }

  .intro-wrap-mobile {
    display: none;
  }

  @media screen and (max-width: 1280px) {
    .intro-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 768px;
      margin: 50px auto;
    }

    .intro-wrap-sub {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 768px;
      margin: 20px auto;
    }

    .button-wrap {
      display: flex;
      justify-content: center;
    }

    .intro-wrap-mobile {
      display: none;
    }

    .title {
      font-family: Karmatic Arcade;
      font-style: normal;
      font-weight: 400;
      font-size: 50px;
      line-height: 103px;
    }

    .sub-text-one {
      transform: rotate(354deg);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      max-width: 768px;
      margin: 0px auto;
      font-family: Charybdis;
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      line-height: 30px;
      color: #c4f4bd;
    }

    .sub-text-two {
      transform: rotate(354deg);
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      max-width: 768px;
      margin: 0px auto;
      font-family: '80er Teenie Demo';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 33px;
      color: #edbdf4;
    }

    .context {
      font-family: 'PC Senior';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 40px;
    }

    .button-wrap {
      margin-top: 100px;
      margin-bottom: 100px;
    }

    .absolut-image-1 {
      position: absolute;
      left: 0px;
      top: 660px;
      z-index: -1;
      img {
        width: 75%;
      }
    }

    .absolut-image-2 {
      position: absolute;
      left: -30px;
      top: 215px;
      z-index: -1;
      transform: rotate(57.11deg);
      img {
        width: 135px;
      }
    }

    .absolut-image-3 {
      position: absolute;
      right: -60px;
      top: 140px;
      z-index: -1;
      transform: rotate(-51.78deg);
      img {
        width: 180px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .intro-wrap {
      display: none;
      flex-direction: column;
      align-items: center;
      max-width: 345px;
      margin: 50px auto;
    }

    .intro-wrap-sub {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 345px;
      margin: 20px auto;
    }

    .intro-wrap-mobile {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 50px auto;
      .title {
        font-family: Karmatic Arcade;
        font-style: normal;
        font-weight: 400;
        font-size: 50px;
        line-height: 55px;
        max-width: 375px;
        animation: typing 3s steps(22), blink 0.5s step-end infinite alternate;
        white-space: nowrap;
        overflow: hidden;
        border-right: 0px;
      }
    }

    .button-wrap {
      display: flex;
      justify-content: center;
    }

    .title {
      font-family: Karmatic Arcade;
      font-style: normal;
      font-weight: 400;
      font-size: 50px;
      line-height: 55px;
      max-width: 375px;
    }

    .sub-text-one {
      transform: rotate(354deg);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      max-width: 345px;
      margin: -20px auto;
      margin-top: 20px;
      font-family: Charybdis;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      color: #c4f4bd;
    }

    .sub-text-two {
      transform: rotate(354deg);
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      max-width: 345px;
      margin: -30px auto;
      font-family: '80er Teenie Demo';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 33px;
      color: #edbdf4;
    }

    .context {
      font-family: 'PC Senior';
      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      line-height: 30px;
    }

    .button-wrap {
      margin-top: 50px;
      margin-bottom: 200px;
    }

    .absolut-image-1 {
      position: absolute;
      left: auto;
      right: 20px;
      top: 805px;
      z-index: -1;
      img {
        width: 150px;
      }
    }

    .absolut-image-2 {
      position: absolute;
      left: -70px;
      top: 840px;
      z-index: -1;
      transform: rotate(57.11deg);
      img {
        width: 30%;
      }
    }

    .absolut-image-3 {
      position: absolute;
      right: -207px;
      top: 60px;
      z-index: -1;
      transform: rotate(-51.78deg);
      img {
        width: 30%;
      }
    }
  }
</style>
