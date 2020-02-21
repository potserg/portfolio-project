<template lang="pug">
  button.add-btn
    .add-btn.add-btn__img
      span.add-btn__line.add-btn__line--hor
      span.add-btn__line.add-btn__line--vert
    span.add-btn__text Добавить группу
</template>

<style lang="postcss" scoped>

  .add-btn {
    display: flex;
    align-items: center;
  }

  .add-btn.add-btn__img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: $btn-color;
    position: relative;
    margin-right: 20px;
  }

  .add-btn__line {
    position: absolute;
    top: 9px;
    left: 5px;
    width: 10px;
    height: 2px;
    background-color: $text-color;
    z-index: 1;

    &--vert {
      transform: rotate(90deg);
    }
  }

  .add-btn__text {
    font-size: 16px;
    font-weight: 600;
    color: $btn-color;
  }
</style>