<template>
    <div class="search-bar-container">
        
        <ul class="menu">
            <li class="list-item material-bubble"><router-link to="/" id="menu1" class="menu-item">Logo</router-link></li>
            <li  class="list-item material-bubble"><router-link to="/" id="menu2" class="menu-item" >Home</router-link></li>
            <li  class="list-item material-bubble"><router-link to="/" id="menu2" class="menu-item">Today</router-link></li>
            <li  class="list-item-search-bar">
                <div class="search-bar">
                    <v-container class="grey">
                        <v-row no-gutters>
                            <v-col
                                cols="12"
                                >
                                <v-text-field
                                    class="search-field"
                                    reverse
                                    v-model="thesearchterm"
                                    placeholder="search"
                                    filled
                                    rounded
                                    dense
                                    v-on:keyup.enter="sendNewSearchTerm(thesearchterm)"
                                ></v-text-field>
                                </v-col>
                        </v-row>
                    </v-container>
                </div>
            </li>
            <li  class="list-item">
                <router-link to="/" class="menu-item">
                    <font-awesome-icon icon="bell" pull="left"/>
                </router-link>
            </li>
            <li  class="list-item">
                <router-link to="/" class="menu-item">
                    <font-awesome-icon icon="comment-dots" pull="left"/>
                </router-link>
            </li>
            <li  class="list-item">
                <router-link to="/" class="menu-item">
                    <font-awesome-icon icon="user" pull="left"/>
                </router-link>
            </li>
            <li  class="list-item">
                <div  @click="isShow = !isShow" class="menu-item">
                    <font-awesome-icon icon="angle-down" pull="left"/>
                </div>
                <ul class="drop-down-menu" v-show="isShow" @click="isShow2 = !isShow2">
                    <li>
                        <ul>
                            <li><p class="drop-down-menu-heading">Currently in</p></li>
                            <li>
                                <v-container class="drop-down-menu-logo-container">
                                    <v-row class="drop-down-menu-row" no-gutters>
                                        <v-col md="4">
                                            <div><p>logo goes here</p></div>
                                        </v-col>
                                        <v-col md=8>
                                            <v-row>
                                                <div><p>other content here</p></div>
                                            </v-row>
                                            <v-row>
                                                <div><p>other content here</p></div>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </li>
                            <li><p class="drop-down-menu-heading">Your Accounts</p></li>
                            <li><p class="drop-down-menu-button">Add acount</p></li>
                            <li><p class="drop-down-menu-button">Convert to business</p></li>
                            <li><p class="drop-down-menu-heading">More options</p></li>
                            <li><p class="drop-down-menu-button">Settings</p></li>
                            <li><p class="drop-down-menu-button">Tune your home feed</p></li>
                            <li><p class="drop-down-menu-button">Install the Windows app</p></li>
                            <li><p class="drop-down-menu-button">Get Help</p></li>
                            <li><p class="drop-down-menu-button">See terms and privacy</p></li>
                            <li><p class="drop-down-menu-button">Log out</p></li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
        
        <div class="list-item-search-bar-mobile">
            <div class="search-bar">
                <v-container class="grey">
                    <v-row no-gutters>
                        <v-col
                            cols="12"
                            >
                            <v-text-field
                                class="search-field"
                                reverse
                                v-model="thesearchterm"
                                placeholder="search"
                                filled
                                rounded
                                dense
                                v-on:keyup.enter="sendNewSearchTerm(thesearchterm)"
                            ></v-text-field>
                            </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>
    </div>
</template>

<script>

import { mapState, mapActions } from "vuex";
//import anime from 'animejs';

export default {
    name: "mainmenu",
    data(){
        return{
            thesearchterm: "",
            isShow: false,
            isShow2: false
        }
    },   
  computed: {
      ...mapState(['searchterm']),
  },
  watch:{
    searchterm(newValue, oldValue){
      console.log(`updating from ${oldValue} to ${newValue}`);

      this.changeSearchTerm(newValue)
    }
  },
  methods:{
    ...mapActions(['changeSearchTerm']),
    
    sendNewSearchTerm(searchterm){
        this.thesearchterm = ""
        this.changeSearchTerm(searchterm)
        this.$router.push('/')
    }
  }
}
</script>

<style scoped>

.search-bar-container .menu .list-item .menu-item:hover, 
.drop-down-menu-button:hover {
  background-color: #f1f1f1;
}

.search-bar-container .menu {
    display:flex;
    flex-flow: row nowrap;
    justify-content:space-around;
    list-style-type: none;
    margin:0;
    padding:0;
    overflow:hidden;
}

.search-bar-container .list-item-search-bar-mobile{
    display:none;
}

.search-bar-container .menu .list-item-search-bar{
    flex-grow: 6;
}

.search-bar-container .menu .list-item .menu-item {
    display:block;
    color:white;
    text-align:center;
    margin-top:8px;
    text-decoration:none;
    color:black;
    background-color: none;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin-top: 16px;
    cursor: pointer;
    border-radius: 24px;
    font-family: 'Roboto', sans-serif;
    font-weight:700;
}

ul li ul {
    position:absolute;
    right:0;
    list-style-type:none;
    width:100%;
}
 
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (max-width: 1725px) {

}

@media only screen and (min-width: 1264px) {
  
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {

}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {

}

/* Medium devices (landscape tablets, 768px and up) */
@media screen and (max-width: 768px) {
    
    .search-bar-container .list-item-search-bar-mobile{
        display:block;
        width:100%;
        margin-top:-15px;
    }

    .search-bar-container .menu .list-item-search-bar{
        display:none;
    }
}

/* Extra small devices (phones, 600px and down) */
@media screen and (max-width: 600px) {
    
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media screen and (min-width: 600px) {

}



</style>