<template>
  <MyHeader />
  <router-view/>
</template>

<style>
  #app {
    height: 100%;
  }

  html, body {
    height: 100%;
  }

  body {
    margin: 0;
        
    background-color: #FAF2EB;
  }
  MyHeader {
    display: flex;

    width: 100%;
    height: 50px;

    background-color: #D0B097;
  }
</style>
