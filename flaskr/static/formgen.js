// function getTrueVal(slider){
//     var trueVal = parseInt(slider.value);
//     trueVal = Math.pow(2, trueVal)
//     return trueVal;
// }













var form_item = `
    <div class="fb-radio-group form-group field-closer_or_further">
        <div class="radio-group">
            <div class="radio-inline">
                <input name="closer_or_further" id="closer_or_further-0" required="required" aria-required="true" value="closer" type="radio">
                <label for="closer_or_further-0">closer than</label>
            </div>
            <div class="radio-inline">
                <input name="closer_or_further" id="closer_or_further-1" required="required" aria-required="true" value="further" type="radio">
                <label for="closer_or_further-1">further than</label>
            </div>
        </div>
    </div>
    <div class="slidecontainer">
      <input type="range" min="-3" max="3" value="0" class="slider" id="myRange">
    </div>
    <div class="fb-text form-group field-establishment_type">
        <label for="establishment_type" class="fb-text-label">from a: </label>
        <input type="text" class="form-control" name="establishment_type" maxlength="40" id="establishment_type">
    </div>
`




$(document).ready(function() {
    

    var max_fields      = 10;
    var warning_fields = 5;
    var form_container         = $(".form_container"); 
    var add_button      = $(".add_form_field"); 
    
    var x = 1; 
  //   $(add_button).click(function(e){ 
  //       e.preventDefault();
  //       if(x < max_fields){ 
  //           x++; 
  //           if(warning_fields == x){
  //               alert("Five down, five more available");
  //           }
            
  //           $(form_container).append(form_item); //add input box
  //       }
		// else
		// {
		// alert('No more parameters for now, sorry');
		// }
  //   });

    var val_num = $("#params-count").val();
    val_num = parseInt(val_num);
    
    $(form_container).on("click",".delete", function(e){ 
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
});

function slider_to_miles(slider_input){
    var slidepower = parseInt(slider_input);
    var miles_value = Math.pow(2, slidepower);
    var out_string = miles_value + " mi."
    return out_string;
}
