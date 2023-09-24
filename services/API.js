const API = {
    url: "/data/menu.json",
    fetMenu: async () => {
        const result = await fetch(url);
        return await result.json();
    }
}


export default API; 