<template>
  <div id="home">
      <v-carousel
        cycle
        height="400"
        hide-delimiters
        :show-arrows="false"
      >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <h1>home</h1>
    <h1>home</h1>
    <h1>home</h1>
    <h1>home</h1>
    <h1>home</h1>
    <h1>home</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      items: [
        {
          src: require("../assets/savon1.jpg"),
        },
        {
          src: require("../assets/savon2.jpg"),
        },
        {
          src: require("../assets/savon3.jpg"),
        },
        {
          src: require("../assets/savon4.jpg"),
        },
      ],
    }
  }
}
</script>

<style>

#home{
  background-color: white;
}

</style>