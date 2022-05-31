<script lang="ts">
  import { myAddress, myYear } from '$stores/index'
  import WalletCheck from '$lib/intro/walleCheck.svelte'

  let modalState = false
  function checkWallet() {
    if ($myYear > 0) {
      location.href = `/wallet/${$myAddress}?year=${$myYear}`
    } else {
      modalState = !modalState
    }
  }
  const imgList = [
    {
      year: 2015
    },
    {
      year: 2016
    },
    {
      year: 2017
    },
    {
      year: 2018
    },
    {
      year: 2019
    },
    {
      year: 2020
    },
    {
      year: 2021
    },
    {
      year: 2022
    }
  ]
</script>

<WalletCheck modalState="{modalState}" on:click="{() => (modalState = !modalState)}" />

<div class="window-box">
  <div class="window-bar">
    <div class="window-close">
      <div class="x-box" on:click>x</div>
    </div>
  </div>
  <div class="window-content">
    <div class="content-paragraph">
      <div class="sub-title">Check your wallet</div>
    </div>
    <div class="content-paragraph">
      <div class="image-wrap">
        <div class="space"></div>
        <div class="sub-image-wrap">
          {#each imgList as item}
            <div class="sub-image">
              <img src="/images/{item.year}.png" alt="img" />
            </div>
          {/each}
        </div>
        <div class="space"></div>
      </div>
    </div>
    <div class="content-paragraph">
      Do you want to check your Old Popcat Basterd? <br /> Connect to your Ethereum wallet and check <br /> when your Ethereum
      wallet was born in.
    </div>
    <div>
      <button class="normal-button" on:click="{checkWallet}"> Check my wallet </button>
    </div>
  </div>
</div>
<div class="space"></div>

<style lang="scss">
  .sub-title {
    font-size: 20px;
  }
  .window-box {
    width: 100%;
  }
  .image-wrap {
    display: flex;
    padding: 20px;
    .space {
      width: 10%;
    }
    .sub-image-wrap {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      .sub-image {
        display: flex;
        width: 20%;
        height: auto;
        padding: 10px;
        img {
          width: 100%;
        }
      }
    }
  }
  .space {
    height: 100px;
  }
  .window-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    .sub-title {
      font-size: 16px;
    }
    .image-wrap {
      display: flex;
      padding: 0px;
      .sub-image-wrap {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        .sub-image {
          display: flex;
          width: 20%;
          height: auto;
          padding: 5px;
          img {
            width: 100%;
          }
        }
      }
    }
    .window-box {
      width: 96%;
    }
  }
</style>
