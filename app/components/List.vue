<template>
  <StackLayout>
    <FlexboxLayout backgroundColor="#3c495e">
      <Button class="sort" text="Trier" @tap="sortToDo" fontSize="20" width="200" />
      <Button class="sort" text="Ajouter" @tap="addItem" fontSize="20" width="200" />
    </FlexboxLayout>
    <ListView for="item in arrayTodo"  @itemTap="onTap" class="listView">
      <v-template class="itemView">
        <StackLayout >     
          <Label>
            <Span :text="item.content" fontSize="18" :class="colorDone(item.done)"/>
          </Label>
        </StackLayout>
      </v-template>     
    </ListView>
  </StackLayout>
</template>

<script>
import Detail from "./Detail";

export default {
  name: "List",
  components: {
    Detail
  },
  computed: {},
  methods: {
    colorDone(done) {
      return done ? "text-green" : "text-red";
    },
    onTap(event) {
      //console.log(event.index);
      this.$navigateTo(Detail, { props: { item: event.item } });
    },
    sortToDo() {
      this.arrayTodo.sort(function(x, y) {
        return y.done - x.done;
      });
    },
    addItem() {
      const dialogs = require("tns-core-modules/ui/dialogs");
      prompt({
        title: "Ajout d'un item",
        message: "Intitulé de l'item",
        okButtonText: "OK",
        cancelButtonText: "Cancel",
        inputType: dialogs.inputType.text
      }).then(result => {
        this.arrayTodo.unshift({ content: result.text, done: false });
        console.log(`Dialog result: ${result.result}, text: ${result.text}`);
      });
    }
  },
  data() {
    return {
      arrayTodo: [
        {
          content: " Faire la To do List",
          done: true
        },
        {
          content: " Faire du vueJs",
          done: false
        },
        {
          content: " Faire à manger",
          done: false
        },
        {
          content: " Faire du PHP",
          done: false
        },
        {
          content: " Faire un portfolio en anglais",
          done: false
        },
        {
          content: " To do list exemple 1",
          done: false
        },
        {
          content: " To do list exemple 2",
          done: false
        },
        {
          content: " To do list exemple 3",
          done: false
        },
        {
          content: " To do list exemple 4",
          done: false
        },
        {
          content: " To do list exemple 5",
          done: false
        },
        {
          content: " To do list exemple 6",
          done: false
        },
        {
          content: " To do list exemple 7",
          done: false
        },
        {
          content: " To do list exemple 8",
          done: false
        },
        {
          content: " To do list exemple 9",
          done: false
        },
        {
          content: " To do list exemple 10",
          done: false
        },
        {
          content: " To do list exemple 11",
          done: false
        },
        {
          content: " To do list exemple 12",
          done: true
        },
        {
          content: " To do list exemple 53",
          done: true
        },
        {
          content: " FF 15 PLS",
          done: true
        },
        {
          content: " Go next",
          done: true
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.sort {
  background-color: #263859;
}
.listView {
  background-color: #263859;
}
.text-red {
  color: #c9485b;
}
.text-green {
  color: #21bf73;
}
</style>
