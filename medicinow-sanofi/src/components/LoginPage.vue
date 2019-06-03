<template>
  <div class="loginpage">
  
        <div >
          
            <h1 class="logo-text">
                <b-img class="logo"  height="100" :src="require('../assets/bandaids.png')"  alt="Responsive image" />MediciNow</h1>
        </div>
  </div>
</template>

<script>
  export default {
    name: 'loginpage'
  }
</script>

<style>
.logo { 
  margin-right: 10px;
}
.logo-text {
  font-weight:bold;
  text-align: center;
}
</style>
