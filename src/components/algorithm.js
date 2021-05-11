const algorithm = (bishop, knight) => {
  if (bishop === "32") {
    return ["21", "10", "41", "50", "23", "14", "05"];
  }
  if (bishop === "10") {
    return ["01", "21", "32"];
  }
  if (bishop === "01") {
    return ["10", "12", "23", "34", "45", "56"];
  }
  if (bishop === "12") {
    return ["01", "21", "23", "34", "45", "56", "30"];
  }
  if (bishop === "23") {
    return ["01", "12", "34", "45", "56", "14", "05", "32", "41", "50"];
  }
  if (bishop === "34") {
    return ["01", "12", "23", "45", "56", "25", "16"];
  }
  if (bishop === "45") {
    return ["01", "12", "23", "56", "34", "36", "27", "54", "63", "72"];
  }
  if (bishop === "56") {
    return ["01", "12", "23", "34", "45", "47", "65", "74"];
  }
  if (bishop === "21") {
    return ["10", "12", "30", "32"];
  }
  if (bishop === "30") {
    return ["41", "21", "12", "52", "63", "74"];
  }
  if (bishop === "41") {
    return ["30", "52", "63", "74", "50", "32", "23", "14", "05"];
  }
  if (bishop === "50") {
    return ["61", "72", "41", "32", "23", "14", "05"];
  }
  if (bishop === "52") {
    return ["41", "30", "63", "74", "61", "70"];
  }
  if (bishop === "61") {
    return ["50", "72", "70", "52"];
  }
  if (bishop === "70") {
    return ["61", "52"];
  }
  if (bishop === "72") {
    return ["61", "50", "63", "54", "45", "36", "27"];
  }
  if (bishop === "63") {
    return ["74", "52", "41", "30", "72", "54", "45", "36", "27"];
  }
  if (bishop === "74") {
    return ["63", "52", "41", "30", "65", "56", "47"];
  }
  if (bishop === "54") {
    return ["63", "72", "45", "36", "27", "65", "76"];
  }
  if (bishop === "65") {
    return ["76", "54", "74", "56", "57"];
  }
  if (bishop === "76") {
    return ["65", "54"];
  }
  if (bishop === "14") {
    return ["05", "23", "32", "41", "50", "25", "36", "47"];
  }
  if (bishop === "25") {
    return ["14", "36", "47", "16", "34"];
  }
  if (bishop === "36") {
    return ["25", "14", "47", "27", "45", "54", "63", "72"];
  }
  if (bishop === "47") {
    return ["36", "25", "14", "56", "65", "74"];
  }
  if (bishop === "05") {
    return ["16", "27", "14", "23", "32", "41", "50"];
  }
  if (bishop === "16") {
    return ["05", "27", "25", "34"];
  }
  if (bishop === "27") {
    return ["36", "45", "54", "63", "72", "16", "05"];
  }
  //   knight
  if (knight === "66") {
    return ["45", "54", "47", "74"];
  }
  if (knight === "77") {
    return ["65", "56"];
  }
  if (knight === "66") {
    return ["55", "57", "64"];
  }
  if (knight === "75") {
    return ["54", "56", "63"];
  }
  if (knight === "74") {
    return ["53", "55", "62", "66"];
  }
  if (knight === "73") {
    return ["52", "54", "61", "65"];
  }
  if (knight === "72") {
    return ["51", "53", "60", "64"];
  }
  if (knight === "70") {
    return ["51", "63"];
  }
  if (knight === "60") {
    return ["52", "41", "72"];
  }
  if (knight === "61") {
    return ["40", "42", "73", "53"];
  }
  if (knight === "62") {
    return ["54", "74", "50", "70", "41"];
  }
  if (knight === "63") {
    return ["42", "44", "51", "55", "75"];
  }
  if (knight === "64") {
    return ["45", "76", "56", "52", "72"];
  }
  if (knight === "65") {
    return ["46", "44", "57", "53", "77", "73"];
  }
  if (knight === "57") {
    return ["45", "65", "36", "76"];
  }
  if (knight === "56") {
    return ["35", "37", "75", "77", "64", "44"];
  }
  if (knight === "55") {
    return ["33", "36", "74", "76", "63", "47"];
  }
  if (knight === "54") {
    return ["42", "62", "46", "66", "75", "73", "35", "33"];
  }
  if (knight === "53") {
    return ["41", "45", "61", "65", "74", "72", "34", "32"];
  }
  if (knight === "52") {
    return ["31", "33", "71", "73", "60", "40", "44", "64"];
  }
  if (knight === "51") {
    return ["30", "32", "70", "72", "63"];
  }
  if (knight === "50") {
    return ["42", "62", "31"];
  }
  if (knight === "40") {
    return ["52", "32", "21", "61"];
  }
  if (knight === "41") {
    return ["22", "62", "60", "33"];
  }
  if (knight === "42") {
    return ["23", "21", "63", "61", "54", "34", "30", "50"];
  }
  if (knight === "44") {
    return ["25", "23", "65", "63", "36", "56", "32", "52"];
  }
  if (knight === "45") {
    return ["24", "66", "64", "67", "57", "33", "53"];
  }
  if (knight === "46") {
    return ["27", "25", "65", "34", "54"];
  }
  if (knight === "47") {
    return ["42", "62", "46", "66", "75", "73", "35", "33"];
  }
  if (knight === "37") {
    return ["56", "16", "45", "25"];
  }
  if (knight === "36") {
    return ["17", "15", "57", "55", "24", "44"];
  }
  if (knight === "35") {
    return ["16", "14", "56", "54", "27", "47", "23"];
  }
  if (knight === "34") {
    return ["15", "13", "55", "53", "46", "22", "42"];
  }
  if (knight === "33") {
    return ["14", "12", "54", "52", "25", "45", "21", "41"];
  }
  if (knight === "32") {
    return ["13", "11", "53", "51", "24", "44", "40"];
  }
  if (knight === "31") {
    return ["12", "10", "52", "50", "23"];
  }
  if (knight === "30") {
    return ["11", "51", "22", "42"];
  }
  if (knight === "21") {
    return ["02", "42", "00", "40", "13", "33"];
  }
  if (knight === "22") {
    return ["01", "41", "14", "34", "10", "30"];
  }
  if (knight === "23") {
    return ["04", "02", "44", "42", "15", "35", "11", "31"];
  }
  if (knight === "24") {
    return ["05", "45", "32", "11", "16", "36", "12"];
  }
  if (knight === "25") {
    return ["06", "04", "46", "44", "17", "37", "13", "33"];
  }
  if (knight === "27") {
    return ["06", "46", "15", "35"];
  }
  if (knight === "17") {
    return ["05", "25", "36"];
  }
  if (knight === "16") {
    return ["04", "24", "35", "37"];
  }
  if (knight === "15") {
    return ["36", "34", "23", "27"];
  }
  if (knight === "14") {
    return ["06", "02", "22", "33", "35"];
  }
  if (knight === "13") {
    return ["05", "01", "25", "21", "32", "34"];
  }
  if (knight === "12") {
    return ["01", "00", "24", "33", "31"];
  }
  if (knight === "11") {
    return ["23", "30", "32"];
  }
  if (knight === "10") {
    return ["02", "22", "31"];
  }
  if (knight === "00") {
    return ["12", "21"];
  }
  if (knight === "01") {
    return ["22", "13"];
  }
  if (knight === "02") {
    return ["21", "23", "14", "10"];
  }
  if (knight === "04") {
    return ["12", "16", "23", "25"];
  }
  if (knight === "05") {
    return ["13", "17", "24"];
  }
  if (knight === "06") {
    return ["14", "27", "25"];
  }
};

export default algorithm;
