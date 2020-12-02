export default {
    name: "CarInfo",

    props: ["car"],

    // data needs to be a function inside a component
    data: function() {
        return {
            myName: this.car.name,
            myPic: this.car.img,
            myDesc: this.car.description,
            myVideo: this.car.video,
            myPrice: this.car.price
        }
    },

    template: 
    `<li @click="logClicked">
        <video width="100%" height="80%" controls>
            <source :src="'videos/' + car.video">
        </video>
        <img :src="'images/' + car.img">
        <h3>{{ car.name }}</h3>
        <p>{{ car.description }}</p>
        <p>Starting at $ {{ car.price }}!</p>
    </li>`,

    created: function () {
        console.log(`created ${this.car.name}'s card`);
    },

    methods: {
        logClicked(event) {
            debugger;
            console.log(`fired from inside ${this.car.name}'s component!`);
            console.log(event.target);
            let thisObject = event.target;
            let thisParent = thisObject.parentElement;
            console.log(thisParent);
        }
    }
}