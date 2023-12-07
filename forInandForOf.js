// For in

const car = {
  cor: "preto",
  marca: "bmw",
  placa: "jkm3445",
};

for (info in car) {
  console.log(car[info]);
}

// For off

const names = ["Carlos", "Rebeca", "João"];

// Mostra o conteúdo

for (personName of names) {
  console.log(personName);
}

// Mostra os indices

for (personName in names) {
  console.log(personName);
}
