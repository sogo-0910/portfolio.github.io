'use strict'


function All() {
    document.querySelector(".all").style.display = "flex";
    document.querySelector("#nav1").style.backgroundColor = "#101152";
    document.querySelector("#nav1").style.color = "#fff";

    document.querySelector(".website").style.display = "none";
    document.querySelector(".webapuri").style.display = "none";

    document.querySelector(".nav2").style.backgroundColor = "#fff";
    document.querySelector(".nav2").style.color = "#101152";
    document.querySelector(".nav3").style.backgroundColor = "#fff";
    document.querySelector(".nav3").style.color = "#101152";

    return false;
}
function Website() {
    document.querySelector(".website").style.display = "flex";
    document.querySelector(".nav2").style.backgroundColor = "#101152";
    document.querySelector(".nav2").style.color = "#fff";
    document.querySelector(".all").style.display = "none";
    document.querySelector(".webapuri").style.display = "none";

    document.querySelector("#nav1").style.backgroundColor = "#fff";
    document.querySelector("#nav1").style.color = "#101152";
    document.querySelector(".nav3").style.backgroundColor = "#fff";
    document.querySelector(".nav3").style.color = "#101152";

    return false;
}
function Webapuri() {
    document.querySelector(".webapuri").style.display = "flex";
    document.querySelector(".nav3").style.backgroundColor = "#101152";
    document.querySelector(".nav3").style.color = "#fff";
    document.querySelector(".website").style.display = "none";
    document.querySelector(".all").style.display = "none";

    document.querySelector(".nav2").style.backgroundColor = "#fff";
    document.querySelector(".nav2").style.color = "#101152";
    document.querySelector("#nav1").style.backgroundColor = "#fff";
    document.querySelector("#nav1").style.color = "#101152";

    return false;
}

