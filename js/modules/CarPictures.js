export default {
    name: "CarPics",

    props: ["pic"],

    // data needs to be a function inside a component
    data: function() {
        return {
            myName: this.pic.name,
            myImage: this.pic.img,
        }
    },

    template: 
    `<li @click="logClicked">
        <img :src="'images/' + pic.img">
        <p>{{ pic.name }}</p>
    </li>`,

    created: function () {
        console.log(`created ${this.pic.name}'s picture`);
    },

    methods: {
        logClicked(event) {
            debugger;
            console.log(`fired from inside ${this.pic.name}'s component!`);
            console.log(event.target);
            let thisObject = event.target;
            let thisParent = thisObject.parentElement;
            console.log(thisParent);
        }
    }
}