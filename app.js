// Axios - It is a library which is used to send HTTP request. It also uses fetch() internally but it is a better and compact way to send an HTTP request.
//Why is there a need to use Axios when we already have fetch() method? 
// It is because when we used fetch(), it sends the response in a readable stream and not in the direct json form. And because of that, we first had to parse that data into the json format. But inside Axios, the response is directly in the json format and we don't have to parse the data first. So, it is a better way to access our data directly. 

// let url = "https://catfact.ninja/fact";

// async function getfacts() {
//     try{
//         let res = await axios.get(url);
//         console.log(res.data);
//     }catch(e){
//         console.log("error -", e);
//     }
// }

// CODE TO PRINT CATFACTS INSIDE PARAGRAPH TAG THROUGH DOM. Always 
// *** remember that we are using free APIs here, and all these APIs have some callback limits, so don't try to call the APIs too many times or don't run a loop for them because if we do so then our account can be blocked and we will also get some error at last. 


// let h1 = document.querySelector("h1");
// let btn = document.querySelector("button");
// let para = document.getElementById("fact");
// let Img = document.querySelector("img");

// let url = "https://catfact.ninja/fact";

// btn.addEventListener("click", async function () {

//     try{
//         let res = await axios.get(url);
//         para.innerText = res.data.fact;
//         para.style.fontSize = '50px';
//         para.style.color = "red";
//     }catch(e){
//         console.log("error -", e);
//     }

// });


// CODE TO PRINT DOG IMAGES INSIDE IMG TAG THROUGH DOM. 
// *** Always remember that we are using free APIs here, and all these APIs have some callback limits, so don't try to call the APIs too many times or don't run a loop for them because if we do so then our account can be blocked and we will also get some error at last. 


// let url2 = "https://dog.ceo/api/breeds/image/random";

// async function getImage() {
//     try{
//         let res = await axios.get(url2);
//         return res.data.message;
//     }catch(e){
//         console.log("Error -", e);
//         return "NO Image";
//     }
// }

// btn.addEventListener("click", async () => {
//     let Imag = await getImage();
//     Img.src = Imag;
// });

//CODE TO UPDATE QUERY STRINGS
let btn = document.querySelector("button");
let Ulist = document.getElementById("list");
let Inp = document.querySelector('input');

let url = "http://universities.hipolabs.com/search?name=";
// let country = "india";
async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch (e) {
        console.log("Error -", e);
        return [];
    }
}

btn.addEventListener("click", async () => {
    let country = Inp.value;

    let colArr = await getColleges(country);
    show(colArr);
});

Inp.addEventListener("keypress", async (event) => {
    if (event.key == "Enter") {
        let country = Inp.value;

        let colArr = await getColleges(country);
        show(colArr);
    }
});

function show(colArr) {
    Ulist.innerText = "";
    for (col of colArr) {
        let item = document.createElement("li");
        item.innerText = col.name;

        Ulist.append(item);
        Inp.value = "";
    }
}