import Sidebar from "../components/Sidebar";
import { auth } from "../firebase";
import Image from "next/image";

function Profile() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Sidebar />
      <div className="p-10 bg-purple-600 text-white rounded-2xl shadow-2xl text-center flex flex-col justify-center space-y-5 items-center">
        <Image
          className="bg-black rounded-full cursor-pointer"
          src={`https://avatars.dicebear.com/api/pixel-art/${auth.currentUser?.email}.svg`}
          width={100}
          height={100}
        />

        <h1>Email - {auth.currentUser?.email}</h1>

        <h1>Username - {auth.currentUser?.email}</h1>
      </div>
    </div>
  );
}

export default Profile;
