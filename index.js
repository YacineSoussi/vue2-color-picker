import Vue from 'vue/dist/vue.js';
import './style.css';

let vm = new Vue({
  el: '#app',
  data: {
    green: 0,
    blue: 0,
    red: 0,
    squares: [],
    selectedSquare: '',
  },
  methods: {
    resetColor() {
      this.red = this.green = this.blue = 0;
    },
    saveSquare() {
      this.squares.push(`rgb(${this.red}, ${this.green}, ${this.blue})`);
      this.resetColor();
    },
    reset() {
      this.resetColor();
      this.squares = [];
    },
  },
  computed: {
    nbrOfSquares() {
      return this.squares.length;
    },
  },
});
