const pixelToRem = (size) => `${size / 16}rem`; 

const fontSizes = {
    f62: pixelToRem(62),
    f48: pixelToRem(48),
    f42: pixelToRem(42),
    f36: pixelToRem(36),
    f30: pixelToRem(30),
    f24: pixelToRem(24),
    f20: pixelToRem(20),
    f18: pixelToRem(18),
    f17: pixelToRem(17),
    f16: pixelToRem(16),
    f14: pixelToRem(14),
    f12: pixelToRem(12),
    f13: pixelToRem(13),
    f11: pixelToRem(11),
}

const colors = {
    fff: "#fff",
    f2f2: "#f2f2f2",
    c000: "#000",
    c333: "#333",
    ddd: "#ddd",
    dede: "#dedede",
    rgbaBlack: "rgba(0,0,0,0.3)"
}

const variables = {
    videoResWidth: "85%"
}

const theme = {
    fontSizes,
    colors,
    variables
}

export default theme;