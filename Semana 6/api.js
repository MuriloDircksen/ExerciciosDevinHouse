
async function idadeMedia(pais, nome){
    const mediaIdade = await ((await  fetch(`https://api.agify.io/?country_id=${pais}&name=${nome}`,{
               method: 'GET',
               headers: new Headers({
                'Content-Type': 'application/json',
               })
            })).json());
    console.log(mediaIdade)
    console.log(mediaIdade.name);
    console.log(mediaIdade.age);
}

idadeMedia("BR", "Murilo");