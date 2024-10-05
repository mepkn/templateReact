import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import {
  decrement,
  increment,
  incrementByAmount,
} from "@/store/counter/counterSlice";

export const Home = () => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

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
      </div>
    </>
  );
};
