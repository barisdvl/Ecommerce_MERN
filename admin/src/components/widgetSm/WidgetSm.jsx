import { PersonOutlined, Visibility } from "@mui/icons-material";
import { useEffect, useState, Fragment } from "react";

import "./widgetSm.css";
import { Link } from "react-router-dom";
import { userRequest } from "../../requestMethods";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const newMembers = [];
      const res = await userRequest.get("/users");
      res.data.map((user, i, data) => {
        return i > data.length - 6 ? newMembers.push(user) : null;
      });
      setUsers(newMembers);
    };
    fetchUsers();
  }, []);

  return (
    <div className="widgetSm">
      <h3 className="widgetSmTitle">New Join Members</h3>
      <ul className="widgetSmList">
        {users.map((user) => {
          if (!user.isAdmin) {
            return (
              <Fragment key={user._id}>
                <li className="widgetSmItem">
                  <PersonOutlined className="widgetSmImg"/>
                  <div className="widgetSmUser">
                    <span className="widgetSmUsername">{user.full_name}</span>
                    <span className="widgetSmUserTitle">{user.email}</span>
                  </div>
                  <Link to={"/user/" + user._id}>
                    <button className="widgetSmButton">
                      <Visibility className="widgetSmIcon" />
                    </button>
                  </Link>
                </li>
              </Fragment>
            );
          } else {
            return null;
          }
        })}
      </ul>
    </div>
  );
}
