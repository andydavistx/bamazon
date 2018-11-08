const saveProduct = function () {

    console.log('this is the saveProduct fn');
    const newProduct = {
        description: $('#productDescription').val().trim(),
        price: $('#productPrice').val().trim(),
        name: $('#productName').val().trim()
    };
    $.post("/api/product", newProduct, function (data) {
        console.log(data);
    })
    .then(function() {
        viewProduct();
    });
    $('#productDescription').val('');
    $('#productPrice').val('');
    $('#productName').val('');
}

const viewProduct = function () {
    console.log('this is the viewProduct fn');
    $.ajax({
        url: '/api/product',
        method: 'GET'
    }).then(function (response) {
        for (let i = 0; i < response.length; i++) {
            $("#test").append(
                `<textarea>${response[i].description}</textarea>`, 
                `<textarea>${response[i].price}</textarea>`, 
                `<textarea>${response[i].name}</textarea>`
                );
                
        }
    });

}


$('#submit-post').on('click', function (event) {
    event.preventDefault();
    saveProduct();
// render();
});