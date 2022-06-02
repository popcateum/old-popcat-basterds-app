<script lang="ts">
  import Saos from 'saos'
  import { getMintState } from '$blockchain/contracts/sale'
  import { totalSupply } from '$blockchain/contracts/oldpopcatbasterds'
  import { infoData } from '$lib/data/index'
  import Mint from '$lib/mint/index.svelte'

  let modalState: boolean = false
  let mintModalState: boolean = false

  let saleMintState: any = infoData
  let total: any

  async function getStatus() {
    const data = await getMintState()
    total = await totalSupply()
    for (let i = 0; i < 8; i++) {
      saleMintState[i].current = parseInt(data[i])
    }
  }
  getStatus()
</script>

<Mint modalState="{mintModalState}" on:click="{() => (mintModalState = !mintModalState)}" />

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

<div id="status" style="height: 60px;"></div>

<div class="wrap">
  <div class="title-wrap">
    <Saos animation="{'typing 1.5s steps(40, end)'}">
      <div class="middle-title-color">Status</div>
    </Saos>
  </div>

  <div class="title-wrap-mobile">
    <Saos animation="{'typing 1.5s steps(40, end)'}">
      <div class="middle-title-color">Status</div>
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
          <div class="content-paragraph">Minting Status. . .</div>
          <div class="content-paragraph">
            {#each saleMintState as item}
              <div class="progress-bar-wrap">
                <div class="progress-title-wrap">
                  <div class="progress-text">{item.year}</div>
                  <div class="progress-text">{item.title}</div>
                </div>
                <div class="progress-bar-content-wrap">
                  <div class="progress-bar-content">
                    {#if item.current === item.total}
                      <div class="progress-bar-content-bar" style="width: 100%; background-color: black;"></div>
                    {:else}
                      <div class="progress-bar-content-bar" style="width: {(item.current / item.total) * 100}%;"></div>
                    {/if}
                  </div>
                  <div class="progress-bar-number-wrap">
                    <div class="progress-bar-number">{item.current} Minted</div>
                    <div class="progress-bar-number">Max {item.total}</div>
                  </div>
                </div>
                <div class="progress-bar-percent-wrap">
                  <div class="progress-percent">({Math.floor((item.current / item.total) * 100)}%)</div>
                </div>
              </div>
            {/each}
            <div class="progress-bar-wrap">
              <div class="progress-title-wrap">
                <div class="progress-text">Total Old Popcats</div>
              </div>
              <div class="progress-bar-content-wrap">
                <div class="progress-bar-content">
                  <div
                    class="progress-bar-content-bar"
                    style="width: {(total / 10000) * 100}%; background-color: #FDF30A;"
                  ></div>
                </div>
                <div class="progress-bar-number-wrap">
                  <div class="progress-bar-number">{total} Minted</div>
                  <div class="progress-bar-number">Max 10000</div>
                </div>
              </div>
              <div class="progress-bar-percent-wrap">
                <div class="progress-percent">({Math.floor((total / 10000) * 100)}%)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Saos>

  <div class="button-wrap">
    <button class="normal-button" on:click="{() => (mintModalState = !mintModalState)}">Free Mint</button>
    <button class="normal-button" on:click="{() => window.open('https://opensea.io/collection/oldpopcatbasterds')}">Opensea</button>
  </div>
</div>

<style lang="scss">
  .window-box {
    background: $secondary-color;
    box-shadow: 15px 15px #000;
    font-family: PC Senior;
    width: 100%;
  }

  .progress-bar-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    line-height: 12px;
    margin-bottom: 30px;
    .progress-title-wrap {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      width: 25%;
    }
    .progress-bar-content-wrap {
      display: flex;
      flex-direction: column;
      width: 70%;
      margin-left: 5px;
      box-sizing: border-box;
      .progress-bar-content {
        width: 100%;
        height: 20px;
        margin-bottom: 4px;
        border: 1px solid #9d9d9d;
        box-sizing: border-box;
        .progress-bar-content-bar {
          width: 0%;
          height: 100%;
          background-color: $primary-color;
        }
      }
      .progress-bar-number-wrap {
        display: flex;
        justify-content: space-between;
        font-size: 10px;
      }
    }
    .progress-bar-percent-wrap {
      width: 7%;
      font-size: 10px;
      .progress-percent {
        padding: 4px;
      }
    }
  }

  .button-wrap {
    padding: 30px;
    display: flex;
    justify-content: center;
  }

  .normal-button {
    margin: 10px;
  }
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
    .window-box {
      width: auto;
    }
  }
  .title-wrap-mobile {
    display: none;
  }

  @media screen and (max-width: 1280px) {
    .progress-bar-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 11px;
      line-height: 11px;
      margin-bottom: 30px;
      flex-direction: column;
      .progress-title-wrap {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        margin-bottom: 6px;
        .progress-text {
          padding-right: 10px;
        }
      }
      .progress-bar-content-wrap {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-left: 5px;
        box-sizing: border-box;
        .progress-bar-content {
          width: 100%;
          height: 20px;
          margin-bottom: 4px;
          border: 1px solid #9d9d9d;
          box-sizing: border-box;
          .progress-bar-content-bar {
            width: 0%;
            height: 100%;
            background-color: $primary-color;
          }
        }
        .progress-bar-number-wrap {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
        }
      }
      .progress-bar-percent-wrap {
        display: none;
        width: 7%;
        font-size: 10px;
        .progress-percent {
          padding: 4px;
        }
      }
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
    }
    .progress-bar-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 11px;
      line-height: 11px;
      margin-bottom: 30px;
      flex-direction: column;
      .progress-title-wrap {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        margin-bottom: 6px;
        .progress-text {
          padding-right: 10px;
        }
      }
      .progress-bar-content-wrap {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-left: 5px;
        box-sizing: border-box;
        .progress-bar-content {
          width: 100%;
          height: 20px;
          margin-bottom: 4px;
          border: 1px solid #9d9d9d;
          box-sizing: border-box;
          .progress-bar-content-bar {
            width: 0%;
            height: 100%;
            background-color: $primary-color;
          }
        }
        .progress-bar-number-wrap {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
        }
      }
      .progress-bar-percent-wrap {
        display: none;
        width: 7%;
        font-size: 10px;
        .progress-percent {
          padding: 4px;
        }
      }
    }
  }
</style>
