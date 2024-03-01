import got from "got";

const Get = async () => {
  const { body } = await got("http://localhost:3000/posts");

  console.log("Get", JSON.parse(body));
};

const Post = async () => {
  console.log("Posting");
  const { statusCode } = await got("http://localhost:3000/posts", {
    json: { id: "3", title: "more title", views: 300 },
    method: "POST",
  });
  console.log("Post complete", statusCode);
};

const Put = async () => {
  console.log("Putting");
  const { statusCode } = await got("http://localhost:3000/posts", {
    json: {
      id: "2",
      text: "text changed",
      postId: "1",
    },
    method: "PUT",
  });

  console.log("Putting complete ", statusCode);
};
