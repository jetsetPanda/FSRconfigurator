$(document).ready(function () {

    let priceTally = 0;
    let customerOrder = [];

    // Set Base Prices 
    const clampPrice = 100;
    const inTablePrice = 150;
    const underTablePrice = 140;
    const dualInTablePrice = 280;

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

    const dualInTableImgs = {
        "Two": [ "./images/Dual-In-Table/SYM-DIN-2AC-1CA-1VGA-1SS-CCC/SYM-DIN-2AC-1CA-1VGA-1SS-CCC_allwhite.png", "./images/Dual-In-Table/SYM-DIN-2AC-1CA-2SS-CCC/SYM-DIN-2AC-1CA-2SS-CCC_allwhite.png", "./images/Dual-In-Table/SYM-DIN-2AC-1CA-1SS-CCC/SYM-DIN-2AC-1CA-1SS-CCC_allwhite.png", "./images/Dual-In-Table/SYM-DIN-2AC-1SS-CCC/SYM-DIN-2AC-1SS-CCC_allwhite.png", "./images/Dual-In-Table/SYM-DIN-2AC-2CA-1SS-CCC/SYM-DIN-2AC-2CA-1SS-CCC_allwhite.png" ]
        ,
        "Three": [ "./images/Dual-In-Table/SYM-DIN-3AC-1CA-1SS-CCC/SYM-DIN-3AC-1CA-1SS-CCC_allwhite.png", "./images/Dual-In-Table/SYM-DIN-3AC-1CA-2SS-CCC/SYM-DIN-3AC-1CA-2SS-CCC_allwhite.png", "./images/Dual-In-Table/SYM-DIN-3AC-1CA-VGA-1SS-CCC/SYM-DIN-3AC-1CA-VGA-1SS-CCC_allwhite.png", "./images/Dual-In-Table/SYM-DIN-3AC-2CA-1SS-CCC/SYM-DIN-3AC-2CA-1SS-CCC_allwhite.png" ]
        ,
        "Four": [ "./images/Dual-In-Table/SYM-DIN-4AC-1CA-1SS-CCC/SYM-DIN-4AC-1CA-1SS-CCC_allwhite.png" ]
    }

    const underTableImgs = {
        "Two": [ "./images/Under-Table/SYM-UT-2AC-1CA-1SS-CCC/SYM-UT-2AC-1CA-1SS-CCC_allwhite.png", "./images/Under-Table/SYM-UT-2AC-1CA-1VGA-2SS-CCC/SYM-CL-2AC-1CA-1VGA-2SS-CCC_allwhite.png", "./images/Under-Table/SYM-UT-2AC-1CA-1XLR-2SS-CCC/SYM-UT-2AC-1CA-1XLR-2SS-CCC_allwhite.png", "./images/Under-Table/SYM-UT-2AC-1CA-2SS-CCC/SYM-UT-2AC-1CA-2SS-CCC_allwhite.png", "./images/Under-Table/SYM-UT-2AC-2CA-1SS-CCC/SYM-UT-2AC-2CA-1SS-CCC_allwhite.png", "./images/Under-Table/SYM-UT-2AC-2CA-1VGA-2SS-CCC/SYM-UT-2AC-2CA-1VGA-2SS-CCC_allwhite.png", "./images/Under-Table/SYM-UT-2AC-2CA-1XLR-2SS-CCC/SYM-CL-2AC-2CA-1XLR-2SS-CCC_allwhite.png", "./images/Under-Table/SYM-UT-2AC-2CA-2SS-CCC/SYM-UT-2AC-2CA-2SS-CCC_allwhite.png" ]
        ,
        "Three": [ "./images/Under-Table/SYM-UT-3AC-1CA-1SS-CCC/SYM-UT-3AC-1CA-1SS-CCC_allwhite.png", "./images/Under-Table/SYM-UT-3AC-1CA-1VGA-2SS-CCC/SYM-UT-3AC-1CA-1VGA-2SS-CCC_allwhite.png", "./images/Under-Table/SYM-UT-3AC-1CA-1XLR-2SS-CCC/SYM-UT-3AC-1CA-1XLR-2SS-CCC_allwhite.png", "./images/Under-Table/SYM-UT-3AC-1CA-2SS-CCC/SYM-UT-3AC-1CA-2SS-CCC_allwhite.png", "./images/Under-Table/SYM-UT-3AC-2CA-1SS-CCC/SYM-UT-3AC-2CA-1SS-CCC_allwhite.png", "./images/Under-Table/SYM-UT-3AC-2CA-2SS-CCC/SYM-UT-3AC-2CA-2SS-CCC_allwhite.png" ]
        ,
        "Four": [ "./images/Under-Table/SYM-UT-4AC-1CA-1SS-CCC/SYM-UT-4AC-1CA-1SS-CCC_allwhite.png", "./images/Under-Table/SYM-UT-4AC-1CA-2SS-CCC/SYM-UT-4AC-1CA-2SS-CCC_allwhite.png", "./images/Under-Table/SYM-UT-4AC-1SS-CCC/SYM-UT-4AC-1SS-CCC_allwhite.png", "./images/Under-Table/SYM-UT-4AC-1VGA-2SS-CCC/SYM-UT-4AC-1VGA-2SS-CCC_allwhite.png", "./images/Under-Table/SYM-UT-4AC-1XLR-2SS-CCC/SYM-UT-4AC-1XLR-2SS-CCC_allwhite.png" ]
        ,
        "Five": [ "./images/Under-Table/SYM-UT-5AC-1SS-CCC/SYM-UT-5AC-1SS-CCC_allwhite.png", "./images/Under-Table/SYM-UT-5AC-2CA-1SS-CCC/SYM-UT-5AC-2CA-1SS-CCC_allwhite.png", "./images/Under-Table/SYM-UT-5AC-2SS-CCC/SYM-UT-5AC-2SS-CCC_allwhite.png" ]
    }

    const inTableImgs = {
        "Two": [ "./images/In-Table/SYM-IN-2AC-1CA-1VGA-1SS-CCC/SYM-IN-2AC-1CA-1VGA-1SS-CCC_allwhite.png", "./images/In-Table/SYM-IN-2AC-1CA-2SS-CCC/SYM-IN-2AC-1CA-2SS-CCC_allwhite.png", "./images/In-Table/SYM-IN-2AC-1CA-1SS-CCC/SYM-IN-2AC-1CA-1SS-CCC_allwhite.png", "./images/In-Table/SYM-IN-2AC-1SS-CCC/SYM-IN-2AC-1SS-CCC_allwhite.png", "./images/In-Table/SYM-IN-2AC-2CA-1SS-CCC/SYM-IN-2AC-2CA-1SS-CCC_allwhite.png" ]
          ,
        "Three": [ "./images/In-Table/SYM-IN-3AC-1CA-1SS-CCC/SYM-IN-3AC-1CA-1SS-CCC_allwhite.png", "./images/In-Table/SYM-IN-3AC-1CA-2SS-CCC/SYM-IN-3AC-1CA-2SS-CCC_allwhite.png", "./images/In-Table/SYM-IN-3AC-1CA-VGA-1SS-CCC/SYM-IN-3AC-1CA-VGA-1SS-CCC_allwhite.png", "./images/In-Table/SYM-IN-3AC-2CA-1SS-CCC/SYM-IN-3AC-2CA-1SS-CCC_allwhite.png" ]
        ,
        "Four": [ "./images/In-Table/SYM-IN-4AC-1CA-1SS-CCC/SYM-IN-4AC-1CA-1SS-CCC_allwhite.png" ]
      }

    const displayClampOnImgs = (numSlots) => {
        let imglinks = '';
        switch (numSlots) {
            case "Two":
                var boxHeader = $("<h4 class='fontone'>");
                boxHeader.html("Clamp-On 2-AC");
                $("#pickProduct").append(boxHeader);

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
                    img.attr("src", clampOnImgs.Five [i]);
                    img.attr("style", "width: 50%");
                    btn.append(img);
                    $("#pickProduct").append(btn);
                }
                break;
            }
    }
    
    const displayInTable = (numSlots) => {
        switch (numSlots) {
            case "Two":
                var boxHeader = $("<h4 class='fontone'>");
                boxHeader.html("In-Table 2-AC");
                $("#pickProduct").append(boxHeader);

                for (var i = 0; i < inTableImgs.Two.length; i++) {
                    var btn = $("<a>");
                    var img = $("<img>");
                    img.addClass("imgCard");
                    img.attr("alt", "2-AC");
                    btn.attr("href", "#");
                    btn.attr("value", inTableImgs.Two[i]);
                    img.attr("src", inTableImgs.Two[i]);
                    img.attr("style", "width: 50%");
                    btn.append(img);
                    $("#pickProduct").append(btn);
                }
                break;

            case "Three":
                var boxHeader = $("<h4>");
                boxHeader.html("In-Table 3-AC");
                $("#pickProduct").append(boxHeader);

                for (var i = 0; i < inTableImgs.Three.length; i++) {
                    var btn = $("<a>");
                    var img = $("<img>");
                    img.addClass("imgCard");
                    img.attr("alt", "2-AC");
                    btn.attr("href", "#");
                    btn.attr("value", inTableImgs.Three[i]);
                    img.attr("src", inTableImgs.Three[i]);
                    img.attr("style", "width: 50%");
                    btn.append(img);
                    $("#pickProduct").append(btn);
                }
                break;

            case "Four":
                var boxHeader = $("<h4>");
                boxHeader.html("In-Table 4-AC");
                $("#pickProduct").append(boxHeader);

                for (var i = 0; i < inTableImgs.Four.length; i++) {
                    var btn = $("<a>");
                    var img = $("<img>");
                    img.addClass("imgCard");
                    img.attr("alt", "2-AC");
                    btn.attr("href", "#");
                    btn.attr("value", inTableImgs.Four[i]);
                    img.attr("src", inTableImgs.Four[i]);
                    img.attr("style", "width: 50%");
                    btn.append(img);
                    $("#pickProduct").append(btn);
                }
                break;
            }
    }

    const displayUnderTable = (numSlots) => {
        let imglinks = '';
        switch (numSlots) {
            case "Two":
                var boxHeader = $("<h4 class='fontone'>");
                boxHeader.html("Under-Table 2-AC");
                $("#pickProduct").append(boxHeader);

                for (var i = 0; i < underTableImgs.Two.length; i++) {
                    var btn = $("<a>");
                    var img = $("<img>");
                    img.addClass("imgCard");
                    img.attr("alt", "2-AC");
                    btn.attr("href", "#");
                    btn.attr("value", underTableImgs.Two[i]);
                    img.attr("src", underTableImgs.Two[i]);
                    img.attr("style", "width: 50%");
                    btn.append(img);
                    $("#pickProduct").append(btn);
                }
                break;

            case "Three":
                var boxHeader = $("<h4>");
                boxHeader.html("Under-Table 3-AC");
                $("#pickProduct").append(boxHeader);

                for (var i = 0; i < underTableImgs.Three.length; i++) {
                    var btn = $("<a>");
                    var img = $("<img>");
                    img.addClass("imgCard");
                    img.attr("alt", "2-AC");
                    btn.attr("href", "#");
                    btn.attr("value", underTableImgs.Three[i]);
                    img.attr("src", underTableImgs.Three[i]);
                    img.attr("style", "width: 50%");
                    btn.append(img);
                    $("#pickProduct").append(btn);
                }
                break;

            case "Four":
                var boxHeader = $("<h4>");
                boxHeader.html("Under-Table 4-AC");
                $("#pickProduct").append(boxHeader);

                for (var i = 0; i < underTableImgs.Four.length; i++) {
                    var btn = $("<a>");
                    var img = $("<img>");
                    img.addClass("imgCard");
                    img.attr("alt", "2-AC");
                    btn.attr("href", "#");
                    btn.attr("value", underTableImgs.Four[i]);
                    img.attr("src", underTableImgs.Four[i]);
                    img.attr("style", "width: 50%");
                    btn.append(img);
                    $("#pickProduct").append(btn);
                }
                break;
            case "Five":
                var boxHeader = $("<h4>");
                boxHeader.html("Under-Table 5-AC");
                $("#pickProduct").append(boxHeader);

                for (var i = 0; i < clampOnImgs.Five.length; i++) {
                    var btn = $("<a>");
                    var img = $("<img>");
                    img.addClass("imgCard");
                    img.attr("alt", "2-AC");
                    btn.attr("href", "#");
                    btn.attr("value", underTableImgs.Five[i]);
                    img.attr("src", underTableImgs.Five [i]);
                    img.attr("style", "width: 50%");
                    btn.append(img);
                    $("#pickProduct").append(btn);
                }
                break;
            }
    }

    const displayDualInTable = (numSlots) => {
        switch (numSlots) {
            case "Two":
                var boxHeader = $("<h4 class='fontone'>");
                boxHeader.html("Dual In-Table 2-AC");
                $("#pickProduct").append(boxHeader);

                for (var i = 0; i < dualInTableImgs.Two.length; i++) {
                    var btn = $("<a>");
                    var img = $("<img>");
                    img.addClass("imgCard");
                    img.attr("alt", "2-AC");
                    btn.attr("href", "#");
                    btn.attr("value", dualInTableImgs.Two[i]);
                    img.attr("src", dualInTableImgs.Two[i]);
                    img.attr("style", "width: 50%");
                    btn.append(img);
                    $("#pickProduct").append(btn);
                }
                break;

            case "Three":
                var boxHeader = $("<h4>");
                boxHeader.html("Dual In-Table 3-AC");
                $("#pickProduct").append(boxHeader);

                for (var i = 0; i < dualInTableImgs.Three.length; i++) {
                    var btn = $("<a>");
                    var img = $("<img>");
                    img.addClass("imgCard");
                    img.attr("alt", "2-AC");
                    btn.attr("href", "#");
                    btn.attr("value", dualInTableImgs.Three[i]);
                    img.attr("src", dualInTableImgs.Three[i]);
                    img.attr("style", "width: 50%");
                    btn.append(img);
                    $("#pickProduct").append(btn);
                }
                break;

            case "Four":
                var boxHeader = $("<h4>");
                boxHeader.html("Dual In-Table 4-AC");
                $("#pickProduct").append(boxHeader);

                for (var i = 0; i < dualInTableImgs.Four.length; i++) {
                    var btn = $("<a>");
                    var img = $("<img>");
                    img.addClass("imgCard");
                    img.attr("alt", "2-AC");
                    btn.attr("href", "#");
                    btn.attr("value", dualInTableImgs.Four[i]);
                    img.attr("src", dualInTableImgs.Four[i]);
                    img.attr("style", "width: 50%");
                    btn.append(img);
                    $("#pickProduct").append(btn);
                }
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
            displayClampOnImgs(numACslots);
            // transition to Carousel #2 with product choices generated by func above  
            $('.carousel').carousel(1);        
        });

    });
    
    $("#chooseInTable").on("click", function() {
        // resets and init
        resetDivs();
        resetPrices();
        resetCustomerOrder();
        priceTally += inTablePrice;
        customerOrder.push('In-Table');
        console.log(`test init In-Table cost: $${priceTally}`);
        console.log(`test init customerOrder is: ${customerOrder[0]}`);

        // display AC selections on modal screen
        const selectAC = "<div class='pickAC btn btn-lg ml-2 btn-success' data-slot='Two'>2-AC</div><div class='pickAC btn btn-lg ml-2 btn-success' data-slot='Three'>3-AC</div><div class='pickAC btn btn-lg ml-2 btn-success'  data-slot='Four'>4-AC</div>";
        $('#pickSlots').append(selectAC);

        // display fullscreen modal with carousel functionality
        $('#displayModal').modal('show');

        // listener for next carousel screen
        $(".pickAC").on("click", function() {
            let numACslots = $(this).data("slot");
            console.log(`Number of Slots Selected: ${numACslots}`);
            displayInTable(numACslots);
            // transition to Carousel #2 with product choices generated by func above  
            $('.carousel').carousel(1);        
        });
    });

    $("#chooseUnderTable").on("click", function() {
        // resets and init
        resetDivs();
        resetPrices();
        resetCustomerOrder();
        priceTally += underTablePrice;
        customerOrder.push('Under-Table');
        console.log(`test init Under-Table cost: $${priceTally}`);
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
            displayUnderTable(numACslots);
            // transition to Carousel #2 with product choices generated by func above  
            $('.carousel').carousel(1);        
        });

    });

    $("#chooseDualInTable").on("click", function() {
        // resets and init
        resetDivs();
        resetPrices();
        resetCustomerOrder();
        priceTally += dualInTablePrice;
        customerOrder.push('Dual In-Table');
        console.log(`test init Dual In-Table cost: $${priceTally}`);
        console.log(`test init customerOrder is: ${customerOrder[0]}`);

        // display AC selections on modal screen
        const selectAC = "<div class='pickAC btn btn-lg ml-2 btn-success' data-slot='Two'>2-AC</div><div class='pickAC btn btn-lg ml-2 btn-success' data-slot='Three'>3-AC</div><div class='pickAC btn btn-lg ml-2 btn-success'  data-slot='Four'>4-AC</div>";
        $('#pickSlots').append(selectAC);

        // display fullscreen modal with carousel functionality
        $('#displayModal').modal('show');

        // listener for next carousel screen
        $(".pickAC").on("click", function() {
            let numACslots = $(this).data("slot");
            console.log(`Number of Slots Selected: ${numACslots}`);
            displayDualInTable(numACslots);
            // transition to Carousel #2 with product choices generated by func above  
            $('.carousel').carousel(1);        
        });
    });

});