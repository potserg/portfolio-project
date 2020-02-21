<template lang="pug">
  .skill-container
    .category__header
      h2.category__title {{category.category}}
      button(type="button" @click="removeExistedCategory") удалить
    .category__content
      table.skill__list
        skill-item(
          v-for="skill in category.skills"
          :key="skill.id"
          :skill="skill"
        )
      form(
        @submit.prevent="addNewSkill"
        :class={blocked: loading}
      ).add-skill-wrapper
        input(type="text" placeholder="Новый навык" v-model="skill.title")
        input(type="text" placeholder="100" v-model="skill.percent")
        //- input(type="file" @change="handleFile")
        button(
          type="submit"
          :disabled="loading"
        ) Добавить
</template>
<script>
import { mapActions } from "vuex";
export default {
  components: {
    skillItem: () => import("./skill-item")
  },
  data() {
    return {
      loading: false,
      file: {},
      skill: {
        title: "",
        percent: 0,
        category: this.category.id
      }
    };
  },
  props: {
    category: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  methods: {
    handleFile(e) {
      const file = e.target.files[0];
      this.file = file;
      const formData = new FormData();
      formData.append("photo", this.file);
    },
    ...mapActions("skills", ["addSkill"]),
    async addNewSkill() {
      this.loading = true;
      try {
        await this.addSkill(this.skill);
        this.skill.title = "";
        this.skill.percent = "";
      } catch (error) {
        // handling error
      } finally {
        this.loading = false;
      }
    },
    ...mapActions("categories", ["removeCategory"]),
    async removeExistedCategory() {
      try {
        await this.removeCategory(this.category);
      } catch (error) {}
    }
  }
};
</script>

<style lang="postcss" scoped>

.skill-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 30px;
  position: relative;
}

.category__header {
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba($font-color, 0.5);
}

.category__title {
  font-size: 16px;
  font-weight: 600;
  color: $font-color;
}

.category__content {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
}

.skill__list {
  width: 100%;
  border-spacing: 0 20px;
  position: relative;
}

.add-skill-wrapper.blocked {
  opacity: 0.5;
  filter: grayscale(100%);
  pointer-events: none;
  user-select: none;
}
</style>