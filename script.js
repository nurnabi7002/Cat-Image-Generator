// Async Await and Fetch API
// Cat Image Generator

let url = "https://api.thecatapi.com/v1/images/search";

async function getImg() {

     try {
           // Fetching Data and Converting To JSON
    let response = await fetch(url);
    let data = await response.json();

    // Logging The Data
    console.log(data);

    // Getting The Image Tag
    let img = document.getElementById("img");

    // Displaying The Image by Getting url
    let imgData = data[0].url;

    img.src = imgData;
    } catch (error) {
        console.log(error);

    };

}


// Get Clicked For Run The Get Image Function
let btn = document.getElementById("btn");
    btn.addEventListener("click", ()=>{
        getImg();
    });


    