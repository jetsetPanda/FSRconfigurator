$(document).ready(function () {

    let priceTally = 0;
    let customerOrder = [];

    // Set Base Prices 
    const clampPrice = 100;
    const inTablePrice = 150;
    const underTablePrice = 140;
    const DualInTablePrice = 280;

    const resetPrices = () => {
        priceTally = 0;
        console.log(`run resetPrices() > Current priceTally: ${priceTally}`);
    }

    const resetCustomerOrder = () => {
        customerOrder = [];
        console.log(`run resetCustomerOrder > current customerOrder: ${customerOrder[0]}`);
    }

    // const createACButtons = (numOfAC) => {
    // }

    const resetDivs = () => {
        $("#pickSlots").empty();
        $("#pickProduct").empty();
    }

    const clampOnImgs = {
        "Two": ["./images/Clamp-On/SYM-CL-2AC-1CA-1SS-ABB/SYM-CL-2AC-1CA-1SS-ABB-empty_allwhite.png", "./images/Clamp-On/SYM-CL-2AC-1CA-1VGA-2SS-CCC/SYM-CL-2AC-1CA-1VGA-2SS-CCC_allwhite.png", "./images/Clamp-On/SYM-CL-2AC-1CA-1XLR-2SS-CCC/SYM-CL-2AC-1CA-1XLR-2SS-CCC_allwhite.png", "./images/Clamp-On/SYM-CL-2AC-1CA-2SS-CCC/SYM-CL-2AC-1CA-2SS-CCC_allwhite.png", "./images/Clamp-On/SYM-CL-2AC-2CA-1SS-CCC/SYM-CL-2AC-2CA-1SS-CCC_allwhite.png", "./images/Clamp-On/SYM-CL-2AC-2CA-1VGA-2SS-CCC/SYM-CL-2AC-2CA-1VGA-2SS-CCC_allwhite.png", "./images/Clamp-On/SYM-CL-2AC-2CA-1XLR-2SS-CCC/SYM-CL-2AC-2CA-1XLR-2SS-CCC_allwhite.png", "./images/Clamp-On/SYM-CL-2AC-2CA-2SS-CCC/SYM-CL-2AC-2CA-2SS-CCC_allwhite.png" ]
        ,
        "Three": [ "./images/Clamp-On/SYM-CL-3AC-1CA-1SS-CCC/SYM-CL-3AC-1CA-1SS-CCC_allwhite.png", "./images/Clamp-On/SYM-CL-3AC-1CA-1VGA-2SS-CCC/SYM-CL-3AC-1CA-1VGA-2SS-CCC_allwhite.png", "./images/Clamp-On/SYM-CL-3AC-1CA-2SS-CCC/SYM-CL-3AC-1CA-2SS-CCC_allwhite.png", "./images/Clamp-On/SYM-CL-3AC-2CA-1SS-CCC/SYM-CL-3AC-2CA-1SS-CCC_allwhite.png", "./images/Clamp-On/SYM-CL-3AC-2CA-2SS-CCC/SYM-CL-3AC-2CA-2SS-CCC_allwhite.png", "./images/Clamp-On/SYM-CL-3AC-1CA-1XLR-2SS-CCC/SYM-CL-3AC-1CA-1XLR-2SS-CCC_allwhite.png" ]
        ,
        "Four": [ "./images/Clamp-On/SYM-CL-4AC-1CA-1SS-CCC/SYM-CL-4AC-1CA-1SS-CCC_allwhite.png", "./images/Clamp-On/SYM-CL-4AC-1CA-2SS-CCC/SYM-CL-4AC-1CA-2SS-CCC_allwhite.png", "./images/Clamp-On/SYM-CL-4AC-1SS-CCC/SYM-CL-4AC-1SS-CCC_allwhite.png", "./images/Clamp-On/SYM-CL-4AC-1VGA-2SS-CCC/SYM-CL-4AC-1VGA-2SS-CCC_allwhite.png", "./images/Clamp-On/SYM-CL-4AC-1XLR-2SS-CCC/SYM-CL-4AC-1XLR-2SS-CCC_allwhite.png" ]
        ,
        "Five": [ "./images/Clamp-On/SYM-CL-5AC-1SS-CCC/SYM-CL-5AC-1SS-CCC_allwhite.png", "./images/Clamp-On/SYM-CL-5AC-2CA-1SS-CCC/SYM-CL-5AC-2CA-1SS-CCC_allwhite.png", "./images/Clamp-On/SYM-CL-5AC-2SS-CCC/SYM-CL-5AC-2SS-CCC_allwhite.png" ]
    };



    const displayShit = (numSlots) => {
        let imglinks = '';
        switch (numSlots) {
            case "Two":
                var boxHeader = $("<h4 class='fontone'>");
                boxHeader.html("Clamp-On 2-AC");
                $("#pickProduct").append(boxHeader);

                // FX: FOR REFERENCE ONLY
                // for (var links in clampOnImgs.Two) {
                //     imglinks = links;
                //     console.log(imglinks);
                //     let img = $("<img>");
                //     img.attr("src", imglinks);
                //     $("#pickProduct").append(img);
                //     // imglinks += clampOnImgs.Two[links];
                // };

                for (var i = 0; i < clampOnImgs.Two.length; i++) {
                    var btn = $("<a>");
                    var img = $("<img>");
                    img.addClass("imgCard");
                    img.attr("alt", "2-AC");
                    btn.attr("href", "#");
                    btn.attr("value", clampOnImgs.Two[i]);
                    img.attr("src", clampOnImgs.Two[i]);
                    img.attr("style", "width: 50%");
                    btn.append(img);
                    $("#pickProduct").append(btn);
                }
                break;

            case "Three":
                var boxHeader = $("<h4>");
                boxHeader.html("Clamp-On 3-AC");
                $("#pickProduct").append(boxHeader);

                for (var i = 0; i < clampOnImgs.Three.length; i++) {
                    var btn = $("<a>");
                    var img = $("<img>");
                    img.addClass("imgCard");
                    img.attr("alt", "2-AC");
                    btn.attr("href", "#");
                    btn.attr("value", clampOnImgs.Three[i]);
                    img.attr("src", clampOnImgs.Three[i]);
                    img.attr("style", "width: 50%");
                    btn.append(img);
                    $("#pickProduct").append(btn);
                }
                break;

            case "Four":
                var boxHeader = $("<h4>");
                boxHeader.html("Clamp-On 4-AC");
                $("#pickProduct").append(boxHeader);

                for (var i = 0; i < clampOnImgs.Four.length; i++) {
                    var btn = $("<a>");
                    var img = $("<img>");
                    img.addClass("imgCard");
                    img.attr("alt", "2-AC");
                    btn.attr("href", "#");
                    btn.attr("value", clampOnImgs.Four[i]);
                    img.attr("src", clampOnImgs.Four[i]);
                    img.attr("style", "width: 50%");
                    btn.append(img);
                    $("#pickProduct").append(btn);
                }
                break;
                break;

            case "Five":
                var boxHeader = $("<h4>");
                boxHeader.html("Clamp-On 5-AC");
                $("#pickProduct").append(boxHeader);

                for (var i = 0; i < clampOnImgs.Five.length; i++) {
                    var btn = $("<a>");
                    var img = $("<img>");
                    img.addClass("imgCard");
                    img.attr("alt", "2-AC");
                    btn.attr("href", "#");
                    btn.attr("value", clampOnImgs.Five[i]);
                    img.attr("src", clampOnImgs.Five[i]);
                    img.attr("style", "width: 50%");
                    btn.append(img);
                    $("#pickProduct").append(btn);
                }
                break;
                break;
            }
}
    


    // reset button in modal:
    $("#resetBtn").on("click", function() {
        console.log("Customer Hit Reset Button! Reset Functions should appear below:");
        resetPrices();
        resetCustomerOrder();
        resetDivs();
    })

    $("#chooseClampOn").on("click", function() {
        // resets and init
        resetDivs();
        resetPrices();
        resetCustomerOrder();
        priceTally += clampPrice;
        customerOrder.push('Clamp-On');
        console.log(`test init Clamp-On cost: $${priceTally}`);
        console.log(`test init customerOrder is: ${customerOrder[0]}`);

        // display AC selections on modal screen
        const selectAC = "<div class='pickAC btn btn-lg ml-2 btn-success' data-slot='Two'>2-AC</div><div class='pickAC btn btn-lg ml-2 btn-success' data-slot='Three'>3-AC</div><div class='pickAC btn btn-lg ml-2 btn-success'  data-slot='Four'>4-AC</div><div class='pickAC btn btn-lg ml-2 btn-success'  data-slot='Five'>5-AC</div>";
        $('#pickSlots').append(selectAC);

        // display fullscreen modal with carousel functionality
        $('#displayModal').modal('show');

        // listener for next carousel screen
        $(".pickAC").on("click", function() {
            let numACslots = $(this).data("slot");
            console.log(`Number of Slots Selected: ${numACslots}`);

            displayShit(numACslots);

            // flip to next carousel with these choices    
            $('.carousel').carousel(1);
        
        });



    });
    
    $("#chooseInTable").on("click", function() {
        resetPrices();
        resetCustomerOrder();
        priceTally += inTablePrice;
        console.log(`init inTable cost: $${priceTally}`);

        $('#displayModal').modal('show'); 
    });

    $("#chooseUnderTable").on("click", function() {
        resetPrices();
        resetCustomerOrder();
        priceTally += underTablePrice;
        console.log(`init underTable cost: $${priceTally}`);

        $('#displayModal').modal('show'); 
    });

    $("#chooseDualInTable").on("click", function() {
        resetPrices();
        resetCustomerOrder();
        priceTally += DualInTablePrice;
        console.log(`init DualInTable cost: $${priceTally}`);

        $('#displayModal').modal('show'); 
    });



});



