import Vue from "vue";

const thumbs = {
  template: "#slider-thumbs",
  props: ["works", "currentWork", "currentIndex"],

  computed: {
    translate() {
      const countThumbs = 3;
      const step = 100 / countThumbs;

      if (this.currentIndex >= this.works.length - 1) return;
      if (this.currentIndex < (countThumbs - 1)) return 0;
      if (this.currentIndex >= (countThumbs - 1)) return step * (this.currentIndex - 1);
    }
  }
};

const btns = {
  template: "#slider-btns",
  props: ["current", "worksLength"]
};

const display = {
  template: "#slider-display",
  components: {
    thumbs, 
    btns
  },
  props: ["works", "currentWork", "currentIndex"],
  
  methods: {
    handleSlide(direction) {
       this.$emit('slide', direction);
    }
  }
};

const tags = {
  template: "#slider-tags",
  props: ["tags"]
};

const info = {
  template: "#slider-info",
  components: { tags },
  props: ["currentWork"],
  computed: {
    tagsArray() {
      return this.currentWork.skills.split(', ')
    }
  }
};


new Vue({
  el: "#slider-component",
  template: "#slider-container",
  components: {
    display, info
  },
  data() {
    return {
      works: [],
      currentIndex: 0
    };
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex]
    }
  },
  methods: {
    makeArrRequiredImages(data) {
      return data.map(item => {
        const requiredPic = require(`../images/content/${item.photo}`);
        item.photo = requiredPic;

        return item;
      });
    },
    handleSlide(direction) {
      switch(direction) {
        case "next":
          this.currentIndex++;
          break;
        case "prev":
          this.currentIndex--;
          break;
        default:
          this.currentIndex = direction;
          break;
      }
    },
    makeInfiniteLoopForIndex(value) {
      const worksAmountComputerCounted = this.works.length - 1;

      if (value > worksAmountComputerCounted) this.currentIndex = 0;
      if (value < 0) this.currentIndex = worksAmountComputerCounted;
    }
  },
  watch: {
    currentIndex(value) {
      this.makeInfiniteLoopForIndex(value)
    }
  },
  created() {
    const data = require("../data/works.json");
    this.works = this.makeArrRequiredImages(data);
  }
});