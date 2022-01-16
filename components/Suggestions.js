import { useEffect, useState } from "react";
import minifaker from "minifaker";
import "minifaker/locales/en";
function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    //generate fake data
    const suggestions = [...Array(5)].map((_, i) => ({
      name: minifaker.firstName(),
      avatar: minifaker.imageUrlFromPlaceIMG({
        width: 200,
        height: 200,
        category: "people",
      }),
      username: minifaker.username(),
      companyName: minifaker.jobTitle(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="flex items-center justify-between mt-3">
          <img
            className="w-10 h-10 rounded-full border p-[2px]"
            src={profile.avatar + `/${profile.id}`}
            alt=""
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">
              Works at {profile.companyName}
            </h3>
          </div>
          <button className="font-bold text-blue-400 text-sm">Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