// const displayShit = (numSlots) => {
        
//     //below code copied from old js (ugh!):
//     $.ajax({
//         url: "./test.json",
//         datatype: "JSON",
//         type: "GET",
//         cache: false
//     }).then(function (res) {
//         console.log("it worked!");
//         $("#pickProduct").empty();

//         switch (numSlots) {
//             case "Two":
//                 var boxHeader = $("<h4>");
//                 boxHeader.html("Clamp-On 2-AC");
//                 $("#pickProduct").append(boxHeader);

//                 for (var i = 0; i < res.ClampOn.Two.Blank.length; i++) {
//                     var btn = $("<button>");
//                     var img = $("<img>");

//                     btn.addClass("sampleBox");
//                     img.addClass("imgCard");
//                     img.attr("alt", "2-AC");
//                     btn.attr("value", res.ClampOn.Two.Blank[i]);
//                     img.attr("src", res.ClampOn.Two.Blank[i]);

//                     btn.append(img);
//                     $("#pickProduct").append(btn);
//                 }
//                 break;

//             case "Three":
//                 var boxHeader = $("<h4>");
//                 boxHeader.html("Clamp-On 3-AC");
//                 $("#pickProduct").append(boxHeader);

//                 for (var i = 0; i < res.ClampOn.Three.Blank.length; i++) {
//                     var btn = $("<button>");
//                     var img = $("<img>");

