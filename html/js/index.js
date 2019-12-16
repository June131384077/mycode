$(() => {
    //左边标题头的数据
    //左边大图的数据
    //左边大图下面ul的数据
    //右边选项卡数据
    //右边大图数据
    $.ajax({
        type: "get",
        url: "../../api/listB.php",
        // data: "data",
        dataType: "json",
        success: function (data) {
            console.log(data)
        }
    });
        let html = data.map((ele) => {
            return `
               <div class="epetfoodblock mt30">
            <div class="main-t">
                <i>111</i>
                <ul>
                    <li>${ele.tabsName}</li>
                </ul>
            </div>
            <div class="main-c">
                <div class="main-c-l">
                    <img src="${ele.src}" alt="">
                    <div class="nei-ul">
                        <p>--热门--</p>
                        <ul>
                            <li><a href="http://">${ele.mi}</a></li>
                        </ul>
                    </div>
                </div>
                <div class="main-c-r">
                    <div class="m-l">
                        <a href="http://">
                            <p class="n1"></p>
                            <p class="n2"></p>
                            <img src="" alt="">
                        </a>
                    </div>
                    <div class="m-r">
                        <a href="http://">
                            <p class="n1"></p>
                            <p class="n2"></p>
                            <img src="" alt="">
                        </a>
                    </div>
                    <div class="clear"></div>
                    <div class="m-b">
                        <a href="http://">
                            <p class="n1"></p>
                            <p class="n2"></p>
                            <img src="" alt="">
                        </a>
                    </div>
                </div>
            </div>
            <div class="main-b">
                <ul>
                    <li><a href="http://"><img src="" alt=""></a></li>
                </ul>
            </div>
        </div>  
            `
        }).join("");
    $(".renew w-max ct overflow").html(html);

})