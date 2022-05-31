<script lang="ts">
  import Fa from 'svelte-fa'
  import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
  import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord'
  import { faMedium } from '@fortawesome/free-brands-svg-icons/faMedium'
  import { faTelegram } from '@fortawesome/free-brands-svg-icons/faTelegram'
  import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
</script>

<div class="footer-wrap">
  <div class="footer">
    <div class="footer-item">
      <div class="footer-logo">
        <img src="/images/footer-logo.png" alt="footer-logo" />
        <div class="sub-text-two">Powered by Popcateum</div>
      </div>
      <div class="footer-content">
        History on blockchain says a lot of things. <br /> Your wallet history tells a lot about yourself.<br /> With
        your wallet, you can prove out yourself. <br />That’s the spirit of Web3.0. <br />Old Popcat Basterds want to
        make people know this.
      </div>
    </div>
    <div class="footer-item">
      <div class="footer-sns">
        <ul class="sns-wrap">
          <li class="sns-icon">
            <a href="https://twitter.com/Oldpopcat" target="_blank"><Fa icon="{faTwitter}" /></a>
          </li>
          <li class="sns-icon">
            <a href="https://discord.gg/M9TFTzhxJt" target="_blank"><Fa icon="{faDiscord}" /></a>
          </li>
          <li class="sns-icon">
            <a href="https://t.me/popcateumofficial" target="_blank"><Fa icon="{faTelegram}" /></a>
          </li>
          <li class="sns-icon">
            <a href="https://github.com/popcateum" target="_blank"><Fa icon="{faGithub}" /></a>
          </li>
          <li class="sns-icon">
            <a href="https://medium.com/@Oldpopcatbastards" target="_blank"><Fa icon="{faMedium}" /></a>
          </li>
        </ul>
        <div class="footer-content">
          Popcateum Everywhere.
          <br />
          We love cats.
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .footer-wrap {
    background-color: black;
  }

  .footer {
    display: flex;
    justify-content: space-around;
    padding: 20px;
    box-sizing: border-box;
  }

  .footer-item {
    display: flex;
    padding: 20px;
    justify-content: center;
  }

  .footer-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;
  }

  .footer-content {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 30px;
  }

  .sns-wrap {
    display: flex;
  }

  .footer-sns {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .sns-icon {
    font-size: 30px;
    padding: 6px;
    a {
      color: white;
    }
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
    font-size: 28px;
    line-height: 33px;
    color: #edbdf4;
  }

  @media screen and (max-width: 1280px) {
    .footer-wrap {
      background-color: black;
    }

    .footer {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 20px;
      box-sizing: border-box;
    }

    .footer-item {
      display: flex;
      padding: 20px;
      justify-content: center;
    }

    .footer-logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 40px;
      img {
        width: 50%;
      }
    }

    .footer-content {
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 20px;
    }

    .sns-wrap {
      display: flex;
    }

    .footer-sns {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .sns-icon {
      font-size: 30px;
      padding: 6px;
      a {
        color: white;
      }
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
      font-size: 18px;
      line-height: 33px;
      color: #edbdf4;
    }
  }

  @media screen and (max-width: 768px) {
    .footer-wrap {
      background-color: black;
    }

    .footer {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 20px;
      box-sizing: border-box;
    }

    .footer-item {
      display: flex;
      flex-direction: column;
      padding: 20px;
      justify-content: center;
      align-items: center;
    }

    .footer-logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 0px;
      img {
        width: 50%;
      }
    }

    .footer-content {
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 20px;
    }

    .sns-wrap {
      display: flex;
    }

    .footer-sns {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .sns-icon {
      font-size: 30px;
      padding: 6px;
      a {
        color: white;
      }
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
      font-size: 16px;
      line-height: 33px;
      color: #edbdf4;
    }
  }
</style>
