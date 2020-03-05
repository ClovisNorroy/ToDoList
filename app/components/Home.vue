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
import axios from "axios";
export default {
  components: {
    List
  },
  mounted(){
    axios.get("https://api.todolist.sherpa.one/users/"+this.$store.state.user_uuid+"/todos/"+this.$store.state.todo_uuid{
    })
  }
};
</script>

<style scoped lang="scss"></style>
