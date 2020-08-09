var progresses=[93,30,55]
var speeds = [1,30,5]
function solution(progresses, speeds) {

  const deployDays = progresses.reduce(function(acc,current,index){
    const deployDay =Math.ceil((100 -current) / speeds[index]); 
    acc.push(deployDay);
    return acc;
  },[]);

  let max = deployDays[0];
  let count = 0 ;
  let answer =[];

  
  for(let i = 0; i < deployDays.length ; i++){
 
      if(max >= deployDays[i]){
           count++;
       }else{
           answer.push(count)
           max = deployDays[i];
           count=1;
       }

       if(i===deployDays.length-1){
          answer.push(count);
       } 
  }
  return answer;

}


solution(progresses,speeds);
 