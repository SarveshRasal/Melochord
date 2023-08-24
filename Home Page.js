const header = document.querySelector("header");
const headerHeight = header.offsetHeight;
const topVariable = headerHeight - window.innerHeight;
header.setAttribute("style", `position: sticky; top: -${topVariable}px; z-index: 0`);

window.onresize = function(event) {
    document.location.reload(true);
}

const contentWrappers = document.querySelectorAll(".content-wrapper");
contentWrappers.forEach(contentWrapper => {
    const contentHeight = contentWrapper.offsetHeight;
    const contentTopVariable = contentHeight - window.innerHeight;
    contentWrapper.setAttribute("style", `position: sticky; top: -${contentTopVariable}px; z-index: 0`);
});
