import LottieAnimation from "./LottieAnimation";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <div className="flex justify-center mt-20">
        <LottieAnimation />
      </div>
      <div className="text-white p-6 text-3xl text-center">
        Compare your thoughts on{" "}
        <span className="bg-gradient-to-r from-[#FABBFF] via-[#B179FF] to-[#6DDDFF] text-transparent bg-clip-text">
          technology
        </span>{" "}
        with current industry opinions.
      </div>
      <div className="flex justify-center my-8">
        <Link
          href="/walkthrough"
          className="bg-primary-light text-dark rounded-3xl py-5 px-20"
        >
          Get a reality check
        </Link>
      </div>
    </section>
  );
}
