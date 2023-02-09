let anterior = '';
let próximo = '';
let url = `https://rickandmortyapi.com/api/character`;
const div = document.getElementById('informacao')
document.getElementById("proxima").style.display = 'none';
document.getElementById("anterior").style.display = 'none';  

async function procuraPersonagem(url){
    const rick = await ( await fetch(url)).json()
   
    const div = document.createElement('div');
    div.id = 'informacao';
   
   for(const key in rick.results){
       
       const status = rick.results[key].name
       const baseStatus = rick.results[key].status
       const image = rick.results[key].image;
       
       const p = document.createElement('p');
       const img = document.createElement("img");
       
       img.src = image;
       img.style.width = "60px";
       
       p.innerHTML=`${status} : ${baseStatus}`;
       
       div.appendChild(p);
       div.appendChild(img);
       document.body.appendChild(div);
       }
      

   anterior =rick.info.prev
   proximo =rick.info.next
   resultPage();
}

const button = document.getElementById('btn');
 button.addEventListener("click", () =>{
    
    procuraPersonagem(url)

 })

 const nextPage = () => {
    let div2 = document.getElementById("informacao");
    
    document.body.removeChild(div2);
    
    procuraPersonagem(proximo);
    
}
const prevPage = () => {
    let div2 = document.getElementById("informacao");
    
    document.body.removeChild(div2);
    
    procuraPersonagem(anterior);
    
}

 const resultPage = () => {     
    document.getElementById("anterior").style.display = 'block';
    document.getElementById("proxima").style.display = 'block';
    if (proximo == null) {
        document.getElementById("proxima").style.display = 'none';     
    }
    if (anterior == null) {        
        document.getElementById("anterior").style.display = 'none';
    }
}