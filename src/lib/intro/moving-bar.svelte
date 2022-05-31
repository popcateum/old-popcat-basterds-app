<script lang="ts">
  import Marquee from 'svelte-marquee'
</script>

<div class="text-moving-bar">
  <Marquee content="OLD POPCAT BASTERDS &nbsp; &nbsp; &nbsp;" />
</div>

<style lang="scss">
  .text-moving-bar {
    background-color: #edbdf4;
    color: #c4f4bd;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    margin: 0px;
    padding: 0px;
    border: 0px;
    font-family: 'Arcade';
    font-style: normal;
    font-size: 60px;
    padding-top: 14px;
  }

  @media screen and (max-width: 1280px) {
    .text-moving-bar {
      background-color: #edbdf4;
      color: #c4f4bd;
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      margin: 0px;
      padding: 0px;
      border: 0px;
      font-family: 'Arcade';
      font-style: normal;
      font-size: 40px;
      padding-top: 10px;
    }
  }

  @media screen and (max-width: 768px) {
    .text-moving-bar {
      background-color: #edbdf4;
      color: #c4f4bd;
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      margin: 0px;
      padding: 0px;
      border: 0px;
      font-family: 'Arcade';
      font-style: normal;
      font-size: 30px;
      padding-top: 8px;
    }
  }
</style>
