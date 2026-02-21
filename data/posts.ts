export type Post = {
    id: string;
    user: string;
    avatar: string;
    image: string;
    caption: string;
    likesText: string;
  };
  
  export const posts: Post[] = [
    {
      id: "101",
      user: "travelgram",
      avatar: "https://i.pravatar.cc/100?img=15",
      image: "https://picsum.photos/800/800?random=11",
      caption: "Exploring paradise! #travel #beach",
      likesText: "Liked by alex, sarah and 200 others",
    },
    {
      id: "102",
      user: "cityshots",
      avatar: "https://i.pravatar.cc/100?img=22",
      image: "https://picsum.photos/800/800?random=12",
      caption: "Downtown vibes 🌆",
      likesText: "Liked by sam and 98 others",
    },
    {
      id: "103",
      user: "naturelove",
      avatar: "https://i.pravatar.cc/100?img=32",
      image: "https://picsum.photos/800/800?random=13",
      caption: "Fresh air, fresh mind 🌿",
      likesText: "Liked by maria and 340 others",
    },
  ];