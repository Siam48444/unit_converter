import { length_conversion_factors } from "./Conversion_Categories/length.js";
import { area_conversion_factors } from "./Conversion_Categories/area.js";




const conversion_category_selector = document.getElementById("conversion_category_selector");
const units_selector_section = document.getElementsByClassName("units_selector_section");

var input_unit_selector = document.querySelector("[data-input_unit_selector]");
var output_unit_selector = document.querySelector("[data-output_unit_selector]");

const input_box = document.getElementById("input_box");
const output_box = document.getElementById("output_box");


// Unit conversion object for all the categories
const conversion_object = {
    length: length_conversion_factors,
    area: area_conversion_factors,
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



// Get the unit values
function get_conversion_values(reversed) {
    return reversed
        ? { input_value: output_box.value, 
            input_unit: output_unit_selector.value, 
            output_unit: input_unit_selector.value 
        }
        : { input_value: input_box.value, 
            input_unit: input_unit_selector.value, 
            output_unit: output_unit_selector.value 
        };
}



// Update the user input
function update_input(reversed = false) {
    // Get the necessary values
    const { input_value, input_unit, output_unit } = get_conversion_values(reversed);


    // Get the conversion factor from the unit conversion table
    const conversion_factor = conversion_object[conversion_category_selector.value][input_unit][output_unit];

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