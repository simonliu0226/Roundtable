export const abbreviateNum = (number) => {
    const abbreviated = new Intl.NumberFormat('en-US', {
    notation: "compact",
    maximumFractionDigits: 1
    }).format(number);
    return abbreviated;
}