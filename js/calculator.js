function calculation() {
    var Equation = algebra.Equation;

    var width1 = document.getElementById("width1").value / 100;
    var width2 = document.getElementById("width2").value / 100;

    var targetSize1 = document.getElementById("targetSize1").value;
    var targetSize2 = document.getElementById("targetSize2").value;

    var vw1 = algebra.parse(width1 + "* x -" + targetSize1);
    var vw2 = algebra.parse(width2 + "* x -" + targetSize2);

    var eq = new Equation(vw1, vw2);

    // console.log(eq.toString());

    var vwAnswer = eq.solveFor("x");
    var pxAnswer = targetSize1 - width1 * vwAnswer;

    // console.log("x = " + vwAnswer.valueOf().toFixed(2));
    // console.log("y = " + pxAnswer.toFixed(2));

    document.getElementById("answer").innerHTML = "font-size: calc(" + vwAnswer.valueOf().toFixed(2) + "vw" + " + " + pxAnswer.toFixed(2) + "px);"

    document.getElementById("example").style.fontSize = "calc(" + vwAnswer.valueOf().toFixed(2) + "vw" + " + " + pxAnswer.toFixed(2) + "px)";
}