import { fetchData } from "./modules/DataMiner.js";
import CarInfo from "./modules/CarInfo.js";

(() => {
    let modelPics = document.querySelectorAll(".model_pic");
    let carContainer = document.querySelector(".container");
    let thisCar = 0;
    let vue_info = new Vue({
        // link Vue to an element in our HTML
        //el: "#app",

        data: {
            isShowing: false,
            cars: [],
            carPics: [],
        },
        
     //   watch: {
      //      thisCar: function() {
       //         let loadedCars = document.querySelectorAll(".mini");
      //          let newCar = loadedCars[thisCar];
      //          newCar.style.display = "block";
      //      }
      //  }, 
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
            if (loadedCars[thisCar].style.display = "none") {
                loadedCars[thisCar].style.display = "block";
            }
        },

        methods: {
            clickedCar(event) {
                debugger;
                console.log("a car has been clicked!");
                //thisCar = event.target.id;
            // console.log(thisCar);
            }
        },

        components: {
            "car-info": CarInfo
        }
    })
    .$mount("#app"); // also connects Vue to your wrapper in HTML

    modelPics.forEach(pic => pic.addEventListener("click", function (){
        clickedCar(event.target);
    }));

    function clickedCar(target) {
        debugger;
        let loadedCars = document.querySelectorAll(".mini");
        console.log("clicked a car!");
        console.log(carContainer);
        for(let i=0; i < loadedCars.length; i++) {
            loadedCars[i].style.display = "none";
            if(i == target.id) {
                    loadedCars[i].style.display = "block";
                    return;
                }
            }
        }

})();