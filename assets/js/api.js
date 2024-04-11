class products {

constructor() {
this.uriJson = "http://localhost/Ejercicio1/assets/doc/products.json";
this.getDataJson();
this.getData();

}


getDataJson() {
    fetch(this.uriJson)
    .then(response => response.json())
    .then(data => {
    this.getData(data);
});
}

getData (data){
  console.log(data);

}


}

