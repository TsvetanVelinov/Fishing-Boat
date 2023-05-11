function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fishmens = Number(input[2]);
    let price = 0;

    switch (season) {
        case "Spring":
            price = 3000;
            break;

        case "Summer":
        case "Autumn":
            price = 4200;
            break;
        case "Winter":
            price = 2600;
            break;
    }
    if (fishmens <= 6) {
        price = price - (price * 0.1);
    } else if (fishmens <= 11) {
        price = price - (price * 0.15);
    } else if (fishmens > 12) {
        price = price - (price * 0.25);
    }

    if (fishmens % 2 === 0 && season !== "Autumn") {
        price = price - (price * 0.05);
    }

        let absolutelyFinalTotalPrice = budget - price;

        if (absolutelyFinalTotalPrice >= 0) {
            console.log(`Yes! You have ${absolutelyFinalTotalPrice.toFixed(2)} leva left.`);
        } else {

            console.log(`Not enough money! You need ${Math.abs(absolutelyFinalTotalPrice).toFixed(2)} leva.`);

        }
    }



fishingBoat(["3000", "Summer", "11"])
fishingBoat(["3600", "Autumn", "6"])
fishingBoat(["2000", "Winter", "13"])


