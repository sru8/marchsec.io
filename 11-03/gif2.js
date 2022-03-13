document.querySelector(".js-go").addEventListener("click", function() {
    var inputValue = document.querySelector(".js-userinput").value;
    var userInput = getUserInput();
    searchGiphy(userInput);
});

document
    .querySelector(".js-userinput").addEventListener("keyup", function(data) {
        if (data.which === 13) {
            var userInput = getUserInput();
            searchGiphy(userInput);
        }
    });

function getUserInput() {
    var inputValue = document.querySelector(".js-userinput").value;

    return inputValue;
}

function searchGiphy(searchQuery) {
    var url =
        "7z1kztd7F7pXT3NNFBQWfOzfXEuwUEqy" + searchQuery;
    // AJAX Request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open("GET", url);
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener("load", function(data) {
        var actualData = data.target.response;
        pushToDOM(actualData);
        console.log(actualData);
    });
}

function pushToDOM(response) {
    // turn response into real javascript object
    response = JSON.parse(response);
    // drill down to the data array
    var images = response.data;

    // find the container to hold this stuff in DOM
    var container = document.querySelector(".js-container");
    // clear it of old content since this function will be used on every search
    // we want to reset the div
    container.innerHTML = "";

    // loop through data array and add IMG html
    images.forEach(function(image) {
        // find img src
        var src = image.images.fixed_height.url;

        // concatenate a new IMG tag
        container.innerHTML += "<img src='" + src + "' class='container-image' />";
    });
}





var keyf = "&api_key=Ez4dGybjCudOo9klYvlmMedtmt8dlkoP";
const convert_to_json = function(response) {
    console.log(response)
    return response.json();
}


const handle_data = function(res) {
    console.log(res)
        // const user_arr = res.data[0];
    const user_arr = res.data;
    console.log(user_arr)
        // const user_arr = res.data;
        //     console.log(user_arr[0].url);
    const container = document.getElementById('list_container');

    container.innerHTML = "";

    for (let i = 0; i < user_arr.length; i += 1) {
        const single_user = user_arr[i].images.original.url;
        const new_li_elem = document.createElement('img');
        new_li_elem.style.width = "200px";
        new_li_elem.style.height = "200px"
        new_li_elem.src = single_user;
        // new_li_elem.src = single_user;
        container.appendChild(new_li_elem);

    }


}

// const handle_search = function(search_response) {
//     const image_elem = document.getElementById('search_img');
//     image_elem.src = search_response.data.images.original.url;
//     console.