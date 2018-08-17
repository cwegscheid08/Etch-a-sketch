//STILL TO DO

//MOVE BUTTON TO CENTER, REFORMAT THE LOOK OF THE BUTTON
//DESIGN THE RANDOM COLOR SIMULATOR, INPUT IT AS A SEPERATE MODE WITH BUTTON
//IMPLIMENT 10% OPACITY INCREASE ON EACH PASS OVER
//FORMAT LOOK OF PAGE, POSSIBLY CLASSIC ETCH-A-SCETCH, OR MODERN APPLE DESIGN
//MAYBE BLURRING THE EDGES OF THE DIV SQUARES WILL GIVE IT A PENCIL LOOK
//YOU COULD MAKE IT LOOK LIKE A PIECE OF PAPER OR A PAD OF PAPER AND YOU ARE DRAWING ON IT
//DROP DOWN TO PICK SIZE??? OR A PERMANENT TEXT BOX
//MAKE USER INPUT RESPONSIVE

var grid;
var btn = document.querySelector('button');

//BUTTON IS TRANSFERING VALUE IN, BUT BOARD IS NOT STAYING LOADED WITHOUT BOTTOM FUNCTION CALL SET

btn.addEventListener('click', ()=>{
    //grid = prompt("How big ya lookin? 1-64");
    //location.reload();
    createDivs(grid, grid);
}
);

function createDivs(row, columns) {
    rows = createDivs.arguments[0];
    columns = createDivs.arguments[1];
    var container = document.querySelector("#container");
    container.classList.add("border");

    // MIGHT NEED TO BE REFORMATTED

    //POSSIBLY FIGURE INTO SINGLE FUNCTION TO CALL ON

    //MAKE THE BUTTON START RUN() WHICH WILL BUILD THE 
    //BOARD BASED ON THE SPECS OF A PROMPT/TEXTBOX.

    for (x = 0; x < +columns; x++) {
        const top = document.createElement("div");
        container.appendChild(top);

        for (i = 0; i <= +rows; i++) {
            const box = document.createElement("div");
            box.classList.add("rows", "box");
            

            box.addEventListener('mouseover', ()=>{
                //box.classList.add("hover");

                //box.style.color
                var v = "";
                let a = randomColor();

                function randomColor() {
                    let a = getNum();

                    

                    let red = v.slice(0, 3);
                    let green = v.slice(3, 6);
                    let blue = v.slice(6, 9);
                    console.log(red);
                    console.log(green);
                    console.log(blue);
                
                    red = parseInt(red);
                    blue = parseInt(blue);
                    green = parseInt(green);
                                        

                    box.getAttribute('style', 'background-color: rgb('+red+', '+green+', '+blue+'))');

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
            )

            /* function clr() {
                    var num = getNum();
                    var string = "Hello";
                    return setColor();
                    //var clr = setColor(string);

                    function getNum(num) {
                        num = Math.floor(Math.random() * 10);
                        return num;
                    }

                    function setColor() {
                        var clr = document.createElement('p');
                        clr.textContent = string;
                        clr.setAttribute("style", "color: green");
                        return clr;

                    }



                }*/

            btn.addEventListener('click', ()=>{
                box.classList.remove("hover");
            }
            );

            top.appendChild(box);

            top.classList.add("columns", "box");
        }

    }
}
createDivs(64, 64);
//module.exports = createDivs;
