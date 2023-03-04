const counter_button = document.querySelector(".counter_button");
const counter_label = document.querySelector("#counter_label");
const clear_button = document.querySelector(".clear");

counter_button.onclick = () => {
    counter_value = Number(counter_label.innerHTML);
    counter_label.innerHTML = (counter_value + 1).toString();
}

clear_button.onclick = () => {
    counter_label.innerHTML = "0";    
}
