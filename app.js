'use strict' ;

var myCarForm = document.getElementById('carForm');
var arrayOfCar = [];
var parent = document.getElementById('formContent');
var arrayOfImg = ['bmw.png' , 'chevrolet.png' , 'hyundai.png' , 'kia.png' , 'lexus.png' , 'tesla.png' , 'toyota.png'  ]

function Car(carName ,  categoryModel , modelYear , url) {
 this.carName = carName;
 this.categoryModel=categoryModel;
 this.modelYear = modelYear;
 this.url = '/img' + arrayOfImg

 arrayOfCar.push(this)
 
}

/// function event and event listener

function submitHandler(event) {
    var carName = event.target.carName.value;
    var categoryModel = event.target.model.value;
    var modelYear = event.target.modelYear.value;
    console.log(modelYear)
var newConstructor = new Car(carName ,  categoryModel , modelYear);
newConstructor.dataRender();
localStorage.setItem('car' , JSON.stringify(arrayOfCar));

}

Car.prototype.dataRender = function() {
    var firstRow = document.createElement('tr');

  
    var myCarNAme = document.createElement('td');
    myCarNAme.textContent =  'Car Name:' +  this.carName;

    var  modelYear = document.createElement('td');
    modelYear.textContent ='Model Year:' +this.modelYear;
    console.log(this.modelYear)

    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove'

    firstRow.appendChild(myCarNAme);
    firstRow.appendChild(modelYear);
    firstRow.appendChild(removeButton);

    parent.appendChild(firstRow)  

}

function checkLocal() {
    if (localStorage.getItem('car')) {
        var newObject = JSON.parse (localStorage.getItem('car'));
        for (var index = 0; index < newObject.length; index++) {
            var finalObject = new Car ( newObject[index].carName , newObject[index].modelYear  )
           finalObject.dataRender();
            
        }
        
    }
}
// function  removeHandler() {
//     window.localStorage.removeItem();
// }


//  removeButton.addEventListener('click' , removeHandler )



myCarForm.addEventListener('submit' , submitHandler);
checkLocal();