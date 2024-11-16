import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div className="flex justify-between">
        <div />
        <div className="flex items-center">
          <Image
            src="/juicebox-logo.png"
            alt="juicebox-logo"
            width={123}
            height={29}
          />
        </div>
        <Image src="/refresh.png" alt="refresh" width={46} height={46} />
      </div>
      <div className="flex justify-center mt-20">
        <Image
          src="/home-vector.png"
          alt="home vector"
          width={274}
          height={290}
        />
      </div>
      <div className="text-white p-6 text-3xl text-center">
        Compare your thoughts on{" "}
        <span
          className="bg-gradient-to-r from-[#FABBFF] via-[#B179FF] to-[#6DDDFF] text-transparent bg-clip-text"
          // style={{ background: linear-gradient(90deg, #FABBFF 0%, #B179FF 35%, #6DDDFF
          //   83%)}}
        >
          technology
        </span>{" "}
        with current industry opinions.
      </div>
      <div className="flex justify-center my-8">
        <button className="bg-primary-light text-dark rounded-3xl py-5 px-20">
          Get a reality check
        </button>
      </div>
    </section>
  );
}
