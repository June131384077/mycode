$(()=>{
    $.ajax({
        type: "get",
        url: "../../api/listB.php",
        // data: "data",
        dataType: "json",
        success: function (response) {
            console.log(response);
        }
    });
})