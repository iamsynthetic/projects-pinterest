<template>
   <div class="focuscard">
      <v-container class="grey">
         <v-row class="firstrow-main-image" no-gutters>
            <v-col>
                <v-row class="box-container">
                  <v-col md="6" sm="12">
                     <div v-if="image == {}">
                        <p>nothing yet</p>
                     </div>
                     <div v-else>
                        <v-img :id="image.id" class="hero-image" :src="image.urls.regular"/>
                     </div>
                  </v-col>
                  <v-col md="6" sm="12">
                     <div class="card-content">
                        <v-row class="card-container-menu">
                           <v-col cols="1">
                              <router-link to="/" class="menu-item">
                                 <font-awesome-icon icon="ellipsis-h" pull="left"/>
                              </router-link>
                           </v-col>
                           <v-col cols="1">
                              <router-link to="/" class="menu-item">
                                 <font-awesome-icon icon="upload" pull="left"/>
                              </router-link>
                           </v-col>
                           <v-col cols="3">
                              <router-link to="/" class="menu-item">
                                 <font-awesome-icon icon="link" pull="left"/>
                              </router-link>
                           </v-col>
                           <v-col cols="4" class="second-last-column">
                              <div  @click="isShow = !isShow" class="menu-item">
                                 <div class="drop-down-menu-button">
                                    <p class="menu-text">currently in</p>
                                    <font-awesome-icon icon="angle-down" pull="left"/>
                                 </div>
                              </div>
                              <ul class="drop-down-menu focus-drop-down-menu" v-show="isShow" @click="isShow2 = !isShow2">
                                 <li>
                                    <ul>
                                       <li><p class="drop-down-menu-heading">Currently in</p></li>
                                       <li><p class="drop-down-menu-title">Top Choices</p></li>
                                       <li class="drop-down-menu-content" @mouseover="dothehover(1)" @mouseout="seen1=false">
                                          <div class="small-box"></div>
                                          <p class="text">Board A</p>
                                          <router-link to="/" id="save-button" class="board-save-button" v-if="seen1">Save</router-link>
                                       </li>
                                       <li class="drop-down-menu-content" @mouseover="dothehover(2)" @mouseout="seen2=false">
                                          <div class="small-box"></div>
                                          <p class="text">Board B</p>
                                          <router-link to="/" id="save-button" class="board-save-button" v-if="seen2">Save</router-link>
                                       </li>
                                       <li class="drop-down-menu-content" @mouseover="dothehover(3)" @mouseout="seen3=false">
                                          <div class="small-box"></div>
                                          <p class="text">Board C</p>
                                          <router-link to="/" id="save-button" class="board-save-button" v-if="seen3">Save</router-link>
                                       </li>
                                       <li class="drop-down-menu-content" @mouseover="dothehover(4)" @mouseout="seen4=false">
                                          <div class="small-box"></div>
                                          <p class="text">Board D</p>
                                          <router-link to="/" id="save-button" class="board-save-button" v-if="seen4">Save</router-link>
                                       </li>
                                    </ul>
                                 </li>
                              </ul>
                           </v-col>
                           <v-col cols="3" class="last-column">
                              <router-link to="/" id="save-button" class="menu-item">Save</router-link>
                           </v-col>
                        </v-row>
                        <v-row class="card-container-title">
                           <v-col class="title1 card-heading-small" cols="12">
                              <p>Image ID:</p>
                           </v-col>
                           <v-col class="body1" cols="12">
                              <div v-if="image.id != null">
                                 <h4>{{image.id}}</h4>
                              </div>
                              <div v-else>
                                 <h4>ID isn't available</h4>
                              </div>
                           </v-col>
                           <v-col class="title2 card-heading-small" cols="12">
                              <p>Description:</p>
                           </v-col>
                           <v-col class="body1" cols="12">
                              <div v-if="image.description != null">
                                 <p>{{image.description}}</p>
                              </div>
                              <div v-else>
                                 <p>User didn't provide a description</p>
                              </div>
                           </v-col>
                           <v-col class="title2 card-heading-small" cols="12">
                              <p>Shot On:</p>
                           </v-col>
                           <v-col class="body1" cols="12">
                              <div v-if="image.created_at != null">
                                 <h4>{{image.created_at}}</h4>
                              </div>
                              <div v-else>
                                 <h4>Creation date isn't available</h4>
                              </div>
                           </v-col>
                           <v-col class="title2 card-heading-small" cols="12">
                              <p>By:</p>
                           </v-col>
                           <v-col class="body1" cols="12">
                              <div v-if="image.user.username != null">
                                 <p>{{image.user.username}}</p>
                              </div>
                              <div v-else>
                                 <p>User didn't provide user name</p>
                              </div>
                           </v-col>
                        </v-row>
                         <v-row class="card-container-link">
                           <v-col xs="12"><a target="_blank" :href="`${image.links.html}`">source image</a></v-col>
                        </v-row>
                     </div>
                  </v-col>
               </v-row>
            </v-col>
         </v-row>
         <v-row class="secondrow-searchresults" no-gutters>
            <v-col>
               <v-row>
                  <v-col>
                     <h3>More Like This</h3>
                  </v-col>
               </v-row>
               <v-row>
                  <v-col>
                     <thesearchresults></thesearchresults>
                  </v-col>
               </v-row>
            </v-col>
         </v-row>
      </v-container>

   </div>
