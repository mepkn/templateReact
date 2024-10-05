import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { useGetTodosQuery } from "@/services/todo";
import {
  decrement,
  increment,
  incrementByAmount,
} from "@/store/counter/counterSlice";

export const Home = () => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useGetTodosQuery();

  return (
    <>
      <div className="container mx-auto px-4 pt-12 md:max-w-3xl">
        <div className="flex items-center justify-center gap-4">
          <Button variant={"outline"} onClick={() => dispatch(increment())}>
            +
          </Button>
          <p>{count}</p>
          <Button variant={"outline"} onClick={() => dispatch(decrement())}>
            -
          </Button>
          <Button
            variant={"outline"}
            onClick={() => dispatch(incrementByAmount(5))}
          >
            Increment by 5
          </Button>
        </div>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            {data.map((data) => (
              <li key={data.id}>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  {data.title}
                </h3>
                <p>{data.body}</p>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
};
