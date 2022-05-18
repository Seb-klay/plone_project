<template>
  <div class="cart">
    <v-stepper
        v-model="panier"
        vertical
    >
        <v-stepper-step
        step="1"
        >
        Visionner le panier
        </v-stepper-step>

        <v-stepper-content step="1">
            <v-container
                fluid>
                <v-row
                    class="row_card">
                    <v-col
                        v-for="(product, i) in cart"
                        :key="i"
                        cols="12"
                        sm="3">
                        <v-card
                            class="produit"
                            elevation="4">
                            <v-img
                            height="150"
                            :src="product.img"
                            >       
                            <v-btn
                                class="boutonSupprimer"
                                color="#FF0000"
                                @click="supprimer(product)"
                                outlined
                                icon
                                >
                                <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                            </v-btn></v-img>
                            <v-row>
                                <v-col
                                    class="productTitle"
                                    cols="12"
                                    sm="12"
                                    md="12">
                                    <v-card-text>
                                        <h1>{{product.title}}</h1>
                                    </v-card-text>
                                </v-col>
                                <v-col
                                    cols="6"
                                    sm="6"
                                    md="6">
                                    <v-card-text>
                                        <h2>CHF {{product.prix}}.-</h2>
                                    </v-card-text>
                                </v-col>
                                <v-col
                                    cols="6"
                                    sm="6"
                                    md="6">
                                        <b-form-input
                                            @input="changeNumber"
                                            class="input"
                                            :value="product.quantite"
                                            type="number"
                                            id="number"
                                            min="0"></b-form-input>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
                <!-- <div
                    v-show="cart != null">
                    Total
                    <v-spacer></v-spacer>
                    XXX
                </div> -->
            </v-container>
            <v-btn
                v-if="cart != null"
                class="bouton"
                color="#8aa469"
                dark
                @click="panier = 2"
            >
                Continue
            </v-btn>
            <v-btn
                v-else
                class="bouton"
                color="#d3d3d3"
                dark
            >
                Continue
            </v-btn>
        </v-stepper-content>

        <v-stepper-step
        step="2"
        >
       Inscrire vos informations personnelles
       <small>Celles-ci ne seront pas conservées</small>
        </v-stepper-step>

        <v-stepper-content step="2">
            <v-card
                color="#ececec"
                height="200px"
            ></v-card>
            <v-btn
                class="bouton"
                color="#000000"
                outlined
                @click="panier = 1"
            >
                Retour
            </v-btn>
            <v-btn
                class="bouton"
                color="#8aa469"
                dark
                @click="panier = 3"
            >
                Continue
            </v-btn>
        </v-stepper-content>

        <v-stepper-step
        step="3"
        >
            Moyen de paiement
        </v-stepper-step>

        <v-stepper-content step="3">
            <v-card
                color="#ececec"
                height="200px"
            ></v-card>
            <v-btn
                class="bouton"
                color="#000000"
                outlined
                @click="panier = 2"
            >
                Retour
            </v-btn>
            <v-btn
                class="bouton"
                color="#8aa469"
                dark
                @click="panier = 4"
            >
                Continue
            </v-btn>
        </v-stepper-content>

        <v-stepper-step step="4">
        Vérifier la commande
        </v-stepper-step>

        <v-stepper-content step="4">
            <v-card
                color="#ececec"
                height="200px"
            ></v-card>
            <v-btn
                class="bouton"
                color="#000000"
                outlined
                @click="panier = 3"
            >
                Retour
            </v-btn>
            <v-btn
                class="bouton"
                color="#8aa469"
                dark
                @click="panier = 1"
            >
                Continue
            </v-btn>
        </v-stepper-content>
    </v-stepper>
  </div>
</template>

<script>
  export default {
    name: 'Cart',
    components: {
    },
    data () {
      return {
        cart: [],
        panier: 1,
        newValue: null
      }
    },
    mounted() {
        if (localStorage.getItem('cart')) {
            try {
                this.cart = JSON.parse(localStorage.getItem('cart'));
                console.log(this.cart);
                console.log("le composant est mtn monté");
            } catch(e) {
                localStorage.removeItem('cart');
            }
        }
    },
    methods: {
        supprimer(product){
            this.cart.splice(this.cart.indexOf(product), 1);
            localStorage.setItem('cart', JSON.stringify(this.cart));
        },
        changeNumber(val){
            console.log(val + " & " + this.newValue);
            this.cart.product.quantite = val; //n'arrive pas avec cette valeur
            console.log(this.cart.product.quantite);
            return this.newValue = this.cart.product.quantite;
            //j'ai remplacé "v-model.lazy" par "value" dans la l'input.
        },
    }
  }
</script>

<style scoped>
.bouton {
    margin: 5%;
}

.boutonSupprimer {
    margin: 5%;
    position: absolute;
}

.input {
    width: 5vw;
    margin: 15% 5% 5% 5%;
}

.produit{
    min-width: 30vh;
    max-width: 35vh;
    margin: 5%;
}

.productTitle{
    margin-bottom: -2em;
}

h1{
    color: #f5c169;
    font-size: 2em;
    word-break: break-all;
    word-wrap: break-word;
    overflow-wrap: break-word;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
}

h2{
    font-size: 1.4em;
    margin: 5%;
}

.row_card{
    justify-content: center;
}

</style>