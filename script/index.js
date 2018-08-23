//STILL TO DO

//REFORMAT THE LOOK OF THE BUTTON
//IMPLIMENT 10% OPACITY INCREASE ON EACH PASS OVER
//FORMAT LOOK OF PAGE, POSSIBLY CLASSIC ETCH-A-SCETCH, OR MODERN APPLE DESIGN
//MAYBE BLURRING THE EDGES OF THE DIV SQUARES WILL GIVE IT A PENCIL LOOK
//YOU COULD MAKE IT LOOK LIKE A PIECE OF PAPER OR A PAD OF PAPER AND YOU ARE DRAWING ON IT
//DROP DOWN TO PICK SIZE??? OR A PERMANENT TEXT BOX
//MAKE USER INPUT RESPONSIVE

var btn = document.getElementById(button);
var container = document.getElementById('container');
container.classList.add("border");
var toggle = document.querySelectorAll('#toggle');
var rtnOp = 0;

function run(x) {

    var x = run.arguments[0].value;
    let createDivs = function() {

        var num = createDivs.arguments[0];

        let buildGrid = function() {
            num = buildGrid.arguments[0];
            for (x = 0; x < +num; x++) {
                const top = document.createElement("div");
                container.appendChild(top);
                top.classList.add("columns", "box");
                for (i = 0; i <= +num; i++) {
                    const box = document.createElement("div");
                    box.classList.add("rows", "box");
                    top.appendChild(box);

                    box.addEventListener("mouseover", ()=>{

                        let clr = toggle[0];
                        let gry = toggle[1];
                        var color = getColor();

                        if (clr.checked == true) {
                            box.style.backgroundColor = color;
                            box.style.opacity = 1;
                        } else if (gry.checked == true) {
                            box.style.backgroundColor = "black";
                            let op = ((+box.style.opacity) + 0.1);
                            box.style.opacity = op;

                        }
                    }
                    )

                }
            }
        }

        buildGrid(num)
    }

    createDivs(x);

}

function getColor() {
    var v = "";
    var box = document.querySelector(".container");
    return randomColor();

    function randomColor() {
        let a = getNum();
        let red = parseInt(v.slice(0, 3));
        let green = parseInt(v.slice(3, 6));
        let blue = parseInt(v.slice(6, 9));
        let rainbowEffect = "rgb(" + red + ", " + green + ", " + blue + ")";
        //RAINBOW EFFECT LOG
        //console.log(rainbowEffect);
        return rainbowEffect;

    }

    function getNum() {

        for (i = 1; i <= 9; i++) {
            var num = getN(i);
            var b;
            function getN(i) {
                let round = getN.arguments[0];
                b = Math.floor(Math.random() * 10);

                if (b >= 6) {
                    getN(i);
                } else if (b < 3 && round === 1 || b < 3 && round === 4 || b < 3 && round === 7) {
                    return b;
                } else if (b < 6 && +round != 1 && +round != 4 && +round != 7) {
                    return b;
                } else {
                    getN(i);
                }
                return b;
            }
            v += b.toString();
            if (i === 9) {
                return v;
            }
        }
    }
}


