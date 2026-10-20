fetch('./character.json')
    .then(response => response.json())
    .then(champions => {
        console.log(champions);
    });

fetch('./cocktail.json')
    .then(response => response.json())
    .then(cocktails => {
        const urlParams = new URLSearchParams(window.location.search);
        const championName = urlParams.get('name');
        
        const filteredCocktails = championName 
            ? cocktails.filter(c => c.Champions && c.Champions.includes(championName))
            : cocktails;
            
        console.log(filteredCocktails);
    });