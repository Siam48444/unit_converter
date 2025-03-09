import { length_conversion_factors } from "./Conversion_Categories/length.js";
import { area_conversion_factors } from "./Conversion_Categories/area.js";
import { mass_conversion_factors } from "./Conversion_Categories/mass.js";
import { frequency_conversion_factors } from "./Conversion_Categories/frequency.js";
import { speed_conversion_factors } from "./Conversion_Categories/speed.js";
import { plane_angle_conversion_factors } from "./Conversion_Categories/plane_angle.js";




const conversion_category_selector = document.getElementById("conversion_category_selector");
const units_selector_section = document.getElementsByClassName("units_selector_section");

var input_unit_selector = document.querySelector("[data-input_unit_selector]");
var output_unit_selector = document.querySelector("[data-output_unit_selector]");

const input_box = document.getElementById("input_box");
const output_box = document.getElementById("output_box");

const formula_text = document.getElementById("formula_text");

const clear_button = document.getElementById("clear_button");


// Unit conversion object for all the categories
const conversion_object = {
    length: length_conversion_factors,
    area: area_conversion_factors,
    mass: mass_conversion_factors,
    frequency: frequency_conversion_factors,
    speed: speed_conversion_factors,
    plane_angle: plane_angle_conversion_factors,
}



// Select the number if clicked on the input box
input_box.addEventListener("click", () => { input_box.select(); });
output_box.addEventListener("click", () => { output_box.select(); });


// Update the input values from both sides
input_box.addEventListener("input", () => { update_input(false); });
output_box.addEventListener("input", () => { update_input(true); });


// Update the input values if the selection changes
input_unit_selector.addEventListener("change", () => { update_input(false); });
output_unit_selector.addEventListener("change", () => { update_input(false); });


// Reset the inputs by clicking the clear button
clear_button.addEventListener("click", clear_inputs);



// Change the conversion category 
conversion_category_selector.addEventListener("change", () => { 
   // Hide all unit sections and show the relevant one
    for (let unit_section of units_selector_section) {
        if (unit_section.getAttribute("data-category") === conversion_category_selector.value) {
            unit_section.classList.add("active_category");

            // Update the unit selectors to the ones inside the active section
            input_unit_selector = unit_section.querySelector("[data-input_unit_selector]");
            output_unit_selector = unit_section.querySelector("[data-output_unit_selector]");

            // Update the input values if the selection changes
            input_unit_selector.addEventListener("change", () => { update_input(false); });
            output_unit_selector.addEventListener("change", () => { update_input(false); }); 
        }
        else {
            unit_section.classList.remove("active_category");
        }
    }

    // Update the input
    update_input(false);
});



// Update the user input
function update_input(is_reversed = false) {
    // Get the necessary values
    const { input_value, input_unit, output_unit } = get_conversion_values(is_reversed);

    // Get the conversion factor from the unit conversion table
    const desired_conversion_object = conversion_object[conversion_category_selector.value];
    const conversion_factor = desired_conversion_object[input_unit][output_unit];

    // Convert the value using the conversion factor
    const covnerted_value = input_value * conversion_factor;

    // Update the opposite field with the converted value
    if (input_value) {
        if (is_reversed) {
            input_box.value = covnerted_value;
        }
        else {
            output_box.value = covnerted_value;
        }
    }

    // Update the formula incstruction
    if (formula_text) {
        update_formula(conversion_factor);
    }
}



// Returns the appropriate input value and unit based on the conversion direction.
function get_conversion_values(is_reversed) {
    if (is_reversed) {
        return {
            input_value: output_box.value, 
            input_unit: output_unit_selector.value, 
            output_unit: input_unit_selector.value,
        };
    }
    else {
        return {
            input_value: input_box.value, 
            input_unit: input_unit_selector.value, 
            output_unit: output_unit_selector.value,
        };
    }
}



// Clear the inputs by clicking the clear button
function clear_inputs() {
    // Clear the input and output values
    input_box.value = ""; 
    output_box.value = ""; 
    
    // Add input output placeholders
    input_box.placeholder = "Input";
    output_box.placeholder = "Output";

    // Clear the formula text
    formula_text.innerText = "Input a value to see the conversion formula"
};



// Update the formula incstruction
function update_formula(factor) {
    const category = conversion_category_selector.value.replace("_", " ");

    if (factor === 1) {
        formula_text.innerText = `Both unit values are the same`;
    }
    else if (factor > 1) {
        formula_text.innerText = `Multiply the ${category} value by ${factor}`;
    }
    else {
        formula_text.innerText = `Divide the ${category} value by ${1 / factor}`;
    }
}