const html = document.querySelector('html')
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => {
    window.getComputedStyle(element).getPropertyValue(style)
}
const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text")


}
const darkmode = {
    bg: "#7C7C7C",
    bgPanel: "#434343",
    colorHeadings: "#FF2401",
    colorText: "#B5B5B5"

}

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key]))
}



checkbox.addEventListener("change", ({ target }) => {
    if (target.checked) {
        changeColors(darkmode)
    } else {
        changeColors(initialColors)
    }
}
)