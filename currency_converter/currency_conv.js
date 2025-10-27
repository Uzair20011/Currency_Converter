

// This program converts one currency to another using live exchange rates from an API.

async function convertCurrency(from, to, amount) {
    try {
        
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);

       
        const data = await response.json();

    
        const rate = data.rates[to];

        if (!rate) {
            console.log(`Currency ${to} not found!`);
            return;
        }

    
        const convertedAmount = amount * rate;

        console.log(`${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`);
    } catch (error) {
        console.error("Error fetching exchange rate:", error);
    }
}


convertCurrency("USD", "PKR", 10);  
