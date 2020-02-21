<template lang="pug">
  tr(v-if="editmode === false")
    td.skill__title {{skill.title}}
    td.skill__percent {{skill.percent}} %
    td.skill__btns 
      button(type="button" @click="editmode = true").skill__btn.skill__btn--change
      button(type="button" @click="removeExistedSkill").skill__btn.skill__btn--remove

  tr(v-else)
    td.skill__title 
      input.skill__title_input(type="text" placeholder="Новый навык" v-model="editedSkill.title")
    td.skill__percent 
      input.skill__percent_input(type="text" placeholder="%" v-model="editedSkill.percent")
    td.skill__btns_input
      button(type="button" @click="editExistedSkill").skill__btn.skill__btn--confirm
      button(type="button" @click="editmode = false").skill__btn.skill__btn--cancel

</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      editmode: false,
      editedSkill: { ...this.skill }
    };
  },
  props: {
    skill: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  methods: {
    ...mapActions("skills", ["removeSkill", "editSkill"]),
    async removeExistedSkill() {
      try {
        await this.removeSkill(this.skill);
      } catch (error) {}
    },
    async editExistedSkill() {
      try {
        await this.editSkill(this.editedSkill);
        this.editmode = false;
      } catch (error) {
      }
    }
  }
};
</script>

<style lang="postcss">
  .skill__title {
    width: 70%;
    padding-right: 15px;
    position: relative;
    &_input {
      width: 100%;
    }
  }

  .skill__percent {
    width: 15%;
    padding-right: 15px;
    position: relative;
    &_input {
      width: 100%;
    }
  }

  .skill__btns {
    width: 10%;
    text-align: right;
    position: relative;
    &_input {
      width: 100%;
      text-align: right;
    }
  }

  .skill__btn {
    width: 15px;
    height: 15px;

    &--remove {
      background-image: svg-load("../../images/icons/trash.svg", fill=rgba($font-color, 0.5));
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    &--change {
      background-image: svg-load("../../images/icons/pencil.svg", fill=rgba($font-color, 0.5));
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      margin-right: 15px;
    }
    &--confirm {
      background-image: svg-load("../../images/icons/tick.svg", fill=$confirm-color);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      margin-right: 15px;
    }
    &--cancel {
      background-image: svg-load("../../images/icons/remove.svg", fill=$error-color);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
</style>