<template>
  <Page>
    <ActionBar title="Todolist" class="menu" fontSize="24">
      <NavigationButton
        text="Go back"
        android.systemIcon="ic_menu_back"
        @tap="goToSignin"
      />
    </ActionBar>
    <FlexboxLayout class="page">
      <StackLayout class="form">
        <Label class="header" text="Créer un compte" />
        <Label class="text-error" :text="error"></Label>
        <StackLayout marginBottom="25">
          <TextField hint="Email" fontSize="18" v-model="mail" />
        </StackLayout>
        <StackLayout marginBottom="25">
          <TextField hint="Nom" fontSize="18" v-model="lastname" />
        </StackLayout>
        <StackLayout marginBottom="25">
          <TextField hint="Prénom" fontSize="18" v-model="firstname" />
        </StackLayout>
<!--        <StackLayout marginBottom="25">-->
<!--          <ListPicker :items="arrayGenre" v-model="genre" selectedIndex="0" />-->
<!--        </StackLayout>-->
        <Button text="Créer son compte" @tap="submit" />
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>

<script>
import axios from "axios";
import Signin from "./Signin";
import * as http from "http";
export default {
  name: "Signup",
  components: {
    Signin
  },
  data() {
    return {
      error: "",
      arrayGenre: ["male", "female"],
      mail: "",
      lastname: "",
      firstname: "",
      genre: 0,
      patternMail: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      patternNom: /[A-Z]+/,
      mailPattern: false,
      lastnamePattern: false,
      firstnamePattern: false,
      isValide: false
    };
  },
  methods: {
    goToSignin() {
      this.$navigateTo(Signin);
    },
    validateForm() {
      this.mailPattern = this.patternMail.test(this.mail);
      this.firstnamePattern = this.patternNom.test(this.firstname);
      this.lastnamePattern = this.patternNom.test(this.lastname);
      if (this.mailPattern && this.lastnamePattern && this.firstnamePattern) {
        this.isValide = true;
        this.error = "";
      } else {
        this.error = "Erreur dans le formulaire";
        this.isValide = false;
      }
    },
    submit() {
      console.log("MAJ3");
      /*
      let headers = new Headers();
      headers.set('Authorization', 'Basic ' + base64.encode(username + ":" + password));
*/

      this.validateForm();
      if (this.isValide) {
        this.genre = this.genre === 0 ? "male" : "female";

        // fetch("https://api.todolist.sherpa.one/users/signup", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   data: JSON.stringify({
        //     firstname: "Toi",
        //     lastname: "dernier nom",
        //     email: "tfdgomoi@email.com",
        //     gender: "male"
        //   })
        // })
        //   .then(response => {
        //     console.log(response);
        //     response.json();
        //   })
        //   .then(json => console.log(json));


        axios({
          method: "POST",
          url: "https://api.todolist.sherpa.one/users/signup",
          //headers: { "Content-Type": "application/json" },
          data: {
            email: this.mail,
            firstname: this.firstname,
            lastname: this.lastname,
            gender: "male"
          }
        }).then(response => {
          console.log(response.data);
        }).catch(error => {
          console.log(error.response.request.response);
        })
      }
    }
  }
}
</script>

<style>
.text-error {
  font-size: 20px;
  text-align: center;
  color: rgb(255, 0, 51);
  font-weight: bold;
}
</style>
