app.factory('convertService', function() {

    var test= "do you see my service???";
    console.log(test);

    wordRate = function (x) {
        var wordRateString = "";
        if (x<=10 && x>=8) {wordRateString = "Awesome"}
        else if (x>=7 && x<8) {wordRateString = "Good"}
        else if (x>=6 && x<7) {wordRateString = "Mediocre"}
        else if (x>=5 && x<6) {wordRateString = "Sucks"}
        else if (x>=0 && x<5) {wordRateString = "Terrible"}
        else {console.log("Error in conditions")}
        return wordRateString;

       
    }

    return {wordRate : wordRate}
});