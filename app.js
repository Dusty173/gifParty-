const $gifArea = $('#gifarea');
const $searchInput = $('#searchbox');
const $image = $('img');

$('#removebtn').on('click', function(){
    $gifArea.empty();
});

function appendGif(res){
    let results = res.data.length;
    if(results){
        let randomMatch = Math.floor(Math.random() * results);
        let $newGif = $('<img>', {src: res.data[randomMatch].images.original.url})
        $gifArea.append($newGif);
    }
}

$('form').on('submit', async function(e){
    e.preventDefault();

    let searchInput = $searchInput.val();
    $searchInput.val("");

    const res = await axios.get('http://api.giphy.com/v1/gifs/search',
    {params: 
        {
        q: searchInput, 
        api_key:'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'
        }
    });
    appendGif(res.data);
})

