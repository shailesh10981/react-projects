import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileCard from "./components/ProfileCard";
function App() {
  const profile = [
    {
      name: "Robin",
      img: "1.png",
      bio: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      name: "Peeter",
      img: "2.png",
      bio: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      name: "Jon",
      img: "3.png",
      bio: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
  ];
  return (
    <div class="album py-5 bg-body-tertiary">
      <div class="container">
        <ProfileCard profile={profile} />
      </div>
    </div>
  );
}

export default App;
