<template lang="pug">
  .input__error-tooltip-container {{errorText}}
</template>

<script>
export default {
  props: {
    errorText: {
      type: String,
      default: "Ошибка"
    }
  }
};
</script>


<style lang="postcss" scoped>
.input__error-tooltip-container {
  z-index: 100;
  background: $error-color;
  color: $text-color;
  padding: 12px 20px;
  font-size: 14px;
  white-space: nowrap;
  &:before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top: 0;
    border-bottom-color: $error-color;
    border-bottom-width: 7px;
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>