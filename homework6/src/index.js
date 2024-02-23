import got from "got";
import * as $ from "jquery";

const getPokemonFromName = async (name) => {
  try {
    const { body } = await got.get(
      `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
    );
    console.log("complete");
    const { order, sprites } = JSON.parse(body);
    const img = sprites.front_default;

    return { num: order, img };
  } catch (e) {
    console.log(e);

    return { num: null, img: null };
  }
};

$("#submit").on("click", async (e) => {
  const name = $("#name").text();
  console.log(name);

  const { num, img } = await getPokemonFromName(name);

  if (num !== null && img !== null) {
    $("#img-wrap").html(`<img src="${img}" alt="">`);
    $("#num").text(num);
  }
});
getPokemonFromName("ditto");
