import Vue from "nativescript-vue";
import Signin from "./components/Signin";

new Vue({
    template: `
        <Frame>
            <Signin />
        </Frame>`,

    components: {
        Signin
    }
}).$start();
