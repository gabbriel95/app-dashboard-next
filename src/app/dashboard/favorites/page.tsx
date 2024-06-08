import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const metadata = {
  title: "Favoritos",
  description: "Ad minimu dasd esks ",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemons favoritos <small className="text-blue-500">Global State</small>
      </span>
      <PokemonGrid pokemons={[]} />
    </div>
  );
}
