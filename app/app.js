import Vue from "nativescript-vue";
import Signin from "./components/Signin";
import List from "~/components/List";
import Home from "~/components/Home";
import Vuex from 'vuex';

const SqlLite = require("nativescript-sqlite");

Vue.use(Vuex);
//this.use(Vuex);

const store = new Vuex.Store({
    state: {
        database: null,
        data: [],
        token: null,
        uuid: null
    },
    mutations:{
        init(state, data){
            state.database = data.database;
            console.log("DATABASE INITIATED");
        },
        load(state, data){
            state.data = [];
            for(let i = 0; i < data.data.length; i++){
                state.data.push({
                    content: data.data[i][0],
                    done: data.data[i][1],
                    type: data.data[i][2],
                    media_url: data.data[i][3],
                    _id: data.data[i][4],
                    uuid: data.data[i][5],
                    updated: data.data[i][6],
                    // firstname: data.data[i][0],
                    // lastname: data.data[i][1]
                });
            }
        },
        loadTest(state, data){
            state.data = [];
            for(let i = 0; i < data.data.length; i++){
                state.data.push({
                    id: data.data[i][0],
                    content: data.data[i][1],
                    done: data.data[i][2],
                    // firstname: data.data[i][0],
                    // lastname: data.data[i][1]
                });
            }
        },
        save(state, toDo){
            state.data.push({
                content: toDo.data.content,
                done: toDo.data.done,
                type: toDo.data.type,
                media_url: toDo.data.media_url,
                _id: toDo.data._id,
                uuid: toDo.data.uuid,
                updated: toDo.data.updated
                // firstname: data.data.firstname,
                // lastname: data.data.lastname
            });
        },
        saveTest(state, toDo){
            state.data.push({
                id: toDo.data.id,
                content: toDo.data.content,
                done: toDo.data.done
                // firstname: data.data.firstname,
                // lastname: data.data.lastname
            });
        },
        reset(state){
            state.data = [];
        }
    },
    actions: {
        init(context){
            (new SqlLite("todo.db")).then(db => {
                db.execSQL("CREATE TABLE IF NOT EXISTS todos(" +
                    "uuid INTEGER PRIMARY KEY, " +
                    "content TEXT NOT NULL, " +
                    "done INTEGER, " +
                    "type TEXT, " +
                    "media_url TEXT, " +
                    "_id TEXT, " +
                    "updated TEXT)").then(id => {
                        context.commit("init", {database: db});
                }, error => {
                        console.log("CREATE TABLE ERROR", error);
                });
            }, error =>{
                console.log("OPEN DB ERROR", error);
            });
        },
        initTest(context){
            (new SqlLite("todo.db")).then(db => {
                db.execSQL("CREATE TABLE IF NOT EXISTS todotest(" +
                    "id INTEGER PRIMARY KEY AUTOINCREMENT, " +
                    "content TEXT NOT NULL, " +
                    "done INTEGER)").then(id => {
                    context.commit("init", {database: db});
                }).catch( error => {
                    console.log("CREATE TABLE ERROR", error);
                });
            }, error =>{
                console.log("OPEN DB ERROR", error);
            });
        },
        insert(context, data) {
            context.state.database.execSQL("INSERT INTO todos (uuid, content, done, type, media_url, _id, updated) VALUES (?, ?, ?, ?, ?, ?, ?)",
                [data.uuid, data.content, done, data.type, data.media_url, data._id, data.updated]).then(id => {
                context.commit("save", { data: data });
            }, error => {
                console.log("INSERT ERROR", error);
            });
        },
        insertTest(context, data) {
            context.state.database.execSQL("INSERT INTO todotest (content, done) VALUES (?, ?)",
                [data.content, 1]).then(id => {
                context.commit("saveTest", { data: data });
                console.log(data.value, "\ninserted with id : ", id)
            }, error => {
                console.log("INSERT ERROR", error);
            });
        },
        query(context) { //https://www.nativescript.org/blog/data-management-with-sqlite-and-vuex-in-a-nativescript-vue-app
            context.state.database.all("SELECT id, content, done, type, media_url, _id, updated FROM toDos", []).then(result => {
                context.commit("load", { data: result });
            }, error => {
                console.log("SELECT ERROR", error);
            });
        },
        queryTest(context) { //https://www.nativescript.org/blog/data-management-with-sqlite-and-vuex-in-a-nativescript-vue-app
            context.state.database.all("SELECT id, content, done FROM todotest", []).then(result => {
                context.commit("loadTest", { data: result });
            }, error => {
                console.log("SELECT ERROR", error);
            });
        },
        sync(context, data){
            context.state.database.execSQL("DELETE FROM toDos").then(()=>{
                axios({

                })
            })
        }
    }
});

Vue.prototype.$store = store;
//module.exports = store;
export default store;
store.dispatch("initTest");


new Vue({
    template: `
        <Frame>
            <List></List>
        </Frame>`,

    components: {
        Signin,
        List,
        Home
    },
}).$start();
