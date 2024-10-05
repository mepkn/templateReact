import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center gap-2 bg-neutral-200 dark:bg-neutral-800">
        <p>Sorry, page not found</p>
        <ShieldAlert className="h-48 w-48 text-red-500" />
        <Button variant="outline" onClick={() => navigate("/")}>
          Go Back Home
        </Button>
      </div>
    </>
  );
};
