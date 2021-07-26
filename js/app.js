document.addEventListener('DOMContentLoaded',()=>{
    const newItemform = document.querySelector('#new-item-form');
    newItemform.addEventListener('submit', handleNewItemFormSubmit);

    const deleteThings = document.querySelector('#delete');
    deleteThings.addEventListener('click', handleDeleteThingsClick);
})

const handleNewItemFormSubmit = function (event){
    event.preventDefault();

    const animeListItems = createAnimeListItem (event.target);
    const animeList = document.querySelector('#anime-list');
    animeList.apoendChild(animeListItems);

    event.target.reset();
}

const createAnimeListItem = function (form){
    const animeListItems = document.createElement('li');
    animeListItems.classList.add('anime-list-item');

    const title= document.createElement('h2');
    title.textContent = form.title.value;
    animeListItems.appendChild(title);

    const episodes = document.createElement('h3');
    episodes.textContent = form.episodes.value;
    animeListItems.appendChild(episodes);
}