const valores = {
  ridgewood: {
    estrelas: 5,
    normal: {
      diaDeSemana: 220,
      fimDeSemana: 150,
    },
    fidelidade: {
      diaDeSemana: 100,
      fimDeSemana: 40,
    }
  },
  bridgewood: {
    estrelas: 4,
    normal: {
      diaDeSemana: 160,
      fimDeSemana: 60,
    },
    fidelidade: {
      diaDeSemana: 110,
      fimDeSemana: 50,
    }
  },
  lakewood: {
    estrelas: 3,
    normal: {
      diaDeSemana: 110,
      fimDeSemana: 90,
    },
    fidelidade: {
      diaDeSemana: 80,
      fimDeSemana: 80,
    }
  }
}

function getCheapestHotel(input) { //DO NOT change the function's name.
  const calculaValor = () => {
    var fimDeSemana = 0;
    var diaDeSemana = 0;
    for (const match of input.split(/\(([^)]+)\)/g)) { // split ou matchAll
      if (match === "mon" || match === "tues" || match === "wed" || match === "thur" || match === "fri") {
        diaDeSemana++;
      }
      else fimDeSemana++;
    }

    if (input.split(":")[0] === "Regular") {
      
    // HOTEL RIDGEWOOD
      const hotelRidgewoodNormalSemana = valorHotel(diaDeSemana, valores.ridgewood.normal.diaDeSemana);
      const hotelRidgewoodNormalFimSem = valorHotel(fimDeSemana, valores.ridgewood.normal.fimDeSemana);
      const resulRidgewoodNormal = hotelRidgewoodNormalSemana + hotelRidgewoodNormalFimSem;
    // HOTEL BRIDGEWOOD
      const hotelBridgewoodNormalSemana = valorHotel(diaDeSemana, valores.bridgewood.normal.diaDeSemana);
      const hotelBridgewoodNormalFimSem = valorHotel(fimDeSemana, valores.bridgewood.normal.fimDeSemana);
      const resulBridgewoodNormal = hotelBridgewoodNormalSemana + hotelBridgewoodNormalFimSem;
    // HOTEL LAKEWOOD
      const hotelLakewoodNormalSemana = valorHotel(diaDeSemana, valores.lakewood.normal.diaDeSemana);
      const hotelLakewoodNormalFimSem = valorHotel(fimDeSemana, valores.lakewood.normal.fimDeSemana);
      const resulLakewoodNormal = hotelLakewoodNormalSemana + hotelLakewoodNormalFimSem;      

    return melhorHotel(resulLakewoodNormal, resulBridgewoodNormal, resulRidgewoodNormal);
    }

    else {

    // HOTEL RIDGEWOOD
        const hotelRidgewoodFidelidadeSemana = valorHotel(diaDeSemana, valores.ridgewood.fidelidade.diaDeSemana);
        const hotelRidgewoodFidelidadeFimSem = valorHotel(fimDeSemana, valores.ridgewood.fidelidade.fimDeSemana);
        const resulRidgewoodFidelidade = hotelRidgewoodFidelidadeSemana + hotelRidgewoodFidelidadeFimSem;
    // HOTEL BRIDGEWOOD
        const hotelBridgewoodFidelidadeSemana = valorHotel(diaDeSemana, valores.bridgewood.fidelidade.diaDeSemana);
        const hotelBridgewoodFidelidadeFimSem = valorHotel(fimDeSemana, valores.bridgewood.fidelidade.fimDeSemana);
        const resulBridgewoodFidelidade = hotelBridgewoodFidelidadeSemana + hotelBridgewoodFidelidadeFimSem;
    // HOTEL LAKEWOOD
        const hotelLakewoodFidelidadeSemana = valorHotel(diaDeSemana, valores.lakewood.fidelidade.diaDeSemana);
        const hotelLakewoodFidelidadeFimSem = valorHotel(fimDeSemana, valores.lakewood.fidelidade.fimDeSemana);
        const resulLakewoodFidelidade = hotelLakewoodFidelidadeSemana + hotelLakewoodFidelidadeFimSem;

    return melhorHotel(resulLakewoodFidelidade, resulBridgewoodFidelidade, resulRidgewoodFidelidade);
    }
  }

  const valorHotel = (days, valores) => {
    return days * valores;
  }

  const melhorHotel = (valHotel1, valHotel2, valHotel3) => {
    if (valHotel1 < valHotel2 && valHotel1 < valHotel3) {
      return "Lakewood";
    } else if (valHotel2 < valHotel1 && valHotel2 < valHotel3) {
      return "Bridgewood";
    } else if (valHotel3 < valHotel1 && valHotel3 < valHotel2) {
      return "Ridgewood";
    } else if (valHotel1 === valHotel2 && valHotel1 === valHotel3) {
      return "Ridgewood";
    } else if (valHotel1 === valHotel2) {
      return "Bridgewood";
    } else return "Lakewood";
  }

  return calculaValor();
}

exports.getCheapestHotel = getCheapestHotel