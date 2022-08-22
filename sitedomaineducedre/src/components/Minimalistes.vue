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
                        class="img_produit"
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
                                @click="show = !show; showProductOverlay(item)"
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
                        <v-overlay
                        :z-index="1"
                        :value="show"
                        >
                        <v-card
                        elevation="5"
                        class="show_produit"
                        v-model="show_product_overlay">
                            <v-col cols="12">
                            <v-form
                                ref="form"
                                lazy-validation
                            >
                                <v-img
                                class="show_produit_img"
                                height="250"
                                :src="show_product_overlay.img"
                                ></v-img>

                                <h1>{{show_product_overlay.title}}</h1>

                                <v-card-text>
                                    {{show_product_overlay.text}}
                                </v-card-text>

                                <h3>CHF {{show_product_overlay.prix}},00</h3>

                                <br>

                                <h2>Infos</h2>
                                <p>{{show_product_overlay.info}}</p>

                                <br>


                                <h2>Ingrégients</h2>
                                <p>{{show_product_overlay.ingr}}</p>

                                <v-btn
                                class="bouton"
                                color="#949494"
                                @click="show = false"
                                outlined
                                >
                                Fermer
                                </v-btn>

                                <v-btn
                                    class="button"
                                    color="#93bf85"
                                    dark
                                    @click="ajouter(item) ; alert = true; changeText(item); alert(item.quantite)"
                                    elevation="4"
                                    >
                                        Ajouter au panier
                                </v-btn>
                            </v-form>
                            </v-col>
                        </v-card>
                        </v-overlay>
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
      show_product_overlay: {},
      alert: false,
      changedText: '',
      items: [
            {
            id: 1,
            title: 'Delicatesse',
            text: `Savon extra-doux surgras pour peaux délicates`,
            info: `Savon naturel artisanal à l'huile de chardon marie et au macérât de consoude. Sans parfum ni huile essentielle.`,
            ingr: `Huile végétale chardon marie 1.0%, macérât de consoude 0.2% + 0.8% huile végétale de tournesol`,
            img: require('../assets/delicatesse.jpg'),
            prix: 8,
            quantite: null,
            },
            {
            id: 2,
            title: 'Sérénité',
            text: `Savon extra-doux surgras pour peaux délicates.`,
            info: `Savon naturel artisanal à l'huile d'amande douce et au macérât de calendula. Sans parfum ni huile essentielle.`,
            ingr: `Huile végétale d'amande douce 0.5%, macérât de calendula 0.5% + 0.5% d'huile végétale de tournesol`,
            img: require('../assets/serenite.jpg'),
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
        },
        showProductOverlay(item){
            this.show_product_overlay = item;
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

.img_produit{
    border-radius: 2%;
}

@media (max-width: 580px) {
  .show_produit {
    background-color: white;
    color: black;
    height: 100vh;
    width: 100vw;
  }
}

@media (min-width: 581px) and (max-width: 1000px) {
  .show_produit {
    background-color: lightgreen;
    color: black;
    height: 90vh;
    width: 50vw;
  }
}

@media (min-width: 1001px) {
    .show_produit{
        background-color: white;
        color: black;
        border-radius: 5%;
        width: 30vw;
        min-width: 30vw;
        max-height: 90vh;
    }
}

.show_produit_img{
    border-radius: 5%;
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
