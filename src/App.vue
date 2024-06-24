<script setup>

import NavItem from './components/NavItem.vue';
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="wrapper col-12 col-lg-3">
        
      <!---<RouterLink to="/">Home</RouterLink>
      <RouterLink to="/select">Select</RouterLink>-->
      <nav-item></nav-item>
      </div>
      <div class="content col-11 mx-auto  col-lg-8 offset-lg-1">
        <RouterView />
      </div>
    </div>
   
   
  </div>

</template>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
.container .row {
    background: url('./assets/images/bg-sidebar-mobile.svg');
    background-position: top;
    background-repeat: no-repeat;
    max-height: 50%;
}
.content{
    background: var(--white);
    border-radius: 9px;
    padding: 10px;
    margin-top: 3%;
  }


@media (min-width: 768px) {
  
  .container .row {   
    background-position: top;
    background-repeat: no-repeat;
   background-size: contain;}
}
@media (min-width: 1024px) {
  .container .row {
    background: none;
   
  }
  .content{
    background: none;
    border-radius: none;
    padding: 0;
    margin-top:0;
  }
  .container {
    display: flex;
    background: white;
    padding:10px 20px;
    border-radius: 10px;
    align-items: flex-start;
    width: 85%;
    margin:  auto;
    margin-top: 1%;
    box-shadow: 1px 1px 9px 8px var(--light-gray);
    
  }
  .row{
    width: 95%
  }

  .container .wrapper {
    padding: 10px;
    border-radius: 10px;
    background: url('./assets/images/bg-sidebar-desktop.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    max-height: 100%;
  }
  .content{
    padding-top:40px;
    padding-bottom:40px;
  }
  
}
@media (min-width: 1440px) {
  .container{
    margin-top: 3%;
    width: 60%;
  }
}
</style>
