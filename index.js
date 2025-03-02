import { length_conversion_factors } from "./Conversion_Categories/length.js";




const conversion_category_selector = document.getElementById("conversion_category_selector");

const input_unit_selector = document.getElementById("input_unit_selector");
const output_unit_selector = document.getElementById("output_unit_selector");

const input_box = document.getElementById("input_box");
const output_box = document.getElementById("output_box");



// Select the number if clicked on the input box
input_box.addEventListener("click", () => { input_box.select(); });
output_box.addEventListener("click", () => { output_box.select(); });

// Update the input values from both sides
input_box.addEventListener("input", () => { update_input(false); });
output_box.addEventListener("input", () => { update_input(true); });



function update_input(reversed=false) {
    const input_value = input_box.value;

    const input_unit = input_unit_selector.value;
    const output_unit = output_unit_selector.value;

    const conversion_factor = length_conversion_factors[input_unit][output_unit];

    output_box.value = input_value * conversion_factor;
}
