var imglist_Url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=10&format=json&nojsoncallback=1';

function getimg() {

    var xhr = new XMLHttpRequest();

    xhr.open('GET', imglist_Url, true);

    xhr.send();

    xhr.onload = function() {

        var data = JSON.parse(this.responseText);

        // Flickr nests the array inside data.photos.photo

        add_new_img(data.photos.photo);

    }

}

function add_new_img(dataset) {

    var gal = document.getElementById("gallery");

    gal.innerHTML = ""; // Clear existing images

    dataset.forEach(function(item) {

        console.log(item);

        var img = document.createElement("img");

        /* Flickr Image URL Format: 
https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg 

        */

        var photoUrl = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_q.jpg`;

        img.setAttribute("src", photoUrl);

        gal.appendChild(img);

    });

}
 