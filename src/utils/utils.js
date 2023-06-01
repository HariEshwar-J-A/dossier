export const updatePageRoute = (route) => {
    document.getElementById(route).scrollIntoView({behavior: 'smooth'});
    // window.history.pushState({}, undefined, `/#${route}`);
}

// export const isElementInView = (elementId) => 
// {
//     var docViewTop = window.scrollY;
//     var docViewTop = window.scrollX;
//     var docViewBottom = docViewTop + $(window).height();

//     var elemTop = $(elem).offset().top;
//     var elemBottom = elemTop + $(elem).height();

//     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }