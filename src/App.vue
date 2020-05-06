<template lang="pug">
 
  .container 
   
    router-view


 
    

  
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap");
html {
  height: 100%;
}
body {
  font-family: "Playfair Display", serif;
}

ul {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}
textarea {
  outline: none;
}

input {
  outline: none;
}

* {
  box-sizing: border-box;
  text-transform: inherit;
  color: inherit;
  text-decoration: none;
  margin: 0;
  font-weight: inherit;
  font-size: inherit;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  height: 100%;

  @media (max-width: 768px) {
    max-width: 95%;
  }
}

.heading {
  font-weight: bold;
  font-size: 46px;
  text-transform: uppercase;
  @media (max-width: 560px) {
    font-size: 24px;
  }
}

.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 100px 0 5px 0;
  @media (max-width: 560px) {
    margin: 25px 0 5px 0;
  }
}

button {
  padding: 0;
  margin: 0;
  background: inherit;
  color: inherit;
  border: none;
  font-family: inherit;
  min-width: 50px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

button:active,
button:focus {
  outline: none;
}
button::-moz-focus-inner {
  border: 0;
}

.button {
  cursor: pointer;
  padding: 5px;
  border: 1px solid black;
  display: inline-block;
  text-align: center;
}

.button--left {
  margin-right: 10px;
}

input {
  width: 100%;
  border: none;
  font-family: inherit;
  padding: 3px;
}

.input-area {
  height: 100%;
}

.input--textarea {
  width: 50%;
  min-height: 300px;
  margin-right: 25px;
  font-size: 16px;
  font-family: inherit;
  padding: 3px;
  @media (max-width: 560px) {
    width: 100%;
  }
}

.inputs {
  display: flex;
  @media (max-width: 560px) {
    flex-direction: column;
  }
}

.inputs__todos {
  width: 50%;
  @media (max-width: 560px) {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
  }
}

.navigation {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
  align-items: center;
}

.popup {
  position: fixed;
  top: 25%;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.popup__content {
  padding: 15px;
  min-width: 25%;
  border: 1px solid black;
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.popup__text {
  margin-top: 100px;
  margin-bottom: 50px;
}
</style>
