<script lang="ts">
  import { myNftImages } from '$stores/index'

  function next() {
    let data = [...$myNftImages]
    data.shift()
    data.push($myNftImages[0])
    $myNftImages = data
  }

  function back() {
    let data = [...$myNftImages]
    data.pop()
    data.unshift($myNftImages[$myNftImages.length - 1])
    $myNftImages = data
  }
</script>

<div class="nftlist-wrap">
  <div class="nft-list-wrap">
    {#each $myNftImages as item}
      <div class="list-image">
        <img src="{item.img}" alt="nft" />
      </div>
    {/each}
  </div>
  <div class="nft-list-wrap-mobile">
    <img class="list-image" src="{$myNftImages[0].img}" alt="nft" />
  </div>
  <div class="nftlist-button-wrap">
    <div class="button" on:click="{back}">&lt; <br /> Back</div>
    <div class="button" on:click="{next}">&gt; <br />Next</div>
  </div>
</div>

<style lang="scss">
  .nftlist-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .nftlist-button-wrap {
    display: flex;
    font-family: 'PC Senior';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 40px;
    .button {
      margin: 10px;
      cursor: pointer;
      text-align: center;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  }

  .nft-list-wrap {
    display: flex;
    width: 100%;
    overflow: hidden;
  }

  .list-image {
    width: 33.3%;
    padding: 20px;
    box-sizing: border-box;
    img {
      width: 100%;
    }
  }

  .nft-list-wrap-mobile {
    display: none;
  }

  @media screen and (max-width: 1280px) {
    .nft-list-wrap {
      display: none;
    }

    .nft-list-wrap-mobile {
      display: flex;
      /* flex-direction: column; */
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;

      .list-image {
        padding: 0px;
        width: 70%;
        box-sizing: border-box;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .nft-list-wrap {
      display: none;
    }

    .nft-list-wrap-mobile {
      display: flex;
      /* flex-direction: column; */
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;

      .list-image {
        padding: 0px;
        width: 70%;
        box-sizing: border-box;
      }
    }
  }
</style>
