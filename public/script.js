console.log("Hello");

const uploadImage = async () => {
  const res = await fetch(`${window.location.origin}/api/imageUpload`, {
    method: "POST",
    body: JSON.stringify({ a: "b" }),
  });
  const data = await res.json();
  console.log(data);
};
