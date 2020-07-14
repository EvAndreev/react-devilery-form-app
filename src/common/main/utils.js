export const getMarker = (adress) => (
    {
        options: {
            iconLayout: 'default#image',
            iconImageHref: "src/common/media/pin.svg",
            iconImageSize: [33, 40]
        },
        properties: {
            hintContent: adress.adress
        },
        ...adress
    }
)