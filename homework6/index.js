const getPokemonFromName = async (name) => {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
    );
    console.log("complete");
    const { order, sprites } = await res.json();
    const img = sprites.front_default;
    return { num: order, img };
  } catch (e) {
    console.log(e);
    return { num: null, img: null };
  }
};

$("#submit").on("click", async (e) => {
  const name = $("#name").val();
  console.log("submit", name);

  const { num, img } = await getPokemonFromName(name);

  if (num !== null && img !== null) {
    $("#img-wrap").html(`<img src="${img}" alt="">`);
    $("#num").text(`Pokedex number ${num}`);
  } else {
    $("#img-wrap").html(`Name not found`);
    $("#num").text(``);
  }
});
// getPokemonFromName("ditto");
