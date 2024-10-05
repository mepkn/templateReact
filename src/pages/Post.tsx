import { useGetPostQuery } from "@/services/todo/todoService";
import { useParams } from "react-router-dom";

export const Post = () => {
  const { postId } = useParams();
  const { data, error, isLoading } = useGetPostQuery(postId!);

  return (
    <>
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
            <ul className="ml-6 list-disc">
              <li>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  {data.title}
                </h3>
                <p>{data.body}</p>
              </li>
            </ul>
          </div>
        ) : null}
      </>
    </>
  );
};
