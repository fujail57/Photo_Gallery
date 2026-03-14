export default function PhotoCard({ photo, dispatch, favourites }) {
  const isFav = favourites.some((p) => p.id === photo.id);

  return (
    <div className="border rounded-lg overflow-hidden shadow">
      <img
        src={photo?.download_url}
        alt={photo?.author}
        className="w-full h-48 object-cover"
      />

      <div className="flex justify-between items-center p-3">
        <p className="text-sm">{photo?.author}</p>

        <button
          className="cursor-pointer hover:shadow "
          onClick={() => dispatch({ type: "TOGGLE_FAV", payload: photo })}
        >
          {isFav ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
}
