$(document).ready(function () {

    $('.carousel').carousel();
});

var sum = 0;
var firstSum = 0;
var mul = 0;
var finalSum = 0;
$(document).on("change", ".cal-val", function() {

    // $(".cal-val").each(function() {
    //     sum += +$(this).val();
    // });

    var firstSum = parseFloat($("#PASSAGEM").val());
    var secondSum = parseFloat($("#TAXI").val());
    var thirdSum = parseFloat($("#TAXA").val());

    if (isNaN(firstSum)){
        firstSum = 0;
    }

    if (isNaN(secondSum)) {
        secondSum = 0;
    }

    if (isNaN(thirdSum)){
        thirdSum = 0;
    }

    sum = firstSum + secondSum + thirdSum;

    console.log(sum);
    $("#total-cal-1").val(sum);
});

$(document).on("change", ".cal-val2", function() {
    $(".cal-val2").each(function() {

        if($(this).val().length) {


            var firstVal = parseFloat($("#LOCACAO").val());
            var secondVal = parseFloat($("#COMBUSTIVEL").val());
            var thirdVal = parseFloat($("#DIARIAS").val());
            var fourthVal = parseFloat($("#PEDAGIO").val());

            if (isNaN(firstVal)){
                firstVal = 0;
            }

            if (isNaN(secondVal)) {
                secondVal = 0;
            }

            if (isNaN(thirdVal)){
                thirdVal = 1;
            }

            if (isNaN(fourthVal)){
                fourthVal = 0;
            }

            firstSum = firstVal * thirdVal;
            mul = firstSum + secondVal;
            finalSum = mul + fourthVal;

        }
    });
    
    console.log(finalSum);
    $("#total-cal-2").val(finalSum);

    var totalSum = finalSum - sum;

    $(".cal-result .result .calculation-total").html(totalSum.toFixed(2));

    if (totalSum == Math.floor(totalSum)) {

        $(".cal-result .result .post-decimal").addClass("show");

        $(".cal-result .result .post-decimal").removeClass("hide");

    } else {

        $(".cal-result .result .post-decimal").addClass("hide");

    }

});

$(function(){

    $("#firstSelect").change(function(){
        var status = this.value;

        $("#secondSelect option").each(function() {
            $(this).removeClass("active");
            $("."+status).addClass('active');
        });

     });

     $("#secondSelect").change(function(){
        //alert($(this).children('option:selected').data('min'));
        var dataMin = $(this).children('option:selected').data('min');
        //alert($(this).children('option:selected').data('max'));
        var dataMax = $(this).children('option:selected').data('max');


        $(".price1-wrapper .price1").html(dataMax);
         $(".price2-wrapper .price2").html(dataMin);
     });
   
   });

// $('.cal-val').keyup(function(event) {
//
//     // skip for arrow keys
//     if(event.which >= 37 && event.which <= 40){
//         event.preventDefault();
//     }
//
//     $(this).val(function(index, value) {
//         value = value.replace(/,/g,'');
//         return numberWithCommas(value);
//     });
// });

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}
