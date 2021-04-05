for(let i = 0; i < 9; i++){
    document.getElementById("game").innerHTML+=`<div class="block">${""}</div>`;
}
let hod = 0;
let winKrest = 0;
let winKrug = 0;
const krestOrNol = prompt("Введите за что играет первый игрок (крестики или нолики)", "крестики");
if (krestOrNol == "нолики" || krestOrNol == "нолик"){
    hod = 1;
}
document.getElementById("game").addEventListener("click", function(e) {
    if(e.target.className == "block"){
        if(e.target.innerHTML == ""){
            if(hod % 2 === 0){
                e.target.innerHTML = `<span class="krest">+</span>`;
            } else {
                e.target.innerHTML = `<span class="krug"></span>`;
            }  
        }
        hod++;
        checkWinner();
    }
})
function checkWinner(){
    const allBlock = document.getElementsByClassName("block");
    if(hod < 10){
        if(allBlock[0].innerHTML == `<span class="krest">+</span>` && allBlock[1].innerHTML == `<span class="krest">+</span>` && allBlock[2].innerHTML == `<span class="krest">+</span>`) {
            document.getElementById("game").classList.add("game_win");
            alert("Win X");
            winKrest++;
            document.getElementById("numberWinsKrest").innerHTML=winKrest;
        }
        if(allBlock[3].innerHTML == `<span class="krest">+</span>` && allBlock[4].innerHTML == `<span class="krest">+</span>` && allBlock[5].innerHTML == `<span class="krest">+</span>`) {
            document.getElementById("game").classList.add("game_win");
            alert("Win X");
            winKrest++;
            document.getElementById("numberWinsKrest").innerHTML=winKrest;
        }
        if(allBlock[6].innerHTML == `<span class="krest">+</span>` && allBlock[7].innerHTML == `<span class="krest">+</span>` && allBlock[8].innerHTML == `<span class="krest">+</span>`) {
            document.getElementById("game").classList.add("game_win");
            alert("Win X");
            winKrest++;
            document.getElementById("numberWinsKrest").innerHTML=winKrest;
        }
        if(allBlock[0].innerHTML == `<span class="krest">+</span>` && allBlock[3].innerHTML == `<span class="krest">+</span>` && allBlock[6].innerHTML == `<span class="krest">+</span>`) {
            document.getElementById("game").classList.add("game_win");
            alert("Win X");
            winKrest++;
            document.getElementById("numberWinsKrest").innerHTML=winKrest;
        }
        if(allBlock[1].innerHTML == `<span class="krest">+</span>` && allBlock[4].innerHTML == `<span class="krest">+</span>` && allBlock[7].innerHTML == `<span class="krest">+</span>`) {
            document.getElementById("game").classList.add("game_win");
            alert("Win X");
            winKrest++;
            document.getElementById("numberWinsKrest").innerHTML=winKrest;
        } 
        if(allBlock[2].innerHTML == `<span class="krest">+</span>` && allBlock[5].innerHTML == `<span class="krest">+</span>` && allBlock[8].innerHTML == `<span class="krest">+</span>`) {
            document.getElementById("game").classList.add("game_win");
            alert("Win X");
            winKrest++;
            document.getElementById("numberWinsKrest").innerHTML=winKrest;
        }  
        if(allBlock[0].innerHTML == `<span class="krest">+</span>` && allBlock[4].innerHTML == `<span class="krest">+</span>` && allBlock[8].innerHTML == `<span class="krest">+</span>`) {
            document.getElementById("game").classList.add("game_win");
            alert("Win X");
            winKrest++;
            document.getElementById("numberWinsKrest").innerHTML=winKrest;
        }
        if(allBlock[2].innerHTML == `<span class="krest">+</span>` && allBlock[4].innerHTML == `<span class="krest">+</span>` && allBlock[6].innerHTML == `<span class="krest">+</span>`) {
            document.getElementById("game").classList.add("game_win");
            alert("Win X"); 
            winKrest++;
            document.getElementById("numberWinsKrest").innerHTML=winKrest;
        }
        if(allBlock[0].innerHTML == `<span class="krug"></span>` && allBlock[1].innerHTML == `<span class="krug"></span>` && allBlock[2].innerHTML == `<span class="krug"></span>`) {
            document.getElementById("game").classList.add("game_win");
            alert("Win O");
            winKrug++;
            document.getElementById("numberWinsKrug").innerHTML=winKrug;
        }
        if(allBlock[3].innerHTML == `<span class="krug"></span>` && allBlock[4].innerHTML == `<span class="krug"></span>` && allBlock[5].innerHTML == `<span class="krug"></span>`) {
            document.getElementById("game").classList.add("game_win");
            alert("Win O");
            winKrug++;
            document.getElementById("numberWinsKrug").innerHTML=winKrug;
        }
        if(allBlock[6].innerHTML == `<span class="krug"></span>` && allBlock[7].innerHTML == `<span class="krug"></span>` && allBlock[8].innerHTML == `<span class="krug"></span>`) {
            document.getElementById("game").classList.add("game_win");
            alert("Win O");
            winKrug++;
            document.getElementById("numberWinsKrug").innerHTML=winKrug;
        }
        if(allBlock[0].innerHTML == `<span class="krug"></span>` && allBlock[3].innerHTML == `<span class="krug"></span>` && allBlock[6].innerHTML == `<span class="krug"></span>`) {
            document.getElementById("game").classList.add("game_win");
            alert("Win O");
            winKrug++;
            document.getElementById("numberWinsKrug").innerHTML=winKrug;
        }
        if(allBlock[1].innerHTML == `<span class="krug"></span>` && allBlock[4].innerHTML == `<span class="krug"></span>` && allBlock[7].innerHTML == `<span class="krug"></span>`) {
            document.getElementById("game").classList.add("game_win");
            alert("Win O");
            winKrug++;
            document.getElementById("numberWinsKrug").innerHTML=winKrug;
        }
        if(allBlock[2].innerHTML == `<span class="krug"></span>` && allBlock[5].innerHTML == `<span class="krug"></span>` && allBlock[8].innerHTML == `<span class="krug"></span>`) {
            document.getElementById("game").classList.add("game_win");
            alert("Win O");
            winKrug++;
            document.getElementById("numberWinsKrug").innerHTML=winKrug;
        }
        if(allBlock[0].innerHTML == `<span class="krug"></span>` && allBlock[4].innerHTML == `<span class="krug"></span>` && allBlock[8].innerHTML == `<span class="krug"></span>`) {
            document.getElementById("game").classList.add("game_win");
            alert("Win O");
            winKrug++;
            document.getElementById("numberWinsKrug").innerHTML=winKrug;
        }
        if(allBlock[2].innerHTML == `<span class="krug"></span>` && allBlock[4].innerHTML == `<span class="krug"></span>` && allBlock[6].innerHTML == `<span class="krug"></span>`) {
            document.getElementById("game").classList.add("game_win");
            alert("Win O");
            winKrug++;
            document.getElementById("numberWinsKrug").innerHTML=winKrug;
        }
    } else {
        alert("Ничья!");
        document.getElementById("game").classList.add("game_win");
    }
}

document.getElementById("restart").addEventListener("click", function() {
    document.querySelectorAll(".block").forEach(e => {
        e.innerHTML= "";
    })
    document.getElementById("game").classList.remove("game_win");
    if (krestOrNol == "нолики" || krestOrNol == "нолик"){
        hod = 1;
    } else {
        hod = 0;
    }
});