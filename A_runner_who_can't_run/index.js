const participant=["mislav", "stanko", "mislav", "ana"]
const completion =["stanko", "ana", "mislav"]

function solution(participant, completion) {
    var completionObject = makeCompletionObject(completion);

    
    return  participant.reduce(function(acc,current){
            let  completionValue = completionObject[current];
            if(typeof completionValue ==='undefined' || completionValue <1 ){
                acc = current;
            }else{
                completionObject[current] = completionValue-1;
            }

            return acc;
           
           
         
    },"");
}

function makeCompletionObject(completion){
    return completion.reduce(function(acc,current){
        if (current in acc) {
            acc[current]++
          } else {
            acc[current] = 1
          }
          return acc;
    },{});
}

solution(participant,completion)