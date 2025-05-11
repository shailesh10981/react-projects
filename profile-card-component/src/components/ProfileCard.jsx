import ProfileItems from "./ProfileItems";

const ProfileCard = ({ profile, index }) => {
  return (
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {profile.map((user) => (
        <ProfileItems user={user} key={index} />
      ))}
    </div>
  );
};

export default ProfileCard;