</template>

<script>

import { mapState } from 'vuex'
import thesearchresults from "../components/SearchResults.vue"

export default {
   name: 'focuscard',
   data(){
      return{
         image: {},
         isShow: false,
         isShow2: false,
         seen1: false,
         seen2: false,
         seen3: false,
         seen4: false
      }
   },
   components: {
    thesearchresults
  },
  mounted(){
      this.loadFocusedImage(this.focusedimageid)
  },
   computed: {
      ...mapState(['focusedimageid'])
   },
   watch:{
    focusedimageid(newValue, oldValue){
      console.log(`updating from ${oldValue} to ${newValue}`);

      this.loadFocusedImage(newValue)
    }
   },
   methods:{
      loadFocusedImage(val){
         this.image = val
         if(window.scrollY!=0){
            window.scroll({top: 0, left: 0, behavior: 'smooth'});
         }
      },
      dothehover(num){
         switch(num){
            case 1:
               this.seen1 = !this.seen1;
            break;
            case 2:
               this.seen2 = !this.seen2;
            break;
            case 3:
               this.seen3 = !this.seen3;
            break;
            case 4:
               this.seen4 = !this.seen4;
            break;
         }
      }
   }
}
</script>

<style scoped>

.focuscard {
   position:relative;
   display:flex;
   justify-content:center;
   z-index:1;
}

.firstrow-main-image{
   z-index:3;
   position:relative;
}

.box-container{
   margin:auto;
   max-width:900px;
   height:auto;
   border-radius:16px;
   border:1px;
   background-color: white;
   filter: drop-shadow(-6px 04px 10px rgba(0,0,0,0.15));
}

.hero-image{
   border-radius: 16px;
   max-height:auto;
}

.card-content{
   text-align:left;
}

.card-container-title{
   margin:0;
}

.card-container-title .title1{
   padding:0;
   margin-top:10px;
}

.card-container-title .title2{
   padding:0;
   margin-top:10px;
}

.card-container-title .body1{
   padding:0;
   margin-top:3px;
}

.card-container-title .body2{
   padding:0;
   margin-top:10px;
}

.card-container-menu{
   align-items:center;
}

.card-container-menu .last-column{
   display:flex;
   justify-content:right;
   margin-top:-10px;
}

.card-content .card-container-body #title1{
   padding-bottom:5px;
}

.card-content .card-container-body #title2{
   padding:10px 0 5px 0;
}

.menu-item{
   color:black;
}

#save-button {
   background-color: red;
   text-align: center;
   border: none;
   text-decoration: none;
   margin-top:10px;
   padding: 10px 20px;
   border-radius: 24px;
   font-family: 'Roboto', sans-serif;
   font-weight:700;
   color:white;
}

.menu-item .drop-down-menu-button{
   display:flex;
   justify-content:left;
}

.menu-item .drop-down-menu-button .menu-text{
   padding:0 10px 0 0;
}

.focus-drop-down-menu{
    z-index:3;
    position: absolute;
    text-decoration:none;
    list-style-type: none;
    margin-left: 0px;
    margin-top: 10px;
   justify-content:flex-end;
    align-self: flex-end;
    flex-wrap:wrap;
    width:600px;
    height:400px;
    background-color:white;
    border-radius:20px;
    padding:10px;
    filter: drop-shadow(-6px 04px 10px rgba(0,0,0,0.15));
}

.focus-drop-down-menu li{
   list-style-type:none;
}

.focus-drop-down-menu .drop-down-menu-heading{
       font-size: 16px;
    display: block;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    text-align:center;
}

.focus-drop-down-menu .drop-down-menu-title{
   font-size: 11px;
   display: block;
   font-family: 'Roboto', sans-serif;
   margin:20px 0 10px 10px;
   text-align:left;
}

.focus-drop-down-menu .drop-down-menu-content{
    display:flex;
    align-items:center;
    position:relative;
    padding:5px 0px 5px 10px;
    border-radius: 12px;
    cursor: pointer;
}

.focus-drop-down-menu .drop-down-menu-content:hover{
   background-color: #f1f1f1;
}

.focus-drop-down-menu .drop-down-menu-content .small-box{
   width:50px;
   height:50px;
   border-radius:8px;
   background-color:grey;
   margin:0px 10px 0px 0px;
   pointer-events:none;
}

.focus-drop-down-menu .drop-down-menu-content .text{
   font-size:16px;
   font-family: 'Roboto', sans-serif;
   font-weight:700;
   pointer-events:none;
}

.focus-drop-down-menu .drop-down-menu-content .board-save-button{
   margin:10px;
   position:absolute;
   right:0;
   pointer-events:none;
}

.secondrow-searchresults{
   padding-top:50px;
   z-index:1;
}

</style>