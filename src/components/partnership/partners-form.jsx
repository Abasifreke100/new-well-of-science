import { Button } from "../ui/button"

export default function PartnersForm() {
  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = Object.fromEntries(new FormData(e.currentTarget))

    console.log(formData)
  }

  return (
    <div className="w-full bg-white rounded-2xl min-h-[20rem]  md:w-[532px] absolute top-96 md:top-[330px] lg:top-[120px] left-1/2 -translate-x-1/2 lg:-translate-x-24 lg:right-0 lg:left-auto py-6 px-4 md:px-8 shadow-xl">
      <div className="mb-12 ">
        <h1 className="font-gen_sans font-semibold text-[32px] text-dark_text relative md:text-[40px] w-fit h-fit ">
          <span>Partners form</span>
          <svg
            width="65"
            height="100"
            viewBox="0 0 65 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -translate-y-1/2 top-1/2 right-12"
          >
            <path
              d="M63.3438 30.2119C54.4191 20.1057 29.6562 6.1132 2.00165 30.9934"
              stroke="#121212"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M63.3438 68.9829C54.4191 79.0892 29.6562 93.0816 2.00165 68.2015"
              stroke="#121212"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </h1>
        <p className="text-[14px] font-normal font-inter text-normal_text lg:text-[16px] leading-10">
          Let&apos;s build a sustainable future together.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div className="space-y-3">
            <Label htmlFor={"name"}>Name of company</Label>
            <Input type="text" id="name" placeholder="Name of company" />
          </div>

          <div className="space-y-3">
            <Label htmlFor={"email"}>Email Address</Label>
            <Input type="email" id="email" placeholder="Email Address" />
          </div>

          <div className="space-y-3">
            <Label htmlFor={"phone"}>Phone Number</Label>
            <Input type="number" id="phone" placeholder="Name of company" />
          </div>

          <div className="space-y-3">
            <Label htmlFor={"message"}>Message</Label>
            <textarea
              name="message"
              id="message"
              required
              className={` w-full empty:bg-[#F3F3F3] border border-[#D4D4D4] rounded-lg placeholder:text-[#8A8A8A] p-3 h-48 outline-[#8A8A8A]`}
            />
          </div>
        </div>

        <Button type="submit" className={"mt-8"}>
          Submit
        </Button>
      </form>
    </div>
  )
}

const Label = ({ htmlFor, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm font-normal font-inter lg:text-base"
    >
      {children}
    </label>
  )
}

const Input = ({ props, type = "text" }) => {
  return (
    <input
      className={`h-[52px] w-full empty:bg-[#F3F3F3] border border-[#D4D4D4] rounded-lg placeholder:text-[#8A8A8A] px-3 outline-[#8A8A8A]`}
      required
      type={type}
      {...props}
    />
  )
}
