// displayNewsInfo function re-renders the HTML to display the appropriate content
function displayNewsInfo() {

    var search = $("#searchInput").val();
    var quantity =  $("#recordsInput").val();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=f243582527e8400f900e54e5268f2c14&q=" + search + "&sort=newest&page=1";
    console.log(quantity)
    console.log(search)
    // Creates AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (resp) {
        console.log(resp.response.docs)
        let response = resp.response;
        for (var i = 0; i < response.docs.length; i++) {
            let newsHolder = $('<div class="card-body">');

            console.log(response.docs[i].headline.main);
            console.log(response.docs[i].snippet);
            console.log(response.docs[i].pub_date);

            let title = $('<h5 class="card-title">').text(response.docs[i].headline.main);

            let summary = $('<p class="card-text">').text(response.docs[i].snippet);

            let pubDate = $('<p class="card-text">').text(response.docs[i].pub_date);

            $(newsHolder).append(title);
            $(newsHolder).append(summary);
            $(newsHolder).append(pubDate);

            $(".card-body .card").prepend(newsHolder);
        }
    });
};

$(document).on("click", "#searchbutton", displayNewsInfo);