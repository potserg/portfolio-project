import Vue from 'vue';
import Flickity from 'vue-flickity';

const btns = {
  template: "#reviews-btns",
  props: ["current", "reviewsLength"]
};

new Vue({
  el: "#reviews-component",
  template: "#reviews-container",
  components: {
    Flickity, btns
  },
  data() {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        cellAlign: "left",
        setGallerySize: false,
        groupCells: 1
      },
      reviews: [],
      currentIndex: 0
    };
  },

  computed: {
    currentReview() {
      return this.reviews[this.currentIndex]
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
    
    next() {
      this.$refs.flickity.next();
      this.currentIndex++;
      console.log(this.currentIndex);
    },
    previous() {
      this.$refs.flickity.previous();
      this.currentIndex--;
      console.log(this.currentIndex);
    }

  },

  // watch: {
  //   currentIndex(value) {
  //     this.makeDisabledButtons(value)
  //   }
  // },
  
  created() {
    const data = require("../data/reviews.json");
    this.reviews = this.makeArrRequiredImages(data);
    this.reviews = data;
  }
});