<template>
  <header>
    <h2>
      <slot name="headItem"></slot>
    </h2>
    <p>
      <slot name="details"></slot>
    </p>
  </header>
</template>
<style lang="scss" scoped>
 header{
  padding-bottom: 0;
  padding-top: 10px;
  h2{
    color: var(--btn-color);
    font-size: 28px;
    font-weight: 700;
    margin-left: 10px;
  }
  p{
    font-size: 14px;

    color: var(--step-color);
    font-weight: 400;
    margin-left: 10px;
  }
 }
 @media (min-width: 1024px) {
  header{
    padding-bottom: 20px;
    padding-top: 0;
    h2{
      font-size: 35px;
      margin-left: 0px;
    }
    p{
      font-size: var(--font-size);
      width: auto;
      margin-left: 0px;
    }
  }
 }
</style>