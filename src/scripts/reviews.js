import Vue from 'vue';
import Flickity from 'vue-flickity';

const btns = {
  template: "#flickity-btns"
};

new Vue({
  el: "#flickity-component",
  template: "#flickity-container",
  components: {
    Flickity
  },
  
  data() {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        cellAlign: "left",
        groupCells: 2
        
        // any options from Flickity can be used
      }
    }
  },
  
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    }
  }
});