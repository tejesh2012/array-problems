let arr=[1,2,3,4,5,5,6];

for(let i=0; i<=arr.length-1; i++){
  console.log(arr[i]);
}



let movies=["Bahubali","KGF","Pushpa","Iron Man","Avengers"];
for(let i=0; i<=movies.length-1; i++){
  if(i==2 || i==4){
    continue;
  }
  console.log(movies[i]);
}

let movie =["Bahubali","KGF","Pushpa","Iron Man","Avengers"];
for(let i=0; i<=movie.length-1; i++){
  if(movie[i]=="kgf" || movie[i]=="pushpa"){
    continue;
  }
  console.log(movie[i]);
}