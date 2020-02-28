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
        <StackLayout class="input-field" marginBottom="25">
          <TextField
            ref="password2"
            class="input"
            hint="Confirm password"
            secure="true"
            :returnKeyType="isLoggingIn ? 'done' : 'next'"
            @returnPress="focusConfirmPassword"
            fontSize="18"
          />
          <StackLayout class="hr-light" />
        </StackLayout>
        <Button
          text="Créer son compte"
          @tap="submit"
          class="btn btn-primary m-t-20"
        />
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>

<script>
import Signin from "./Signin";
export default {
  name: "Signup",
  components: {
    Signin
  },
  methods: {
    goToSignin() {
      this.$navigateTo(Signin);
    }
  }
};
</script>

<style></style>
