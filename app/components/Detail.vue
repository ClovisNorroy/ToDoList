<template>
  <Page>
    <ActionBar title="Détails" class="menu" fontSize="24">
      <NavigationButton
        text="Go back"
        android.systemIcon="ic_menu_back"
        @tap="onBack"
      />
    </ActionBar>
    <StackLayout>
      <Label :text="item.content" fontSize="20" />
      <Label fontSize="20">Done: </Label>
      <Switch :checked="item.done" v-model="item.done" />
      <StackLayout v-if="item.done">
        <Button
          class="sort"
          text="Supprimer"
          @tap="deleteTodo"
          fontSize="20"
          width="200"
        />
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script>
import Home from "./Home";
export default {
  props: ["item"],
  name: "Detail",
  data() {
    return {
      foo: false
    };
  },
  components: {
    Home
  },
  methods: {
    onBack(event) {
      this.$navigateBack(Home);
    }
  }
};
</script>
<style lang="scss">
.menu {
  background-color: #1b262c;
}
</style>
