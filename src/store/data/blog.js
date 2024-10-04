export const handleShare = (platform, blog) => {
  if (!blog) {
    console.error("Blog data is not available");
    return;
  }

  let shareUrl;

  // Define the content to be shared
  const sharedContent = {
    title: blog?.data?.post?.name,
    date: new Date(blog?.data?.post?.updatedAt),
    url: "https://your-website-url.com", // Replace this with the actual URL
    imageUrl: blog?.data?.post?.image,
    description: blog?.data?.post?.description,
  };

  // Switch case for different social platforms
  switch (platform) {
    case "facebook":
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        sharedContent.url
      )}&title=${encodeURIComponent(
        sharedContent.title
      )}&picture=${encodeURIComponent(sharedContent.imageUrl)}`;
      break;

    case "twitter":
      shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        sharedContent.title
      )}&url=${encodeURIComponent(sharedContent.url)}&via=wellofscience`;
      break;

    case "whatsapp":
      shareUrl = `https://wa.me/1234567890?text=${encodeURIComponent(
        `${sharedContent.title} - ${sharedContent.url}`
      )}`;
      window.open(shareUrl, "_blank");
      break;

    case "linkedin":
      shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        sharedContent.url
      )}&title=${encodeURIComponent(
        sharedContent.title
      )}&source=${encodeURIComponent("Your Website Name")}`;
      break;

    default:
      console.error("Unsupported platform for sharing");
      return;
  }

  // Open the sharing URL in a new window
  window.open(shareUrl, "_blank", "width=600,height=400");
};
