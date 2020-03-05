import Vue from "nativescript-vue";
import Signin from "./components/Signin";
import axios from "axios";

new Vue({
    template: `
        <Frame>
            <Signin />
        </Frame>`,

    components: {
        Signin
    }
}).$start();
