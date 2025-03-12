import { signInWithGoogle } from "../firebase/auth";

const Signin = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <button onClick={signInWithGoogle} className="p-4 bg-blue-500 text-white rounded">
        Sign in with Google
      </button>
    </div>
  );
};

export default Signin;
