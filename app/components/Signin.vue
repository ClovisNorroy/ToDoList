<template>
  <Page>
    <FlexboxLayout class="page">
      <StackLayout class="form">
        <Label class="header" text="Se connecter" />
        <Label class="text-error" :text="error" />
        <StackLayout marginBottom="25">
          <TextField
            hint="Email"
            keyboardType="email"
            fontSize="18"
            v-model="mail"
          />
        </StackLayout>

        <StackLayout marginBottom="25">
          <TextField
            ref="password"
            hint="Password"
            fontSize="18"
            secure="true"
            v-model="password"
          />
          <StackLayout />
        </StackLayout>
        <Button text="Se connecter" @tap="submit" />
        <Button text="Créer un compte" @tap="goToSignup" />
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>

<script>
import Signup from "./Signup";
import Home from "./Home";
export default {
  components: {
    Signup,
    Home
  },
  data() {
    return {
      mail: "",
      password: "",
      error: ""
    };
  },
  name: "Signin",
  methods: {
    goToSignup() {
      this.$navigateTo(Signup);
    },
    goToHome() {
      this.$navigateTo(Home);
    },
    submit() {
      axios
        .post({
          url: "https://api.todolist.sherpa.one/users/signin",
          data: {
            username: this.mail,
            password: this.password
          }
        })
        .then(response => {
          this.error = "";
          this.goToHome();
        })
        .catch(error => {
          this.error = error.message;
        });
    }
  }
};
</script>

<style>
.page {
  align-items: center;
}
.text-error {
  font-size: 20px;
  text-align: center;
  color: rgb(255, 0, 51);
  font-weight: bold;
}
.form {
  flex-grow: 1;
  vertical-align: middle;
}

.header {
  font-size: 25;
  margin-bottom: 10%;
  font-weight: 300;
  text-align: center;
  color: #ffffff;
}

.input-field {
  margin-bottom: 25;
}

.input {
  font-size: 18;
}

.input-field .input {
  font-size: 54;
}

.login-label {
  color: #a8a8a8;
  font-size: 16;
}

.sign-up-label {
  margin-bottom: 20;
}

.bold {
  color: #000000;
}
</style>
