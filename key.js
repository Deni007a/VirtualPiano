/*document.addEventListener("keydown", function(e) {
    if (e.code === "KeyA") {
        console.log("The 'A' key is pressed.");
        let audioA = new Audio("resurse/A.mp3");
        audioA.play()
    }
    else if (e.code === "KeyS") {
        console.log("The 'S' key is pressed.");
        let audioS = new Audio("resurse/S.mp3");
        audioS.play()
    }
    else if (e.code === "KeyD") {
        console.log("The 'D' key is pressed.");
        let audioD = new Audio("resurse/D.mp3");
        audioD.play()
    }
    else if (e.code === "KeyF") {
        console.log("The 'F' key is pressed.");
        let audioF = new Audio("resurse/F.mp3");
        audioF.play()
    }
    else if (e.code === "KeyG") {
        console.log("The 'G' key is pressed.");
        let audioG = new Audio("resurse/G.mp3");
        audioG.play()
    }
    else if (e.code === "KeyH") {
        console.log("The 'H' key is pressed.");
        let audioH = new Audio("resurse/H.mp3");
        audioH.play()
    }
    else if (e.code === "KeyJ") {
        console.log("The 'J' key is pressed.");
        let audioJ = new Audio("resurse/J.mp3");
        audioJ.play()
    }
    //////////////////////////

    else if (e.code === "KeyW") {
        console.log("The 'W' key is pressed.");
        let audioJ = new Audio("resurse/W.mp3");
        audioJ.play()
    }
    else if (e.code === "KeyE") {
        console.log("The 'E' key is pressed.");
        let audioJ = new Audio("resurse/E.mp3");
        audioJ.play()
    }
    else if (e.code === "KeyT") {
        console.log("The 'T' key is pressed.");
        let audioJ = new Audio("resurse/T.mp3");
        audioJ.play()
    }
    else if (e.code === "KeyY") {
        console.log("The 'Y' key is pressed.");
        let audioJ = new Audio("resurse/Y.mp3");
        audioJ.play()
    }
    else if (e.code === "KeyU") {
        console.log("The 'U' key is pressed.");
        let audioJ = new Audio("resurse/U.mp3");
        audioJ.play()
    }


    else {
        console.log("An unbound key is pressed.")
    }
});
*/
document.addEventListener("keydown", function(event){
    switch (event.key.toUpperCase()){
        case 'A':
        case 'S':
        case 'D':
        case 'F':
        case 'G':
        case 'H':
        case 'J':
        case 'W':
        case 'E':
        case 'T':
        case 'Y':
        case 'U':
            console.log("resurse/"+`${event.key}.mp3`)
            let audio = new Audio("resurse/"+`${event.key}.mp3`);
            audio.play();
            break;
        default:
            console.log('key not supported')
    }
});