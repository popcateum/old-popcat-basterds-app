<script lang="ts">
  import Saos from 'saos'
  import { fly } from 'svelte/transition'
  let isAscii = true
  let flyProperty: any = { x: -3000, opacity: 1, duration: 1 }
  let num: any = 1
</script>

<div class="wrap">
  <div class="title-wrap">
    <Saos animation="{'typing 1.5s steps(40, end)'}">
      <div class="middle-title-color">ROADMAP</div>
    </Saos>
  </div>

  <div class="title-wrap-mobile">
    <Saos animation="{'typing 1.5s steps(40, end)'}">
      <div class="middle-title-color">ROADMAP</div>
    </Saos>
  </div>

  <div class="content-wrap">
    <div class="roadmap-sentence">
      There are few more specific roadmap for Old Popcat Basterds. Here’s the roadmaps.
    </div>
    <div class="roadmap-divide">\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\</div>
    <div class="roadmap-divide-tablet">\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\</div>
    <div class="roadmap-divide-mobile">\\\\\\\\\\\\\\\\\\\\\\\\\\\\\</div>
    <div class="roadmap-sentence">
      1. Images of OPB NFT will be changed as time goes by. Popcats will be getting older.
    </div>
    <div class="roadmap-divide">\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\</div>
    <div class="roadmap-divide-tablet">\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\</div>
    <div class="roadmap-divide-mobile">\\\\\\\\\\\\\\\\\\\\\\\\\\\\\</div>
    <div class="roadmap-sentence">
      2. Now OPB NFT only includes the “Year” of the wallet creation date. We will update its wallet creation “Month”
      and “Date” in the future. It means the OPB NFT will have more interesting rarity by its creation history.
    </div>
    <div class="roadmap-divide">\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\</div>
    <div class="roadmap-divide-tablet">\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\</div>
    <div class="roadmap-divide-mobile">\\\\\\\\\\\\\\\\\\\\\\\\\\\\\</div>
    <div class="roadmap-sentence">
      3. If you are not satisfied with the old popcat images, we will make users be able to change and customize their
      popcat images. You might have to pay Pop coins to do this.
    </div>
    <div class="roadmap-divide">\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\</div>
    <div class="roadmap-divide-tablet">\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\</div>
    <div class="roadmap-divide-mobile">\\\\\\\\\\\\\\\\\\\\\\\\\\\\\</div>
    <div class="roadmap-sentence">
      4. Old Popcat image will be able to contain “ENS” domain name on its image if you want. It means Old popcat image
      will be used as a cover image for ENS.
    </div>
    <div class="roadmap-divide">\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\</div>
    <div class="roadmap-divide-tablet">\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\</div>
    <div class="roadmap-divide-mobile">\\\\\\\\\\\\\\\\\\\\\\\\\\\\\</div>
    <div class="roadmap-dot">
      And more . . . .
      <br />
      . . . . .
      <br />
      . . . .
      <br />
      . . .
      <br />
      . .
    </div>
    <div class="button-wrap">
      <button
        class="normal-button"
        on:click="{() => {
          num = 20000
          isAscii = !isAscii
        }}"
      >
        click here
      </button>
    </div>
    <div style="height: 200px; width: 100%;">
      {#if isAscii}
        <pre class="ascii" transition:fly="{{ x: -3000, opacity: 1, duration: num }}">
           /$$$$$$  /$$       /$$       /$$$$$$$                                           /$$           /$$$$$$$                        /$$                               /$$          
          /$$__  $$| $$      | $$      | $$__  $$                                         | $$          | $$__  $$                      | $$                              | $$          
         | $$  \ $$| $$  /$$$$$$$      | $$  \ $$ /$$$$$$   /$$$$$$   /$$$$$$$  /$$$$$$  /$$$$$$        | $$  \ $$  /$$$$$$   /$$$$$$$ /$$$$$$    /$$$$$$   /$$$$$$   /$$$$$$$  /$$$$$$$
         | $$  | $$| $$ /$$__  $$      | $$$$$$$//$$__  $$ /$$__  $$ /$$_____/ |____  $$|_  $$_/        | $$$$$$$  |____  $$ /$$_____/|_  $$_/   /$$__  $$ /$$__  $$ /$$__  $$ /$$_____/
         | $$  | $$| $$| $$  | $$      | $$____/| $$  \ $$| $$  \ $$| $$        /$$$$$$$  | $$          | $$__  $$  /$$$$$$$|  $$$$$$   | $$    | $$$$$$$$| $$  \__/| $$  | $$|  $$$$$$ 
         | $$  | $$| $$| $$  | $$      | $$     | $$  | $$| $$  | $$| $$       /$$__  $$  | $$ /$$      | $$  \ $$ /$$__  $$ \____  $$  | $$ /$$| $$_____/| $$      | $$  | $$ \____  $$
         |  $$$$$$/| $$|  $$$$$$$      | $$     |  $$$$$$/| $$$$$$$/|  $$$$$$$|  $$$$$$$  |  $$$$/      | $$$$$$$/|  $$$$$$$ /$$$$$$$/  |  $$$$/|  $$$$$$$| $$      |  $$$$$$$ /$$$$$$$/
          \______/ |__/ \_______/      |__/      \______/ | $$____/  \_______/ \_______/   \___/        |_______/  \_______/|_______/    \___/   \_______/|__/       \_______/|_______/ 
                                                          | $$                                                                                                                          
                                                          | $$                                                                                                                          
                                                          |__/    
      </pre>
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
  .wrap {
    margin-bottom: 0px;
  }
  .content-wrap {
    font-family: PC Senior;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .roadmap-divide {
    padding: 50px 0px;
  }

  .roadmap-divide-tablet {
    display: none;
  }

  .roadmap-divide-mobile {
    display: none;
  }

  .button-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 10px;
  }
  .ascii {
    font-family: 'PC Senior';
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
    transform: translate(-24%, -10%) scale(0.58);
    height: 200px;
  }

  @media screen and (max-width: 1280px) {
    .wrap {
      margin-bottom: 0px;
    }
    .content-wrap {
      font-family: PC Senior;
      font-size: 14px;
      line-height: 30px;
      font-style: normal;
      font-weight: 400;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .roadmap-divide {
      display: none;
    }
    .roadmap-divide-tablet {
      padding: 30px 0px;
      display: block;
    }

    .roadmap-divide-mobile {
      display: none;
    }

    .button-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-bottom: 10px;
    }
    .ascii {
      font-family: 'PC Senior';
      font-weight: 400;
      font-size: 10px;
      line-height: 16px;
      transform: translate(-30%, -10%) scale(0.4);
    }
  }

  @media screen and (max-width: 768px) {
    .wrap {
      margin-bottom: 0px;
    }
    .content-wrap {
      font-family: PC Senior;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .roadmap-divide {
      display: none;
    }

    .roadmap-divide-tablet {
      display: none;
    }

    .roadmap-divide-mobile {
      display: block;
      padding: 20px 0px;
    }

    .button-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-bottom: 10px;
    }
    .ascii {
      font-family: 'PC Senior';
      font-weight: 400;
      font-size: 10px;
      line-height: 16px;
      transform: translate(-16.5%, -10%) scale(0.7);
    }
  }
</style>
