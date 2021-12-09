<template>
   <div>
      <stack  @scroll="scroll"
      :column-min-width="300"
      :gutter-width="15"
      :gutter-height="15"
      monitor-images-loaded
    >
      <stack-item v-for="(image, index) in images" :key="index" style="transition:transform 300ms">
        <a>
        <img :id="'image'+index" class="images" @mouseover="imgHovered(index)" @mouseleave="imgLeave(index)" @click="imgClicked(index)" :src="image.urls.small" :alt="image.alt_description" />
        </a>
      </stack-item>
    </stack>
   </div>
</template>

<script>


import { Stack, StackItem } from "vue-stack-grid";
import axios from 'axios';
import { mapState, mapActions } from "vuex";
import anime from 'animejs';

export default {
   name: 'searchresults',
   data(){
        return {
          images: [],
          temparr: [],
          defaultsearchterm: 'hockey',
          currentsearchterm: '',
          pagenum: '1',
          scrolledToBottom: false
        }
   },
   components: {
    Stack,
    StackItem
  },
  mounted(){
    this.scroll()
    this.checkSearchterm()
  },
  computed: {
      ...mapState(['searchterm']),
  },
  watch:{
    searchterm(newValue, oldValue){
      console.log(`updating from ${oldValue} to ${newValue}`);

      this.searchUnsplash(newValue)
    }
  },
  methods:{
    ...mapActions(['changeFocusedImage']),

    checkSearchterm(){
      if(this.searchterm == ''){
        this.searchUnsplash(this.defaultsearchterm)
        this.currentsearchterm = this.defaultsearchterm;
      }
      else
      {
        this.searchUnsplash(this.searchterm)
        this.currentsearchterm = this.searchterm;
      }  
    },
    searchUnsplash(val){
      axios.get(`/.netlify/functions/fetch-images?keyword=${val}&page=${this.pagenum}`).then(
      response => {
        if(val != this.currentsearchterm){
          this.images = [];
          this.images = response.data.results;
        }
        else if(this.images.length == 0){
          this.images = response.data.results;
        }
        else
        {
          Array.prototype.extend = function (other_array) {
              //check if this is actually an array
              other_array.forEach(function(v) {this.push(v)}, this);
          }
          this.images.extend(response.data.results)
        }
      }).catch(() => {
        this.images = []
      })
    },
    imgHovered(e){
      this.useHandCursor = true;
      this.hoverAnim(e, .9);
    },
    imgLeave(e){
      this.hoverAnim(e, 1, 'reverse');
    },
    imgClicked(e){
      this.changeFocusedImage(this.images[e])
      this.hoverAnim(e, 1, 'reverse');
      this.$router.push(`${this.images[e].id}`)
    },
    hoverAnim(element, value, direction=null){
      let thetarget = document.querySelector('#image'+element)
      let alltargets = document.getElementsByClassName('images')

      console.log('alltargets is: ' + alltargets)
      anime({
        targets: thetarget,
        scale: {
          value:value,
          duration:700,
          direction:direction,
          easing: 'easeInOutBack'
        },
        update: function(anim){
          if(direction==null)
          {
            for(var i = 0; i < alltargets.length; i++){
               alltargets[i].style.filter = 'grayscale(' + 100 * anim.progress / 100 + '%)';
            }
            thetarget.style.filter = 'grayscale(' + ((anim.progress + 100) - (anim.progress+anim.progress)) + '%)'
          }
          else
          {
            for(var j = 0; j < alltargets.length; j++){
              alltargets[j].style.filter = 'grayscale(' + ((anim.progress + 100) - (anim.progress+anim.progress)) + '%)'
            }
          }
        }
      })
    },
    scroll () {
      window.onscroll = () => {
        let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight

        if (bottomOfWindow) {
         this.reachedBottomOfPage();
        }
      }
    },
    reachedBottomOfPage(){
      let converttonumber = Number(this.pagenum);
      let newnumber = converttonumber+1;
      let newnumberstring = String(newnumber);
      this.pagenum = newnumberstring;
      this.checkSearchterm()
    }
  }
}
</script>

<style scoped>

a{
  display:block;
  cursor:pointer;
}

.images{
  border-radius: 25px;
  max-width:300px;
  max-height:400px;
}

</style>