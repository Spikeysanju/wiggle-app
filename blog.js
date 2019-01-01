function getBreedList(){  

    fetch('https://dog.ceo/api/breeds/list/all')
    .then((res)=> res.json())
    .then((data)=>{
       let result = '<h2>All Breeds</h2>';
       data.forEach(function(breed){
           result += 
           <ul>
               <li>
                   Breeds: ${breed.message}
               </li>
           </ul>;
       });

       document.getElementById('result').innerHTML = result;
    })
    } 