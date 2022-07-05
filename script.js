function colorModeChange() {
    var modval = document.getElementById('colorMode')
    if (modval.getAttribute('value') == 0) {
        document.querySelector('html').style.colorScheme = 'dark'
        modval.setAttribute('value', 1)
        var icon = document.getElementById('colorMode')
        icon.src = "assets/Images/colorMode/colorModeDark.png"
    }
    else {
        document.querySelector('html').style.colorScheme = 'light'
        modval.setAttribute('value', 0)
        var icon = document.getElementById('colorMode')
        icon.src = "assets/Images/colorMode/colorModeLight.png"
    }

}


