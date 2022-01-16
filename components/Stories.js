import minifaker from "minifaker";
import "minifaker/locales/en";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Story from "./Story";
function Stories() {
  const { data: session } = useSession();
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    //generate fake data
    const suggestions = [...Array(20)].map((_, i) => ({
      name: minifaker.firstName(),
      avatar: minifaker.imageUrlFromPlaceIMG({
        width: 200,
        height: 200,
        category: "people",
      }),
      username: minifaker.username(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story
          key={session.user.uid}
          img={session.user.image}
          username={session.user.username}
        />
      )}
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar + `/${profile.id}`}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;
