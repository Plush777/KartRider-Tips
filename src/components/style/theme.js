const pixelToRem = (size) => `${size / 16}rem`;

const fontSizes = {
    f62: pixelToRem(62),
    f48: pixelToRem(48),
    f44: pixelToRem(44),
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

export const bgColors = {
    brown: "#9C702E",
    brown2: "#CC9966",
    gray: "#B5B4B4",
    gray2: "#C0C0C0",
    yellow: "#FCF194",
    yellow2: "#FFD700",
    sky: "#84D3FF",
    pink: "#F4AFFF",
    orange: "#FFC876",
    scalettRed: "#8F161B",
    softRed: "#FF9999",
    white: "#fff"
}

const variables = {
    videoResWidth: "85%"
}

export const theme = {
    fontSizes,
    bgColors,
    variables
}

export default theme;