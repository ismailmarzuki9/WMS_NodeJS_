
const ChallengeBesar = (Data) => {

    const A = [...Data].map((p)=>p);
    const B = Data.find((p)=> p.id === 3);
    const C = Data.findIndex((p)=> p.id === 3);
    const D = Data.filter((p) => p.stock === 0);
    const E = Data.some((p) => p.stock === 0);
    const F = [...Data].every((p) => p.stock === 0);
    const G = [...Data].reduce(
        (Total, Product) => {
            return Total + (Product.price * Product.stock)
        },
        0
    )

//     const names = Data.reduce(
//     (result, product) => {
//         result.push(product.name);
//         return result;
//     },
//     []
// );

    const HA = [...Data].sort((a, b) => a.price - b.price);
    const HB = [...Data].sort((a, b) => b.price - a.price);
    

    return {
        A,
        B,
        C,
        D,
        E,
        F,
        G,
        HA,
        HB
    }

}

export default ChallengeBesar;