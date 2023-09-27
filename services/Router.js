const Router = {
    init: () => {
        document.querySelectorAll('a.navlink').forEach(link => {
            link.addEventListener("click", event => {
                event.preventDefault();
                console.log("linked clicked")
                //const url1 = event.target.href; below way to grab url is thte same as the inline one
                const url = event.target.getAttribute("href");
                Router.go(url);
            })
        })
    
    window.addEventListener("popstate", event => {
        Router.go(event.state.route, false);
    })

        // Check the initial URL

        Router.go(location.pathname);
    },
    go: (route, addToHistory=true) => {
        console.log(`Going to ${route}`);


        if(addToHistory){
            history.pushState( { route }, '', route );
        }

        let pageElement = null;
        switch(route){

            case '/': 
                pageElement = document.createElement("menu-page");
                break;
            case "/order":
                pageElement = document.createElement("order-page");
                break;
            default:
                if(route.startsWith("/product-"))
                pageElement = document.createElement("details-page");
                }

                const paramID = route.substring(route.lastIndexOf("-")+1);
                pageElement.dataset.productId = paramID;

                if(pageElement){
                    const cache = document.querySelector("main");
                    cache.innerHTML = "";
                    document.querySelector("main").appendChild(pageElement);
                    window.scrollX = 0;
                    window.scrollY = 0;
                }else{
                    document.querySelector("main").innerHTML = `Oops 404 ${route} not found 😎`;
                }
        }


}
export default Router;