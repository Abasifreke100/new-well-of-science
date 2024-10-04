// CommentForm.js

const CommentForm = ({
  register,
  errors,
  rememberMe,
  setRememberMe,
  isLoad,
  handleSubmit,
  onSubmit,
}) => {
  return (
    <form
      className="grid grid-cols-12 my-4 mt-8 gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="col-span-12 lg:col-span-6">
        <label htmlFor="" className="text-[#828282]">
          Your name
          <span className="text-[#fb4f58]"> *</span>
        </label>
        <br />
        <input
          type="text"
          className={`border ${
            errors.name ? "border-red-500" : "border-[#dfdfdf]"
          }`}
          placeholder="Enter your name"
          {...register("name", { required: true })}
          style={{
            height: "53px",
            fontSize: "15px",
            width: "100%",
            borderRadius: "4px",
            marginTop: "5px",
            padding: "3px",
            color: "#232323",
            outline: "none",
          }}
        />
      </div>
      <div className="col-span-12 lg:col-span-6">
        <label htmlFor="" className="text-[#828282]">
          Your email address
          <span className="text-[#fb4f58]"> *</span>
        </label>
        <br />
        <input
          type="text"
          className={`border ${
            errors.email ? "border-red-500" : "border-[#dfdfdf]"
          }`}
          placeholder="Enter your email"
          {...register("email", { required: true })}
          style={{
            height: "53px",
            fontSize: "15px",
            width: "100%",
            borderRadius: "4px",
            marginTop: "5px",
            padding: "3px",
            color: "#232323",
            outline: "none",
          }}
        />
      </div>
      <div className="col-span-12">
        <label htmlFor="" className="text-[#828282]">
          Website
        </label>
        <br />
        <input
          type="text"
          className={`border border-[#dfdfdf]`}
          placeholder="Website"
          {...register("website")}
          style={{
            height: "53px",
            fontSize: "15px",
            width: "100%",
            borderRadius: "4px",
            marginTop: "5px",
            padding: "3px",
            color: "#232323",
            outline: "none",
          }}
        />
      </div>
      <div className="col-span-12">
        <label htmlFor="" className="text-[#828282]">
          Your comment
          <span className="text-[#fb4f58]"> *</span>
        </label>
        <br />
        <textarea
          cols="30"
          rows="10"
          className={`border ${
            errors.comment ? "border-red-500" : "border-[#dfdfdf]"
          }`}
          placeholder="Enter your comment"
          {...register("comment", { required: true })}
          style={{
            height: "120px",
            fontSize: "15px",
            width: "100%",
            borderRadius: "4px",
            marginTop: "5px",
            padding: "3px",
            color: "#232323",
            outline: "none",
          }}
        ></textarea>
      </div>

      <div className="col-span-12">
        <input
          type="checkbox"
          name="saveUserData"
          id="saveUserData"
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
        />
        <label htmlFor="saveUserData" className="text-[#828282]">
          Save my name, email, and website in this browser for the next time I
          comment.
          <span className="text-[#fb4f58]"> *</span>
        </label>
      </div>
      <input
        name="submit"
        type="submit"
        id="submit"
        className="submit btn border w-[151.72px] h-[38.5px] text-[10px] bg-[#232323] text-[#ffffff] rounded-[5px] hover:bg-[#ffffff] hover:border-[#232323] hover:text-[#232323] transition-all duration-400 cursor-pointer ease-in"
        value={isLoad ? "Posting..." : "Post Comment"}
        disabled={isLoad}
      />
    </form>
  );
};

export default CommentForm;