//                     btn.addClass("sampleBox");
//                     img.addClass("imgCard");
//                     img.attr("alt", "3-AC");
//                     btn.attr("value", res.ClampOn.Three.Blank[i]);
//                     img.attr("src", res.ClampOn.Three.Blank[i]);

//                     btn.append(img);
//                     $("#pickProduct").append(btn);
//                 }
//                 break;

//             case "Four":
//                 var boxHeader = $("<h4>");
//                 boxHeader.html("Clamp-On 4-AC");
//                 $("#pickProduct").append(boxHeader);

//                 for (var i = 0; i < res.ClampOn.Four.Blank.length; i++) {
//                     var btn = $("<button>");
//                     var img = $("<img>");

//                     btn.addClass("sampleBox");
//                     img.addClass("imgCard");
//                     img.attr("alt", "4-AC");
//                     btn.attr("value", res.ClampOn.Four.Blank[i]);
//                     img.attr("src", res.ClampOn.Four.Blank[i]);

//                     btn.append(img);
//                     $("#pickProduct").append(btn);
//                 }
//                 break;

//             case "Five":
//                 var boxHeader = $("<h4>");
//                 boxHeader.html("Clamp-On 5-AC");
//                 $("#pickProduct").append(boxHeader);

//                 for (var i = 0; i < res.ClampOn.Five.Blank.length; i++) {
//                     var btn = $("<button>");
//                     var img = $("<img>");

//                     btn.addClass("sampleBox");
//                     img.addClass("imgCard");
//                     img.attr("alt", "5-AC");
//                     btn.attr("value", res.ClampOn.Five.Blank[i]);
//                     img.attr("src", res.ClampOn.Five.Blank[i]);

//                     btn.append(img);
//                     $("#pickProduct").append(btn);
//                 }
//                 break;
//             }
// })
// }