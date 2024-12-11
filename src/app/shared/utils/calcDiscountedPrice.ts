export const calcDiscountedPrice = (price: number, discount: number): number => {
    const discountedPrice = price * (1 - discount / 100);
    return parseFloat(discountedPrice.toFixed(2));
}