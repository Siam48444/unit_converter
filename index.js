import { length_conversion_factors } from "./Conversion_Categories/length.js";




const conversion_category_selector = document.getElementById("conversion_category_selector");

const input_unit_selector = document.getElementById("input_unit_selector");
const output_unit_selector = document.getElementById("output_unit_selector");

const input_box = document.getElementById("input_box");
const output_box = document.getElementById("output_box");




input_box.addEventListener("click", () => { input_box.select(); });
output_box.addEventListener("click", () => { output_box.select(); });

input_box.addEventListener("input", () => { update_input(); });
// output_box.addEventListener("input", () => { update_input(); });



function update_input() {
    

    console.log(output_unit_selector)
}
