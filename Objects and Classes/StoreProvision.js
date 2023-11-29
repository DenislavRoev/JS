function stock(current, ordered){
    let currentStock = current;
    let orderedStock = ordered;
    let inStock = 0;
    let curr;
    let ord;
        for (let j = 0; j < orderedStock.length; j += 2){
            for (let i = 0; i < currentStock.length; i += 2){
                if (currentStock[i] == orderedStock[j])
                {
                    inStock++;
                    curr = Number(currentStock[i+1]);
                    ord = Number(orderedStock[j+1]);
                    currentStock[i+1] = curr + ord;
                    break;
                }
           }
           if (inStock == 0){
             currentStock.push(orderedStock[j]);
             currentStock.push(orderedStock[j+1]);
        }
        inStock = 0;
    }
    for (let i = 0; i < currentStock.length; i += 2){
        let productInfo = {
            product: currentStock[i],
            quantity: currentStock[i+1]
        }
        console.log(`${productInfo.product} -> ${productInfo.quantity}`);
    }
}
