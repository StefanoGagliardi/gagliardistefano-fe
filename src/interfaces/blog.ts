type Post = {
  id: string;
  image: {
    type: 'mp4' | 'png' | 'jpg' | 'jpeg' | 'svg';
    url: string;
  };
  title: string;
  shortDesc: string;
};

export default Post;
