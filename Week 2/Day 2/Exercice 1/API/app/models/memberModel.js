const sql = require("./db.js");

// constructor
const Member = function(member) {
  this.MemberName = member.MemberName;
  this.MemberAddress = member.MemberAddress;
  this.LibraryId = member.LibraryId;
};

Member.create = (newMember, result) => {
  sql.query("INSERT INTO Member SET ?", newMember, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created member: ", { id: res.insertId, ...newMember });
    result(null, { id: res.insertId, ...newMember });
  });
};

Member.findById = (id, result) => {
  sql.query(`SELECT * FROM Member WHERE MemberId = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found member: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Library with the id
    result({ kind: "not_found" }, null);
  });
};

Member.getAll = (title, result) => {
  let query = "SELECT * FROM Member";

  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Member: ", res);
    result(null, res);
  });
};

Member.updateById = (id, member, result) => {
  sql.query(
    "UPDATE Member SET MemberName = ?, MemberAddress = ? WHERE MemberId = ?",
    [member.MemberName, member.MemberAddress, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Library with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated member: ", { id: id, ...member });
      result(null, { id: id, ...member });
    }
  );
};

Member.remove = (id, result) => {
  sql.query("DELETE FROM Member WHERE MemberId = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Library with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted member with id: ", id);
    result(null, res);
  });
};

Member.removeAll = result => {
  sql.query("DELETE FROM Member", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} Member`);
    result(null, res);
  });
};

module.exports = Member;