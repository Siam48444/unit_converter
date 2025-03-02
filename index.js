import { length_conversion_factors } from "./Conversion_Categories/length.js";




const conversion_category_selector = document.getElementById("conversion_category_selector");

const input_unit_selector = document.getElementById("input_unit_selector");
const output_unit_selector = document.getElementById("output_unit_selector");

const input_box = document.getElementById("input_box");
const output_box = document.getElementById("output_box");



input_box.addEventListener("input", () => { update_input(); });
output_box.addEventListener("input", () => { update_input(); });



function update_input() {
    const input_unit = input_unit_selector.value;
    const output_unit = output_unit_selector.value;
    const input_value = input_box.value;

    const length_factor = length_conversion_factors[input_unit][output_unit];
    output_box.value = input_value * length_factor;
}