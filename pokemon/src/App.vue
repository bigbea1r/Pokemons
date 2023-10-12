
<template>
  <div class="header">
    
     <div class="route-obj">
      <router-link to="/"><img src="/pokemon-23.svg" class="logo" alt="Pokemon logo" /></router-link> 
      <router-link to="/pokemon/:id">Pokemon ID</router-link> 
      <router-link to="/terms-of-use">Terms of use</router-link> 
     </div>
  </div>
      <router-view></router-view>
</template>

