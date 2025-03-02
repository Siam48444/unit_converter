import { length_conversion_factors } from "./Conversion_Categories/length.js";
import { area_conversion_factors } from "./Conversion_Categories/area.js";




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

// Update the input values if the unit selection changes
input_unit_selector.addEventListener("change", () => { update_input(false); });
output_unit_selector.addEventListener("change", () => { update_input(false); });



function update_input(reversed = false) {
    let input_value, input_unit, output_unit, conversion_factor;

    // Determine which input field is being updated
    if (reversed) {
        // Get value from output box
        input_value = output_box.value; 

        // Swap input & output units
        input_unit = output_unit_selector.value;
        output_unit = input_unit_selector.value;
    }
    else {
        // Get value from input box
        input_value = input_box.value; 

        // Swap input & output units
        input_unit = input_unit_selector.value;
        output_unit = output_unit_selector.value;
    }


    // Get the conversion factor from the unit conversion table
    if (conversion_category_selector.value === "length") {
        conversion_factor = length_conversion_factors[input_unit][output_unit];
    }
    if (conversion_category_selector.value === "area") {
        conversion_factor = area_conversion_factors[input_unit][output_unit];
    }

    // Convert the value using the conversion factor
    const covnerted_value = input_value * conversion_factor;


    // Update the opposite field with the converted value
    if (reversed) {
        input_box.value = covnerted_value;
    }
    else {
        output_box.value = covnerted_value;
    }
}
