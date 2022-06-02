<script lang="ts">
  import { ethers } from 'ethers'
  import { Diamonds } from 'svelte-loading-spinners'
  import {
    isConnect,
    myYear,
    myAddressPercent,
    claimablePopcat,
    myTicketHash,
    myTicketSignature,
    myIsMinted,
    myAddress,
    myNftImages,
    myBalance
  } from '$stores/index'
  import { mint } from '$blockchain/contracts/sale'
  import axios from 'axios'
  import { tokenOfOwnerByIndex, tokenURI } from '$blockchain/contracts/oldpopcatbasterds'

  export let modalState: boolean

  let mintSuccess = false
  let spinnerState = false
  const PUBLICSALE_PRICE: any = ethers.utils.formatEther('10000000000000000')

  async function saleMint() {
    let overrides = {
      value: ethers.utils.parseEther(PUBLICSALE_PRICE)
    }
    try {
      const wlTicket = await axios({
        method: 'get',
        url: `https://api.oldpopcatbasterds.wtf/whitelist/ticket?address=${$myAddress}`
      })
      $myYear = wlTicket.data.year
      $myTicketHash = wlTicket.data.ticket_hash
      $myTicketSignature = wlTicket.data.ticket_signature
    } catch (e) {
      console.log(e)
    }
    try {
      setSpinner()
      await mint($myYear, $myTicketHash, $myTicketSignature, overrides)
      mintSuccess = true
      $myBalance = 1
      setSpinner()
    } catch (e) {
      console.log(e)
      setSpinner()
      alert('mint error')
    }
    await getMyNftImages()
  }

  async function getMyNftImages() {
    const nftList = []
    const imageList = []
    for (let i = 0; i < $myBalance; i++) {
      const tokenId = await tokenOfOwnerByIndex($myAddress, i)
      nftList.push(tokenId)
    }
    for (let i = 0; i < nftList.length; i++) {
      const metadataUri = getTokenURI(await tokenURI(nftList[i]))
      const data = await axios({
        method: 'get',
        url: `${metadataUri}`
      })
      imageList.push({ img: getTokenURI(data.data.image) })
    }

    $myNftImages = imageList
  }

  function getTokenURI(uri: string) {
    const IPFS_GATEWAY = 'https://ipfs.io/ipfs/'
    if (uri.includes('://')) {
      const uriProtocol = uri.split('://')
      if (uriProtocol[0] === 'ipfs') {
        uri = `${IPFS_GATEWAY}${uriProtocol[1]}`
      }
      return uri
    }
  }

  function setSpinner() {
    spinnerState = !spinnerState
  }
</script>

{#if modalState}
  <div class="modal">
    {#if spinnerState}
      <div class="spiner">
        <Diamonds size="60" color="#0000aa" unit="px" duration="1s" />
      </div>
    {/if}
    {#if $isConnect}
      {#if $myYear === 0}
        <div class="window-box">
          <div class="window-bar">
            <div class="window-close">
              <div class="x-box" on:click>x</div>
            </div>
          </div>
          <div class="window-content">
            <div class="content-paragraph">Your wallet is not in the snapshot.</div>
            <div class="content-paragraph">The snapshot period is from ethereum genesis block to May 20.</div>
            <div>
              <button class="normal-button" on:click> close </button>
            </div>
          </div>
        </div>
      {:else if $myIsMinted}
        <div class="window-box">
          <div class="window-bar">
            <div class="window-close">
              <div class="x-box" on:click>x</div>
            </div>
          </div>
          <div class="window-content">
            <div class="content-paragraph">Your address is already minted.</div>
            <div>
              <button class="normal-button" on:click> close </button>
            </div>
          </div>
        </div>
      {:else if mintSuccess}
        <div class="window-box">
          <div class="window-bar">
            <div class="window-close">
              <div class="x-box" on:click>x</div>
            </div>
          </div>
          <div class="window-content">
            <div class="content-paragraph">Mint Success!!</div>
            <div>
              <button class="normal-button" on:click> close </button>
            </div>
          </div>
        </div>
      {:else}
        <div class="window-box">
          <div class="window-bar">
            <div class="window-close">
              <div class="x-box" on:click>x</div>
            </div>
          </div>
          <div class="window-content">
            <div class="image-wrap">
              <img src="/images/eth.png" alt="eth" />
            </div>
            <div class="content-paragraph">
              Your ETHEREUM wallet was born in <span class="red-sentence">{$myYear}</span>.
              <br />
              Your wallet age is top <span class="red-sentence">{$myAddressPercent}</span> from total Ethereum wallets.
              <br />
              You can mint <span class="red-sentence">{$claimablePopcat}</span>.
            </div>
            <div>
              <button class="normal-button" on:click="{saleMint}"> Mint </button>
            </div>
          </div>
        </div>
      {/if}
    {:else}
      <div class="window-box">
        <div class="window-bar">
          <div class="window-close">
            <div class="x-box" on:click>x</div>
          </div>
        </div>
        <div class="window-content">
          <div class="content-paragraph" style="width: 100%;">Please connect wallet</div>
          <div>
            <button class="normal-button" on:click> close </button>
          </div>
        </div>
      </div>
    {/if}
  </div>
{/if}

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
    box-sizing: border-box;
  }

  .spiner {
    z-index: 1000;
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100vh;
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

    .image-wrap {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
      img {
        width: 50%;
      }
    }
  }
</style>
