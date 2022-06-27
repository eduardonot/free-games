<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  @import url('http://fonts.cdnfonts.com/css/roboto');
  html, body {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #000000;
    color: white;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 300;
  }

  #app {
    box-sizing: border-box;
  }
  .btn {
    border: none;
    border-radius: 2px;
    padding: 5px 10px 5px 10px;
    margin: 5px;
    font-weight: 500;
    cursor: pointer;
  }

  .btn-action {
    background-color: #610094;
    text-transform: uppercase;
    color: white;
  }

  .btn-nav{
    background-color: transparent;
    color: white;
  }
</style>
