import React from "react";
import { MemberEntity } from "./model";
import { MemberTableRow } from "./member-table-row";

export const MemberTable = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    fetch(`${process.env.API_BASE}`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, []);

  return (
    <div className="wrapper">
      <div className="user-list-container">
        <span className="header">Avatar</span>
        <span className="header">Id</span>
        <span className="header">Name</span>
        {members.map((member) => (
          <MemberTableRow key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};
