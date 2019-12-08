const korArray = ["", "일", "이", "삼", "사", "오", "육", "칠", "팔", "구"];
const filterArray = ["일십", "일백", "일천"];
const unit = ["", "십", "백", "천"];
const unit2 = ["", "만", "억", "조", "해", "경"];
var inputString = "80,270원";

const toKor = function(v) {
    var toArray = v
        .replace(new RegExp("[^(0-9)]", "gi"), "")
        .split("")
        .reverse();

    var make = toArray.reduce(function(current, value, index, array) {
        var pushText = korArray[value];
        let filterText = "";
        var lastUnit2 = parseInt(array.length / 4, 10);
        if (index !== 0) {
            let division = current.length % 4;

            filterText =
                division === 0
                    ? [[pushText, unit2[current.length / 4]].join(""), " "].join("")
                    : [pushText, unit[division]].join("");

            if (filterText.length === 1) {
                let unit2Judge = parseInt(index / 4, 10);
                if (unit.indexOf(filterText) > -1) {
                    filterText = "";
                } else if (unit2.indexOf(filterText) > -1 && lastUnit2 > unit2Judge) {
                    filterText = "";
                }
            }

            pushText =
                filterArray.indexOf(filterText) > -1
                    ? filterText.split("")[1]
                    : filterText;
        }
        current.push(pushText);
        return current;
    }, []);
    return [make.reverse().join(""), "원"].join("");
};

console.log(toKor(inputString));
