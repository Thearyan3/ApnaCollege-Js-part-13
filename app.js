// Axios - It is a library which is used to send HTTP request. It also uses fetch() internally but it is a better and compact way to send an HTTP request.
//Why is there a need to use Axios when we already have fetch() method? 
// It is because when we used fetch(), it sends the response in a readable stream and not in the direct json form. And because of that, we first had to parse that data into the json format. But inside Axios, the response is directly in the json format and we don't have to parse the data first. So, it is a better way to access our data directly. 

let url = "https://catfact.ninja/fact";

async function getfacts() {
    try{
        let res = await axios.get(url);
        console.log(res.data);
    }catch(e){
        console.log("error -", e);
    }
}