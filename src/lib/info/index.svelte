<script lang="ts">
  import Saos from 'saos'
  import { infoData } from '$lib/data/index'
</script>

<div class="wrap">
  <div class="title-wrap">
    <Saos animation="{'typing 3.5s steps(40, end)'}">
      <div class="middle-title-color">
        When is <br />
        your Ethereum Wallet <br />
        born in?
      </div>
    </Saos>
  </div>

  <div class="title-wrap-mobile">
    <Saos animation="{'typing 3.5s steps(40, end)'}">
      <div class="middle-title-color-sm">When is <br /> your</div>
      <div class="middle-title-color">Ethereum <br /> Wallet</div>
      <div class="middle-title-color-sm">born in?</div>
    </Saos>
  </div>

  <div class="content-wrap">
    {#each infoData as info}
      <Saos animation="{'scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'}">
        <div class="info-wrap">
          <img src="{info.nftImage}" alt="nft" class="nft-image" />
          <div class="nft-info">
            <div class="tier">{info.tier}</div>
            <div class="year">{info.year}</div>
            <div class="title">{info.title}</div>
            <div class="info">
              {info.infoContent}
            </div>
          </div>
        </div>
      </Saos>
    {/each}
  </div>
</div>

<style lang="scss">
  .title-wrap-mobile {
    display: none;
  }
  .info-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 83%; */
  }

  .nft-image {
    width: 35%;
    margin: 25px;
    box-sizing: border-box;
  }

  .tier {
    font-family: 'Charybdis';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    color: #c4f4bd;
  }

  .title {
    font-family: 'Arcade';
    font-style: normal;
    font-weight: 400;
    font-size: 52px;
    line-height: 52px;
    letter-spacing: -0.01em;
    background: linear-gradient(90deg, #ff0078 0%, #fdf30a 60.29%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .year {
    font-family: 'Karmatic Arcade';
    font-style: normal;
    font-weight: 400;
    font-size: 46px;
    line-height: 53px;
    letter-spacing: -0.01em;
    background: linear-gradient(90deg, #ff0078 0%, #fdf30a 25.29%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .info {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }

  @media screen and (max-width: 1280px) {
    .info-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 93%;
    }

    .nft-image {
      width: 35%;
      margin: 25px;
      box-sizing: border-box;
    }

    .tier {
      font-family: 'Charybdis';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: #c4f4bd;
    }

    .title {
      font-family: 'Arcade';
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 32px;
      letter-spacing: -0.01em;
      background: linear-gradient(90deg, #ff0078 0%, #fdf30a 60.29%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .year {
      font-family: 'Karmatic Arcade';
      font-style: normal;
      font-weight: 400;
      font-size: 26px;
      line-height: 33px;
      letter-spacing: -0.01em;
      background: linear-gradient(90deg, #ff0078 0%, #fdf30a 25.29%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .info {
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 16px;
    }
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
      .middle-title-color-sm {
        font-family: 'Karmatic Arcade';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        letter-spacing: -0.01em;
        background: linear-gradient(90deg, #05f4fb 0%, #f6efa7 104.29%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }
    .info-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 93%;
    }

    .nft-image {
      width: 80%;
      margin: 25px;
      box-sizing: border-box;
    }

    .tier {
      font-family: 'Charybdis';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: #c4f4bd;
    }

    .title {
      font-family: 'Arcade';
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 32px;
      letter-spacing: -0.01em;
      background: linear-gradient(90deg, #ff0078 0%, #fdf30a 60.29%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .year {
      font-family: 'Karmatic Arcade';
      font-style: normal;
      font-weight: 400;
      font-size: 26px;
      line-height: 33px;
      letter-spacing: -0.01em;
      background: linear-gradient(90deg, #ff0078 0%, #fdf30a 25.29%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .info {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 24px;
    }
  }
</style>
