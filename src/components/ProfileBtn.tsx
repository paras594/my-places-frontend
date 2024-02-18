const ProfileBtn = () => {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="avatar btn btn-circle btn-ghost">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>
      <ul tabIndex={0} className="menu dropdown-content z-50 mt-3 w-52 gap-4 rounded-box bg-base-100 p-4 shadow">
        <li>Profile</li>
        <li>Settings</li>
        <li className="font-semibold text-red-500">Logout</li>
      </ul>
    </div>
  );
};

export default ProfileBtn;
