const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');

function btns(x, y, a) {
    x.addEventListener('click', function () {
        x.style.cssText = `
    width: 121px;
    height: 34px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #000;
    color: #FFF;
    margin: 0 0 0 -15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;`

        y.style.background = "#fff"
        y.style.color = "#939393"
        a.style.background = "#fff"
        a.style.color = "#939393"
    })
}

btns(btn1, btn2, btn3)
btns(btn2, btn1, btn3);
btns(btn3, btn2, btn1)
btns(btn4, btn5, btn6)
btns(btn5, btn4, btn6);
btns(btn6, btn5, btn4)

document.getElementById("copy-img").addEventListener("click", function () {
    document.getElementById("copy").style.display = "block"
    function display() {
        document.getElementById("copy").style.display = "none"
    }
    setTimeout(display, 200)
})