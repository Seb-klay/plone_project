<template>
  <div id="app">
    <div
      id="smallScreen">
      <v-card>
        <v-app-bar
          color="#8aa469"
          dark
          elevate-on-scroll
        >
          <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

          <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            color="#8aa469"
          >
            <v-list
              nav
              dense
              :z-index="0"
            >
              <v-list-item-group>
                <v-list-item>
                  <v-list-item-title> <router-link to="/">Accueil</router-link> </v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-title> <router-link to="/produits">Produits</router-link> </v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-title> <router-link to="/about">A propos</router-link> </v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-navigation-drawer>

          <v-spacer></v-spacer>

          <img
            :src="require('@/assets/LogoDDCWhite.png')"
            alt="logo"
            class="logo">

          <v-spacer></v-spacer>

          <v-badge
            color="#000000"
            content="6"
          >
              <v-btn
                class="boutonCart"
                icon
                color="#ffdf00"
                :href="src">
                 <b-icon icon="cart4" aria-hidden="true"></b-icon>
              </v-btn>
            </v-badge>
        </v-app-bar>
      </v-card>
      <router-view/>
    </div>

    <div
      id="bigScreen">
      <v-card>
        <v-toolbar
          color="#8aa469"
          dark
          elevate-on-scroll
        >
          <img
          :src="require('@/assets/LogoDDCWhite.png')"
          alt="logo"
          class="logo">

          <v-tabs
            v-model="drawer"
            centered
            grow
          >
            <v-tab> <router-link to="/">Accueil</router-link> </v-tab>
            <v-tab> <router-link to="/produits">Produits</router-link> </v-tab>
            <v-tab> <router-link to="/about">A propos</router-link> </v-tab>
          </v-tabs>
              <v-btn
                class="boutonCart"
                icon
                color="#ffdf00"
                :href="src">
                 <b-icon icon="cart4" aria-hidden="true"></b-icon>
              </v-btn>
        </v-toolbar>
      </v-card>
      <router-view/>
    </div>

    <v-card>
      <v-footer
        color="#FFFFFF">
        <v-card
          flat
          tile
          dark
          width="100%"
          color="#8aa469"
        >
          <v-card-text>
            <v-btn
              icon
              @click="overlay = !overlay"
            >
              <v-icon size="24px">
                mdi-email
              </v-icon>
            </v-btn>
            <v-overlay
              :z-index="0"
              :value="overlay"
            >
              <v-card
              elevation="5"
              class="message">
                <v-col cols="12">
                  <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                  >
                  
                    <v-text-field
                      v-model="nom"
                      :rules="regleNom"
                      label="Nom"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="prenom"
                      :rules="reglePrenom"
                      label="Prenom"
                      required
                    ></v-text-field>

                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="E-mail"
                      required
                    ></v-text-field>

                    <v-select
                      v-model="select"
                      :categories="categories"
                      :rules="[v => !!v || 'La catégorie est requise']"
                      label="Catégorie"
                      required
                    ></v-select>

                    <v-textarea
                      name="input"
                      label="Message"
                    ></v-textarea>

                    <v-btn
                      :disabled="!valid"
                      color="#72cc50"
                      class="bouton"
                      @click="validate"
                    >
                      Envoyer
                    </v-btn>
                    <v-btn
                      class="bouton"
                      color="#949494"
                      @click="overlay = false"
                      outlined
                    >
                      Fermer
                    </v-btn>
                  </v-form>
                </v-col>
              </v-card>
            </v-overlay>
          </v-card-text>
          <v-card-text class="white--text pt-0">
           Swiss made with ❤️
          </v-card-text>

          <v-divider></v-divider>
            <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>Domaine du Cèdre</strong> - 078 682 88 90
          </v-card-text>
        </v-card>
      </v-footer>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      drawer: false,
      overlay: false,
      valid: true,
      src: '/cart',
      nom: '',
      regleNom: [
        v => !!v || 'Le nom est requis',
      ],
      prenom: '',
      reglePrenom: [
        v => !!v || 'Le prénom est requis',
      ],
      email: '',
      emailRules: [
        v => !!v || 'Votre e-mail est requis',
        v => /.+@.+\..+/.test(v) || 'Votre e-mail doit être valide',
      ],
      select: null,
      categories: [
        'Question',
        'Réclamation',
        'Collaboration',
      ],
    }
  },
    methods: {
    validate () {
      this.$refs.form.validate()
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #93bf85;
  justify-content: space-around;

  a {
    font-weight: bold;
    color: white;
    text-decoration: none;

    &.router-link-exact-active {
      color: #ffdf00;
    }
  }
}

@media (min-width: 560px) {
  #smallScreen {
    display: none;
  }

  .message {
    width: 50vw;
  }
}

@media (max-width: 560px) {
  #bigScreen {
    display: none;
  }

    .message {
    width: 90vw;
  }
}

.logo {
  width: 5em;
  margin: 1em;
}

.bouton {
  margin: 1em;
}

.boutonCart {
  margin: 0.5em;
}
</style>
