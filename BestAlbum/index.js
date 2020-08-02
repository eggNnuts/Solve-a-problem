function solution(genres, plays) {
  const mergeGenres = genres.reduce(function(acc,current,index){
    if(typeof acc[current]==='undefined'){
      acc[current] = {
        total : 0,
        values:{}
      }
    }
    acc[current].total += plays[index]
    acc[current].values[index] =plays[index];
    return acc;
  },{});

  return   Object.keys(mergeGenres).sort((genre1, genre2) => {
        console.log(genre1)
        return mergeGenres[genre2].total - mergeGenres[genre1].total;
  }).reduce((acc,genre)=>{
    var mergeValues = mergeGenres[genre].values
    var topN = Object.keys(mergeGenres[genre].values).sort((a,b)=>{   return mergeValues[b]-mergeValues[a]});

    acc.push(parseInt(topN[0]));

    if(topN.length > 1){
      acc.push(parseInt(topN[1]));
    }
  
    return acc;

  },[])

}
