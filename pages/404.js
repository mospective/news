import Link from "next/link";
import { useRouter } from "next/router";

const PageNotFound = () => {
    const router = useRouter;
    return (
      <div>
          <h1 className="heading">Page not found</h1>
          <a onClick={() => router.push('/')}>Return to home</a>
      </div>  
    )
};

export default PageNotFound;