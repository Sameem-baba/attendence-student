import { collection, onSnapshot, query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";

function ViewAttendence() {
  const [pre, setPre] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "attendence", "user", "present")),
        (snapshot) =>
          setPre(snapshot.docs[0]._document.data.value.mapValue.fields)
      ),
    [db]
  );
  return (
    <table className="table ml-60 bg-white border-black table-bordered text-black container">
      <thead class="table-dark text-black">
        <tr>
          <th>Email</th>
          <th>Date</th>
          <th>Attendence</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{user?.email}</td>
          <td>{pre.date?.stringValue}</td>
          <td>{pre.isPresent?.booleanValue == true ? "Present" : "Absent"}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ViewAttendence;
