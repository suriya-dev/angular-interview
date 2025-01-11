
// promise example code 
function returnPromise(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let x = 9;
            if(x ){
                resolve("suriya");
                resolve("1");

            }else{
                reject(false);
            }
        },2000)
    })
}


returnPromise().then((res)=>{
    res
})

async function fetchData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const data = await response.json();
      console.log("Post:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
//   fetchData();



