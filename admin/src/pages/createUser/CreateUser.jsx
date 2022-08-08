import "./createUser.css";

export default function CreateUser() {
  return (
    <div className="createUser">
      <h1 className="newUserHeading">New User</h1>
      <form className="newUserForm" id="createUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" name="username" placeholder="username" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" name="full_name" placeholder="John Smith" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" name="email" placeholder="mail@mail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" name="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" name="phone" placeholder="+90 123 456 78 90" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" name="address" placeholder="Muğla/Turkey" />
        </div>

        <button className="newUserButton" disabled>Create</button>
      </form>
    </div>
  );
}
