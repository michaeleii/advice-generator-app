import { useAdvice } from "../hooks/useAdvice";
import DiceIcon from "./DiceIcon";
import Spinner from "./Spinner";

function AdviceCard() {
  const { advice, isLoading, getAdvice } = useAdvice();
  return (
    <div className="relative max-w-xl rounded-xl bg-primary p-10 text-center">
      {isLoading && <Spinner />}
      {!isLoading && advice && (
        <>
          <p className="mb-8 uppercase tracking-widest text-secondary">
            Advice #{advice.id}
          </p>
          <h1 className="text-3xl font-bold text-content">
            &quot;{advice.advice}&quot;
          </h1>
        </>
      )}
      <picture>
        <source
          media="(min-width: 375px)"
          srcSet="/pattern-divider-desktop.svg"
        />
        <img
          src="/pattern-divider-mobile.svg"
          alt=""
          className="my-10 w-full"
        />
      </picture>
      <button
        className="center absolute left-1/2 rounded-full bg-secondary p-5 transition-colors hover:bg-emerald-400"
        onClick={() => {
          getAdvice().catch((err) => console.error(err));
        }}
      >
        <DiceIcon />
      </button>
    </div>
  );
}
export default AdviceCard;
