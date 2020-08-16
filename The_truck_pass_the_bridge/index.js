const truck_weights =[10,10,10,10,10,10,10,10,10,10]

function solution(bridge_length, weight, truck_weights) {

    let answer = 0;
    let passingTruck = [];
    let stop = false;
    let record = [];
    while (!stop) {
        answer++;
        if (record[0] === answer) {
            record.shift();
            passingTruck.shift();
        }
        let passingSum = passingTruck.reduce((a, b) => a + b, 0) + truck_weights[0];
        if (truck_weights.length > 0 && passingSum <= weight) {
            passingTruck.push(truck_weights.shift());
            record.push(answer + bridge_length);
        }
        if (passingTruck.length === 0) {
            stop = true;
        }
    }
    return answer;
}

solution(100, 100, truck_weights)
