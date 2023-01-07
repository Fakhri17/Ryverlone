function game(){
  return{
    dataMenu: 'ML',
    ffPriceList: [
      {type: 'diamond', diamond: 5, price: 1000},
      {type: 'diamond', diamond: 20, price: 3000},
      {type: 'diamond', diamond: 50, price: 8000},
      {type: 'diamond', diamond: 70, price: 10000},
      {type: 'diamond', diamond: 140, price: 20000},
      {type: 'diamond', diamond: 210, price: 30000},
      {type: 'diamond', diamond: 280, price: 38000},
      {type: 'diamond', diamond: 355, price: 48000},
      {type: 'diamond', diamond: 425, price: 55000},
      {type: 'diamond', diamond: 495, price: 65000},
      {type: 'diamond', diamond: 720, price: 93000},
      {type: 'diamond', diamond: 860, price: 110000},
      {type: 'diamond', diamond: 1075, price: 138000},
      {type: 'diamond', diamond: 2000, price: 250000},
    ],
    mlPriceList: [
      {type: 'diamond', diamond: 86, price: 20000},
      {type: 'diamond', diamond: 172, price: 40000},
      {type: 'diamond', diamond: 257, price: 60000},
      {type: 'diamond', diamond: 344, price: 80000},
      {type: 'diamond', diamond: 429, price: 100000},
      {type: 'diamond', diamond: 514, price: 120000},
      {type: 'diamond', diamond: 601, price: 140000},
      {type: 'diamond', diamond: 706, price: 160000},
      {type: 'diamond', diamond: 792, price: 180000},
      {type: 'diamond', diamond: 878, price: 200000},
      {type: 'diamond', diamond: 963, price: 220000},
      {type: 'diamond', diamond: 1050, price: 240000},
      {type: 'diamond', diamond: 1135, price: 260000},
    ],
    connect(){
    },
    buttonGame(game){
      this.dataMenu = game;
    },
    rupiah(number){
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
      }).format(number).split(',')[0];
    }
  }; 
}