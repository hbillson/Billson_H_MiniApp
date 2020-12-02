import { fetchData } from "./modules/DataMiner.js";
import CarInfo from "./modules/CarInfo.js";

(() => {
    let dataContainer = document.querySelector("#container");

    let vue_vm = new Vue({
        // link Vue to an element in our HTML
        //el: "#app",

        data: {
            isShowing: false,
            cars: [],
            currentCarData: {}
        },

        // this is the "mounted" lifecycle hook. Vue is done creating itself, and has attached itself to the "app" div on the page
        mounted: function() {
            console.log("Vue is mounted, trying a fetch for the initial data");
            
            fetchData("./includes/index.php")
                .then(data => {
                    data.forEach(car => this.cars.push(car));
                })
                .catch(err => console.error(err));
        },

        // run a method when we change our view (update the DOM with Vue)
        updated: function() {
            console.log('Vue just updated the DOM');
            let loadedCars = document.querySelectorAll(".mini");
            if (loadedCars[0].style.display = "none") {
                console.log("empty :(");
                loadedCars[0].style.display = "block";
            }
        },

        methods: {
           logClicked() {
                console.log("clicked on a list item");
            }

          //  showCarData(target) {
                // remove this pr0f from the pr0fessors array
         //       console.log('clicked to view car data', target, target.name);
                // the "this" keyword inside a vue instance REFERS to the Vue instance itself by default

                // toggle the property between true and false using a ternary statement
          //      this.showCarDesc = this.showCarDesc ? false : true;

                // make the selected pr0f's data visible
        //        this.currentCarData = target;
        //    },            

        //    removeCar(target) {
        //        debugger;
                // remove this pr0f from the pr0fessors array
          //      console.log('clicked to remove car', target, target.name);
                // the "this" keyword inside a vue instance REFERS to the Vue instance itself by default

                // make the selected pr0f's data visible
                // this.pr0fessors.splice(this.pr0fessors.indexOf(target), 1);
          //      this.$delete(this.cars, target);
          //  },

        },

        components: {
            "car-info": CarInfo
        }

    
    })
    .$mount("#app"); // also connects Vue to your wrapper in HTML
})();