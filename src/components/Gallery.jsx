import { useState, useMemo, useCallback } from "react";
import PhotoCard from "./PhotoCard";
import useFetchPhotos from "../hooks/useFetchPhotos";
import { Loading } from "./Loading";

export default function Gallery({ favourites, dispatch }) {
  const { photos, loading, error } = useFetchPhotos();
  const [search, setSearch] = useState("");

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search.toLowerCase()),
    );
  }, [photos, search]);

  if (loading) return <Loading />;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search by author..."
        value={search}
        onChange={handleSearch}
        className="border p-2 mb-4 w-full"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredPhotos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            favourites={favourites}
            dispatch={dispatch}
          />
        ))}
      </div>
    </div>
  );
}
