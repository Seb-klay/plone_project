<template>
    <div id="minimalistes">

        <v-container>
        <v-alert
            class="alert"
            :value="alert"
            type="success"
            dense
            text
            color="#8aa469"
            dark
        >
        {{changedText}}
        </v-alert>
            <v-row
                class="row_card">
                <v-col
                v-for="(item, i) in items"
                :key="i"
                cols="12"
                sm="6"
                >
                    <v-card
                        class="produits"
                        max-width="374"
                        elevation="6"
                    >
                        <v-img
                        height="250"
                        :src="item.img"
                        ></v-img>

                        <h1>{{item.title}}</h1>

                        <v-card-text>
                            {{item.text}}
                        </v-card-text>

                        <h3>CHF {{item.prix}},00</h3>
                        
                        <v-card-actions>
                            <v-btn
                                class="button"
                                color="#ffd700"
                                outlined
                                @click="show = !show"
                                elevation="4"
                                >
                                    Détails
                            </v-btn>

                            <v-spacer></v-spacer>

                            <v-btn
                                class="button"
                                color="#93bf85"
                                dark
                                @click="ajouter(item) ; alert = true; changeText(item); alert(item.quantite)"
                                elevation="4"
                                >
                                    Ajouter au panier
                            </v-btn>
                        </v-card-actions>

                        <v-divider class="mx-4"></v-divider>
                        <v-expand-transition>
                            <div v-show="show">
                                <v-card-title>Infos</v-card-title>

                                <v-card-text>
                                    {{item.info}}
                                </v-card-text>

                                <v-card-title>Ingrédients</v-card-title>
                                <v-card-text>
                                    {{item.ingr}}
                                </v-card-text>
                            </div>
                        </v-expand-transition>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
  export default {
    name: 'Minimalistes',
    data : () => ({
      show: false,
      alert: false,
      changedText: '',
      items: [
            {
            id: 1,
            title: 'Delicatesse',
            text: `Savon extra-doux surgras pour peaux délicates`,
            info: `Savon naturel artisanal à l'huile de chardon marie et au macérât de consoude. Sans parfum ni huile essentielle.`,
            ingr: `Huile végétale chardon marie 1.0%, macérât de consoude 0.2% + 0.8% huile végétale de tournesol`,
            img: require('../assets/savon4.jpg'),
            prix: 8,
            quantite: null,
            },
            {
            id: 2,
            title: 'Sérénité',
            text: `Savon extra-doux surgras pour peaux délicates.`,
            info: `Savon naturel artisanal à l'huile d'amande douce et au macérât de calendula. Sans parfum ni huile essentielle.`,
            ingr: `Huile végétale d'amande douce 0.5%, macérât de calendula 0.5% + 0.5% d'huile végétale de tournesol`,
            img: require('../assets/savon3.jpg'),
            prix: 7,
            quantite: null,
            },
      ],
      cart: [],
    }),
    mounted() {
        if(localStorage.cart){
            this.cart = JSON.parse(localStorage.cart);
        }
        console.log("mounted minimaliste : " + this.cart);
    },
    watch: {
        cart : {
            handler(product) {
                localStorage.cart = JSON.stringify(product);
        },
            deep: true
        },
        alert(new_val){
            if(new_val){
                setTimeout(()=>{this.alert = false},4000)
            }
        } 
    },
    methods: {
        ajouter(item){
            if (localStorage.cart[item.id-1]){
                this.cart[item.id-1].quantite++;
                this.saveCart();
            } else {
                localStorage.cart[item.id-1].quantite = 1;
                this.saveCart();
            }
            console.log("ajout LS : " + localStorage.getItem('cart'));
        },
        saveCart() {
            const parsed = JSON.stringify(this.cart);
            localStorage.setItem('cart', parsed);
        },
        changeText(product){
            this.changedText = this.cart[product.id-1].quantite + 'x ' + product.title + ' ajouté au panier';
        }
    }
  }
</script>

<style scoped>
/* .alert{
    width: 10vw;
    display: block;
    position: relative;
} */

.produits {
    margin: 3vw;
}

.button {
    margin: 1em;
}

.row_card{
    justify-content: center;
}

h1 {
    margin-top: 5%;
}
</style>
