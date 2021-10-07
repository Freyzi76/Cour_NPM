
  export async function retrieveSpecials() {
    const url = "https://api.gill-cote-bistro.fr/specials?_sort=id:asc";
  
    const response = await fetch(url);
    return response.json();

  }


  export async function retrieveSuggestions() {
    const url = "https://api.gill-cote-bistro.fr/suggestions?_sort=id:asc";
  
    const response = await fetch(url);
    return response.json();

  }
  