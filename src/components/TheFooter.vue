<template>
  <footer>
    <span class="contributor-name">All right reserved by Osmand ‧ 2022 -</span>
  </footer>
</template>

<style lang="scss" scoped>
$project-font-TC: 'Noto Sans TC', sans-serif;
$gray-blue: #2e3c50;

footer {
  width: 100%;
  height: 6vh;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba($color: white, $alpha: 1);
  box-shadow: 0 2px 10px $gray-blue;
  z-index: 999;

  span {
    font-family: $project-font-TC;
    font-size: 12px;
    text-shadow: 1.5px 2px 2px gray;
  }
}

@media screen and (min-width: 768px) {
  footer {
    span {
      font-size: 14px;
    }
  }
}

@media screen and (min-width: 1024px) {
  footer {
    flex-direction: row;

    span {
      font-size: 16px;
    }
  }
}
</style>
