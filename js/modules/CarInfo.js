export default {
    name: "CarInfo",

    props: ["car"],

    // data needs to be a function inside a component
    data: function() {
        return {
            myName: this.car.name,
          //  myRole: this.car.role,
          //  program: "IDP"
        }
    },

    template: 
    `<li @click="logClicked">
        <img :src="'images/' + car.img" :alt='car.name + " image"'>
        <p>Car Name: {{ car.name }}</p>

        <a href="" class="remove-car">Show {{ car.name }}'s info</a>                 
        <a href="" class="remove-car">Remove {{ car.name }}</a>
    </li>`,

    created: function () {
        console.log(`created ${this.car.name}'s card`);
    },

    methods: {
        logClicked() {
            console.log(`fired from inside ${this.car.name}'s component!`);
        }
    }
}