<template>
    <v-container>
        <v-row>
            <v-col
            v-for="(item, i) in items"
            :key="i" @click.stop="item.src"
            cols="12"
            >
                <v-hover v-slot="{ hover }">
                    <v-card
                        class="card_class"
                        dark
                        :img="item.img"
                        :href="item.src"
                    >
                        <div
                            class="title_card">
                            <h1>{{item.title}}</h1>
                        </div>
                        <div
                            v-if="hover"
                            class="text_card">
                            <h2>{{item.text}}</h2>
                        </div>
                        <v-fade-transition>
                            <v-overlay
                                v-if="hover"
                                absolute
                                opacity="0.2"
                                color="#FFFFFF"
                            >
                            </v-overlay>
                        </v-fade-transition>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
    </v-container>
</template>

<script> 
export default {
  name: 'Produits',
  components: {
  },
  data: () => ({
    overlay: false,
    items: [
        {
          title: 'Les minimalistes',
          text: `La simplicité dans le creux de votre main.`,
          img: require('../assets/savon4.jpg'),
          src: '/produits/minimalistes',
        },
        {
          title: 'Les exotiques',
          text: `Le bout du monde à porté de main.`,
          img: require('../assets/savon3.jpg'),
          src: '/produits/exotiques',
        },
        {
          title: 'Les végétaux',
          text: `Au plus proche de la nature.`,
          img: require('../assets/savon2.jpg'),
          src: '/produits/vegetaux',
        },
        {
          title: 'Les floraux',
          text: `L'art floral à l'état pur.`,
          img: require('../assets/savon1.jpg'),
          src: '/produits/floraux',
        },
        {
          title: 'Les fruités & gourmands',
          text: `Ne vous privez plus de vos pêchés minions.`,
          img: require('../assets/savon4.jpg'),
          src: '/produits/fruitesGourmands',
        },
    ],
  }),
}
</script>

<style>
.card_class {
    height: 15em;
    display: flex;
    position: relative;
}

.title_card {
    display: flex;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5em;
    color: #f5c169;
    padding: 1%;
    text-shadow: 3px 3px black;
}

.text_card {
    display: flex;
    position: absolute;
    margin-top : 3%;
    left: 50%;
    top: 55%;
    transform: translate(-50%, -50%);
    font-size: 0.9em;
    color: white;
    text-shadow: 3px 3px black;
}

</style>