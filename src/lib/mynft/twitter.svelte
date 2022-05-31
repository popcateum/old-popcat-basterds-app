<div class="box-wrap">
  <div class="gray-box">
    <div class="inner-box">
      <div class="left-side">
        <img src="images/twitter.png" alt="twitter" />
        <button
          class="normal-button"
          on:click="{() => window.open('https://gleam.io/fdfCt/old-popcat-bastards-brag-your-old-popcats?amp')}"
        >
          Brag on Twitter
        </button>
      </div>
      <div class="right-side">
        "If you think your Popcat is old enough, we know you want to brag your Old Popcat Bastard to give some lessons
        to N00b popcats. Brag your Old Popcat and get POP coin."
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .box-wrap {
    padding: 20px;
    box-sizing: border-box;
  }
  .gray-box {
    background: $secondary-color;
    border: 2px solid #b7b9af;
    box-sizing: border-box;
    padding: 10px;
  }

  .inner-box {
    padding: 15px;
    border: 2px solid #9d9d9d;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    .left-side {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .normal-button {
        margin-top: 10px;
        width: 97%;
      }
    }
    .right-side {
      padding: 15px;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 50px;
      color: black;
    }
  }

  @media screen and (max-width: 1280px) {
    .box-wrap {
      padding: 20px;
      box-sizing: border-box;
    }
    .gray-box {
      background: $secondary-color;
      border: 2px solid #b7b9af;
      box-sizing: border-box;
      padding: 10px;
    }

    .inner-box {
      padding: 15px;
      border: 2px solid #9d9d9d;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .left-side {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .normal-button {
          margin-top: 10px;
          width: 97%;
        }
      }
      .right-side {
        padding: 15px;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 40px;
        color: black;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .box-wrap {
      padding: 20px;
      box-sizing: border-box;
      max-width: 345px;
    }
    .gray-box {
      background: $secondary-color;
      border: 2px solid #b7b9af;
      box-sizing: border-box;
      padding: 10px;
    }

    .inner-box {
      padding: 15px;
      border: 2px solid #9d9d9d;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .left-side {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img {
          width: 100%;
        }
        .normal-button {
          margin-top: 10px;
          width: 97%;
        }
      }
      .right-side {
        padding: 15px;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        color: black;
      }
    }
  }
</style>
