<template>
  <Page>
    <FlexboxLayout class="page">
      <StackLayout class="form">
        <Label class="header" text="Se connecter" />

        <StackLayout class="input-field" marginBottom="25">
          <TextField
            class="input"
            hint="Email"
            keyboardType="email"
            autocorrect="false"
            autocapitalizationType="none"
            returnKeyType="next"
            @returnPress="focusPassword"
            fontSize="18"
          />
          <StackLayout class="hr-light" />
        </StackLayout>

        <StackLayout class="input-field" marginBottom="25">
          <TextField
            ref="password"
            class="input"
            hint="Password"
            secure="true"
            :returnKeyType="isLoggingIn ? 'done' : 'next'"
            @returnPress="focusConfirmPassword"
            fontSize="18"
          />
          <StackLayout class="hr-light" />
        </StackLayout>
        <Button
          text="Se connecter"
          @tap="submit"
          class="btn btn-primary m-t-20"
        />
        <Button
          text="Créer un compte"
          @tap="goToSignup"
          class="btn btn-primary m-t-20"
        />
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>

<script>
import Signup from "./Signup";
export default {
  components: {
    Signup
  },
  name: "Signin",
  methods: {
    goToSignup() {
      this.$navigateTo(Signup);
    }
  }
};
</script>

<style>
.page {
  align-items: center;
}

.form {
  margin-left: 30;
  margin-right: 30;
  flex-grow: 1;
  vertical-align: middle;
}

.header {
  horizontal-align: center;
  font-size: 25;
  font-weight: 600;
  margin-bottom: 70;
  text-align: center;
  color: #d51a1a;
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
