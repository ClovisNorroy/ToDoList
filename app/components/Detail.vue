<template>
  <Page>
    <ActionBar title="Détails" class="menu" fontSize="24">
      <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="onBack" />
    </ActionBar>
    <StackLayout>
      <!-- <Switch :checked="item.done" v-model="onChange2"/> -->
      <Label :text="item.content" fontSize="20" />
      <Label :text="item.done"/>
    </StackLayout>
   
  </Page>
</template>

<script>
import Home from "./Home";
export default {
  props: ["item"],
  name: "Detail",
  watch: {
    // onChange2(oldDone, newDone){
    //   console.log("moncul");
    //   this.item.done = this.foo; 
    // }
  },
  data() {
    return {
      foo: false
    }
  },
  components: {
    Home
  },
  methods: {
    onBack(event) {
      this.$navigateBack(Home);
    },
  }
};
</script>
<style lang="scss">
.menu {
  background-color: #1b262c;
}
</style>