import { Link } from "react-router-dom";

const ErrorPage = () => {
   return (
      <div className="flex justify-center min-h-screen items-center">
         <h1 className="text-5xl text-red-300">Unexpected Error</h1>
         <Link to={"/"}><button className="btn btn-error btn-lg">Go Home</button></Link>
      </div>
   );
};

export default ErrorPage;