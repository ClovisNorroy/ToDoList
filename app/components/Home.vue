<template>
  <Page>
    <ActionBar title="ToDoList" class="menu">
      <StackLayout orientation="horizontal">
        <Label text="To Do List" fontSize="24" verticalAlignment="center" />
      </StackLayout>
    </ActionBar>
    <List />
  </Page>
</template>

<script>
import List from "./List";
export default {
  components: {
    List
  }
};
</script>

<style scoped lang="scss">
.menu {
  background-color: #1b262c;
}
</style>
