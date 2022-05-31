<script lang="ts">
  import Fa from 'svelte-fa'
  import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
  import Menu from './menu.svelte'
  import Connect from '$lib/connect/index.svelte'

  let toggleBtnActive = false
</script>

<Menu showModal="{toggleBtnActive}" on:click="{() => (toggleBtnActive = !toggleBtnActive)}" />

<div class="header">
  <div class="header-logo">
    <a href="/" class="header-logo-link">
      <img src="/images/oldpopcat.gif" alt="logo" class="header-logo-img" />
      <div class="header-logo-title">OLD POPCAT BASTERDS</div>
    </a>
  </div>
  <div class="header-menu">
    <div class="header-menu-item">
      <a href="#my-nft" class="header-menu-item-link" style="color: black;">
        <div class="header-menu-item-text" style="color: black;">MyNFT</div>
      </a>
    </div>
    <div class="header-menu-item">
      <a href="#status" class="header-menu-item-link" style="color: black;">
        <div class="header-menu-item-text" style="color: black;">Status</div>
      </a>
    </div>
    <div class="header-menu-item">
      <a href="https://opensea.io/" class="header-menu-item-link" target="_blank">
        <div class="header-menu-item-text">Opensea</div>
      </a>
    </div>
  </div>
  <div class="button-wrap">
    <Connect />
  </div>
  <div class="toggle-button" on:click="{() => (toggleBtnActive = !toggleBtnActive)}">
    <Fa icon="{faBars}" size="2x" color="#0000AA" />
  </div>
</div>

<style lang="scss">
  .header-logo-img {
    width: 70px;
    height: 70px;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 80px;
    height: 86px;
    background-color: $normal-button-color;
  }

  .header-logo-link {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }

  .header-logo-title {
    font-size: 24px;
    font-family: Karmatic Arcade;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 28px;
    color: $title-color;
  }

  .header-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Kongtext;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 22px;
  }

  .header-menu-item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 50px;
    font-size: 20px;
    font-weight: bold;
  }

  .header-menu-item-link {
    text-decoration: none;
  }

  .header-menu-item-text {
    color: $primary-color;
    cursor: pointer;
  }

  .toggle-button {
    display: none;
  }

  @media screen and (max-width: 1280px) {
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 80px;
      height: 86px;
      background-color: $normal-button-color;
    }

    .header-logo-link {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
    }

    .header-logo-title {
      font-family: Karmatic Arcade;
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 24px;
      color: $title-color;
    }

    .header-menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: Kongtext;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 22px;
    }

    .header-menu-item {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 50px;
      font-size: 16px;
    }

    .header-menu-item-link {
      text-decoration: none;
    }

    .header-menu-item-text {
      color: $primary-color;
    }

    .toggle-button {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      height: 75px;
      background-color: $normal-button-color;
    }

    .header-logo-link {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
    }

    .header-logo-title {
      font-family: Karmatic Arcade;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
      width: 200px;
      color: $title-color;
    }

    .header-menu {
      display: none;
      justify-content: space-between;
      align-items: center;
      font-family: Kongtext;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 22px;
    }

    .header-menu-item {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 50px;
      font-size: 20px;
      font-weight: bold;
    }

    .header-menu-item-link {
      text-decoration: none;
    }

    .header-menu-item-text {
      color: $primary-color;
    }

    .button-wrap {
      display: none;
    }

    .toggle-button {
      display: flex;
      justify-content: center;
      width: 40px;
      cursor: pointer;
    }
  }
</style>
