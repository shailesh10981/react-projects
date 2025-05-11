const ProfileItems = ({ user }) => {
  return (
    <div class="col">
      <div class="card shadow-sm">
        <img
          src={`img/${user.img}`}
          alt="profile"
          className="bd-placeholder-img card-img-top"
        />

        <div class="card-body">
          <h5 class="card-title">{user.name}</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <div class="d-flex justify-content-between align-items-center">
            <small class="text-body-secondary">Read More........</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileItems;
