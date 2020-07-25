let clothes = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]

function solution(clothes) {
   
    return Object.values(clothes.reduce(function(acc,current){
        if (current[1] in acc) {
            acc[current[1]]++
          } else {
            acc[current[1]] = 1
          }
          return acc;
    },{})).reduce(function(acc,current){
        var cal = acc*(current+1);
        return cal;  
    },1)-1;
}

console.log(solution(clothes))