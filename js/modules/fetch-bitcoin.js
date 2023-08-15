export default function initFetchBitcoin() {
  fetch('https://www.blockchain.com/ticker').then((response) => {
    response
      .json()
      .then((bitcoin) => {
        const btcPreco = document.querySelector('.btc-preco');
        btcPreco.innerText = (100 / bitcoin.BRL.sell).toFixed(4);
      })
      .catch((err) => {
        console.log(Error(err));
      });
  });

  // Ou usar o async e await
  /*
    try {
    const response = await fetch('https://www.blockchain.com/ticker');
    const bitcoin = await response.json();

    const btcPreco = document.querySelector('.btc-preco');
    btcPreco.innerText = (100 / bitcoin.BRL.sell).toFixed(4);
  } catch (error) {
    console.error('Error:', error);
  }
  */
}
