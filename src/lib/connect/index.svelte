<script lang="ts">
  import axios from 'axios'
  import {
    isConnect,
    myAddress,
    myAddressShort,
    myYear,
    myAddressPercent,
    claimablePopcat,
    myBalance,
    myNftImages,
    myIsMinted,
  } from '$stores/index'
  import {
    web3ModalConnect,
    getInstance,
    getProvider,
    getSigner,
    accountsChanged,
    chainChanged,
    getAddress,
    getShortAddress,
    disconnect
  } from '$blockchain/chain/chain'
  import { balanceOf, tokenOfOwnerByIndex, tokenURI } from '$blockchain/contracts/oldpopcatbasterds'
  import { isMinted } from '$blockchain/contracts/sale'
  import Fa from 'svelte-fa'
  import { faAngleDown } from '@fortawesome/free-solid-svg-icons/faAngleDown'
  import { faAngleUp } from '@fortawesome/free-solid-svg-icons/faAngleUp'
  import { onMount } from 'svelte'

  let isOpen = false

  onMount(async () => {
    const walletState = localStorage.getItem('WEB3_CONNECT_CACHED_PROVIDER')
    console.log(walletState)
    if (walletState === `"injected"`) {
      await connect()
    }
  })

  async function connect() {
    await web3ModalConnect()
    await getInstance()
    await getProvider()
    await getSigner()
    $myAddress = await getAddress()
    $myAddressShort = await getShortAddress()
    $isConnect = true
    $myIsMinted = await isMinted($myAddress)
    await setAddressData()
    setMyAddressPercent()

    $myBalance = await balanceOf($myAddress)
    if ($myBalance > 0) {
      await getMyNftImages()
    }
    accountsChanged()
    chainChanged()
  }

  async function setAddressData() {
    try {
      const wlInfo = await axios({
        method: 'get',
        url: `https://api.oldpopcatbasterds.com/whitelist/info?address=${$myAddress}`
      })
      // $myYear = 2022
      // $myAddressPercent = '92.99%'
      $myYear = wlInfo.data.year
      $myAddressPercent = wlInfo.data.date_info.top_percent
    } catch (e) {
      console.log(e)
    }
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

  function setMyAddressPercent() {
    if ($myYear === 2015) {
      $claimablePopcat = 'Legendary Popcat'
    } else if ($myYear === 2016) {
      $claimablePopcat = 'GOAT Popcat'
    } else if ($myYear === 2017) {
      $claimablePopcat = 'Grand Master Popcat'
    } else if ($myYear === 2018) {
      $claimablePopcat = 'Master Popcat'
    } else if ($myYear === 2019) {
      $claimablePopcat = 'Padawan Popcat'
    } else if ($myYear === 2020) {
      $claimablePopcat = 'Youngling Popcat'
    } else if ($myYear === 2021) {
      $claimablePopcat = 'Kitten Popcat'
    } else if ($myYear === 2022) {
      $claimablePopcat = 'N00b Popcat'
    } else {
      $claimablePopcat = 'None'
    }
  }
</script>

{#if $isConnect}
  {#if isOpen}
    <div class="non-button-wrap-ab">
      <div class="wallet-button">
        <div class="address-wrap" on:click="{() => (isOpen = !isOpen)}">
          <div class="address">{$myAddressShort}</div>
          <div class="icon">
            <Fa icon="{faAngleUp}" size="{'1x'}" />
          </div>
        </div>
        <hr />
        <div class="content">
          You wallet was born in <span class="red-sentence">{$myYear}</span>. <br />
          Top <span class="red-sentence">{$myAddressPercent}</span> from total wallets.<br />
          Now you have <span class="red-sentence">{$myBalance}</span> OPB NFT.
        </div>
        <hr />
        <div class="sign-out" on:click="{disconnect}">Sign-out</div>
      </div>
    </div>
  {:else}
    <div class="non-button-wrap">
      <div class="wallet-button" on:click="{() => (isOpen = !isOpen)}">
        <div class="address-wrap">
          <div class="address">{$myAddressShort}</div>
          <div class="icon">
            <Fa icon="{faAngleDown}" size="{'1x'}" />
          </div>
        </div>
      </div>
    </div>
  {/if}
{:else}
  <button class="wallet-button" on:click="{connect}"> connect </button>
{/if}

<style lang="scss">
  .wallet-button {
    font-size: 16px;
  }
  .non-button-wrap {
    display: flex;
    flex-direction: column;

    .wallet-button {
      display: flex;
      flex-direction: column;
      padding: 15px 15px;
      cursor: pointer;
      .address-wrap {
        display: flex;
        justify-content: space-between;
      }
    }
  }

  .non-button-wrap-ab {
    /* position: absolute; */
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 260px;

    .wallet-button {
      position: absolute;
      display: flex;
      flex-direction: column;
      padding: 15px 15px;
      box-sizing: border-box;
      top: 20px;
      right: 80px;
      width: 260px;
      .address-wrap {
        display: flex;
        justify-content: space-between;
        cursor: pointer;
      }
      hr {
        width: 100%;
        border: 0.2px solid #aaaaaa;
      }
      .content {
        font-size: 10px;
        line-height: 14px;
      }
      .sign-out {
        display: flex;
        justify-content: flex-end;
        cursor: pointer;
      }
    }
  }

  .icon {
    margin-left: 10px;
  }

  @media screen and (max-width: 1280px) {
    .non-button-wrap-ab {
      width: 182px;
      .wallet-button {
        position: absolute;
        display: flex;
        flex-direction: column;
        padding: 15px 15px;
        box-sizing: border-box;
        top: 20px;
        right: 80px;
        width: 182px;
      }
    }
    .address {
      font-size: 10px;
      line-height: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    .non-button-wrap-ab {
      width: auto;
      .wallet-button {
        width: 100%;
        position: static;
        display: flex;
        flex-direction: column;
        padding: 15px 15px;
        box-sizing: border-box;
      }
    }
    .address {
      font-size: 16px;
      line-height: 20px;
    }
  }
</style>
