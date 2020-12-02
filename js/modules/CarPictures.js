export default {
    name: "CarPictures",

    props: ["car"],

    // data needs to be a function inside a component
    data: function() {
        return {
            myName: this.car.name,
            myImage: this.car.img,
        }
    },

    template: 
    `<li @click="logClicked">
        <img :src="'images/' + car.img" :alt='car.name + " image"'>
        <p>{{ car.name }}</p>    </li>`,

    created: function () {
        console.log(`created ${this.car.name}'s menu picture`);
    },

    methods: {
        logClicked(event) {
            debugger;
            console.log(`fired from inside ${this.car.name}'s component!`);
            let thisObject = event.target;
            console.log(thisObject);
        }
    }
}