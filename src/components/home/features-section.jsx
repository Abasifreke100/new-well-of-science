export default function FeaturesSection() {
  return (
    <section className="py-[5.5rem] md:py-[7.5rem]">
      <div className="flex flex-col lg:flex-row rounded-[32px] ">
        {/* left / top */}

        <div className="rounded-t-[32px] md:rounded-t-[64px]  lg:rounded-tl-none lg:rounded-r-[80px]  bg-white">
          <header className="py-6 text-center text-dark_text text-base font-semibold font-gen_sans w-48 mx-auto">
            We are redefining the way to do business.
          </header>
        </div>

        {/* right / bottom */}

        <div className="rounded-b-[32px] md:rounded-b-[64px]  lg:rounded-tr-none lg:rounded-l-[80px]  bg-red-500 w-20 h-20"></div>
      </div>
    </section>
  )
}
