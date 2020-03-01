
function refreshPage() {
    window.location.reload();
}

fetch("https://randomuser.me/api/") // Call the fetch function passing the url of the API as a parameter
    .then((resp) => resp.json()) // Transform the data into json
    .then(function (data) {
        // Your code for handling the data you get from the API
        console.log(data);

        let title = data.results[0].name.title;
        let first = data.results[0].name.first;
        let last = data.results[0].name.last;
        let photo = data.results[0].picture.large;

        name = title + " " + first + " " + last
        gender = data.results[0].gender
        console.log(name);
        console.log(gender);

        // Photo
        var img = document.createElement('img');
        img.className += "img-fluid w-50 text-center mx-auto mb-3 rounded rounded-circle"
        img.src = photo;
        document.getElementById('user-list').appendChild(img);

        // Name
        var node = document.createElement("LI");
        node.className += "list-group-item"
        var nameNode = document.createTextNode("Name: " + name);
        node.appendChild(nameNode);
        document.getElementById("user-list").appendChild(node);


        // Gender
        var node = document.createElement("LI");
        node.className += "list-group-item"
        var genderNode = document.createTextNode("Gender: " + gender);
        node.appendChild(genderNode);
        document.getElementById("user-list").appendChild(node);



    })
    .catch(function () {
        // This is where you run code if the server returns any errors
    });



