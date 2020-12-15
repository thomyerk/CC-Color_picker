let red = document.getElementById("red")
let green = document.getElementById("green")
let blue = document.getElementById("blue")
let hexValue = document.getElementById("hexa")
let binaryRed = document.getElementById("binaryRed")
let binaryGreen = document.getElementById("binaryGreen")
let binaryBlue = document.getElementById("binaryBlue")
let rgbValues = document.getElementsByClassName("rgb-picker")
let imageContainer = document.getElementById("imageContainer")

window.onload = () => {
    Array.from(rgbValues).forEach(picker => {
        let input = picker.children[1]
        input.addEventListener("input", colorChange)
    });
}

let actualColor = {
    red: 0,
    green: 0,
    blue: 0,
    transparency: 100
}

function colorChange(ev){
    if(ev.target.validity.valid == true){
        actualColor[ev.target.id] = ev.target.value
        imageContainer.style.backgroundColor = `rgba(${actualColor.red},${actualColor.green},${actualColor.blue},${actualColor.transparency/100})`
        hexValue.innerHTML = rgbToOtherSystem(actualColor.red,hexa).padStart(2,'0') + rgbToOtherSystem (actualColor.green,hexa).padStart(2,'0') + rgbToOtherSystem(actualColor.blue,hexa).padStart(2,'0')
        binaryRed.innerHTML = rgbToOtherSystem(actualColor.red,binary)
        binaryGreen.innerHTML = rgbToOtherSystem(actualColor.green,binary)
        binaryBlue.innerHTML = rgbToOtherSystem(actualColor.blue,binary)
    }else{
        alert("Not a valid value!")
    }
}


let hexa = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
let binary = [0,1]

function rgbToOtherSystem(value,system){
    let final = []
    while(value > system.length-1){
        let digit = Math.floor(value/system.length);
        var remainder = value%system.length;
        if(system.length == 16){
            final.push(system[digit])
            value = remainder
        }else{
            final.unshift(remainder)
            value = digit
        }
    }
    if(system.length == 16){
        final.push(system[value])
    }else{
        final.unshift(system[value])
    }
    final = final.join("")
    return final
}
