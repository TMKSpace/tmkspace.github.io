const search = document.querySelector('#search')
const searchbtn = document.querySelector('#searchbtn')
searchbtn.addEventListener('click', () => {
    window.location.replace('https://google.com/search?q=' + search.value)
})
search.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        searchbtn.click();
    }
});