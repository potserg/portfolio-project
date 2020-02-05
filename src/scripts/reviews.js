import Vue from 'vue';
import Flickity from 'vue-flickity';

new Vue({
  el: "#reviews-component",
  template: "#reviews-container",
  components: {
    Flickity
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
        groupCells: 2
      },
      reviews: []
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
    },
    previous() {
      this.$refs.flickity.previous();
    }
  },
  
  created() {
    const data = require("../data/reviews.json");
    this.reviews = this.makeArrRequiredImages(data);
    this.reviews = data;
  }
});