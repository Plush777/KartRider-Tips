const pixelToRem = (size) => `${size / 16}rem`; 

const fontSizes = {
    t62: pixelToRem(62),
    t42: pixelToRem(42),
    t48: pixelToRem(48),
    t30: pixelToRem(30),
    st24: pixelToRem(24),
    d18: pixelToRem(18),
    d16: pixelToRem(16),
    d14: pixelToRem(14),
    d12: pixelToRem(12),
}

const colors = {
    fff: "#fff",
    f2f2: "#f2f2f2",
    c000: "#000",
    c333: "#333",
    ddd: "#ddd",
    dede: "dedede",
    rgbaBlack: "rgba(0,0,0,0.3)"
}

const theme = {
    fontSizes,
    colors,
}

export default theme;