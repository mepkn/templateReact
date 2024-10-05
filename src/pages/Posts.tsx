import { useGetTodosQuery } from "@/services/todo/todoService";
import { Link } from "react-router-dom";

export const Posts = () => {
  const { data, error, isLoading } = useGetTodosQuery();

  return (
    <>
      {error ? (
        <div className="flex flex-1 items-center justify-center">
          Oh no, there was an error
        </div>
      ) : isLoading ? (
        <div className="flex flex-1 items-center justify-center">
          Loading...
        </div>
      ) : data ? (
        <div className="container mx-auto px-4 pt-12 md:max-w-3xl">
          <ul className="ml-6 list-disc space-y-2">
            {data.map((data) => (
              <li key={data.id}>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  <Link to={`/posts/${data.id}`}>{data.title}</Link>
                </h3>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};
