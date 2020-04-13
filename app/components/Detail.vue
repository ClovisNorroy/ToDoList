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
      <Switch :checked="item.done" @checkedChange="updateDone" v-model="item.done"/>
      <StackLayout v-if="item.done">
        <Button
          class="sort"
          text="Supprimer"
          @tap="deleteToDo"
          fontSize="20"
          width="200"
        />
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script>
import Home from "./Home";
import List from "./List";
export default {
  props: {item: Object},
  name: "Detail",
  data() {
    return {
      itemDone : null
    };
  },
  components: {
    Home
  },
  methods: {
    onBack(event) {
      this.$navigateBack(Home);
    },
    updateDone(event){
      console.log(this.item.id, this.itemDone === true ? 1 : 0);
      this.$store.dispatch("updateDone", {id: this.item.id, done: this.item.done === true ? 1 : 0});
    },
    deleteToDo(){
      this.$store.dispatch("deleteToDo", this.item.id);
      this.$navigateTo(List);
    },
    created(){
      this.itemDone = this.item.done === 0;
    }
  },
};
</script>
<style lang="scss">
.menu {
  background-color: #1b262c;
}
</style>
