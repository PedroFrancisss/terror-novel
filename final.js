if (malicia.malicia === 0) {
  mostrarCena("final_todos_sobrevivem");
  return;
}
else if (malicia.malicia > 0 && malicia.malicia <= 3) {
  // Checa se há afinidade alta com até dois personagens
  const aliados = Object.values(afinidade).filter(valor => valor >= 3);
  if (aliados.length <= 2 && aliados.length >= 1) {
    mostrarCena("final_neutro");
    return;
  }
}
else if (malicia.malicia > 0 && malicia.malicia <= 2) {
  const aliadosFortes = Object.values(afinidade).filter(valor => valor >= 3);
  if (aliadosFortes.length >= 3) {
    mostrarCena("final_quase_bom");
    return;
  }
}
else if (malicia.malicia >= 8) {
  mostrarCena("final_secreto");
  return;
}
