
import React, { createContext, useContext, useState } from "react";

export type Post = {
  id: string;
  title: string;
  content: string;
};

type AppContextType = {
  posts: Post[];
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  addPost: (title: string, content: string) => void;
  updatePost: (id: string, title: string, content: string) => void;
  deletePost: (id: string) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      title: "First Post",
      content: "This is my first post.",
    },
    {
      id: "2",
      title: "Second Post",
      content: "Learning React Native CRUD.",
    },
  ]);

  // CREATE
  const addPost = (title: string, content: string) => {
    const newPost: Post = {
      id: Date.now().toString(),
      title,
      content,
    };

    setPosts((previousPosts) => [newPost, ...previousPosts]);
  };

  // UPDATE
  const updatePost = (id: string, title: string, content: string) => {
    setPosts((previousPosts) =>
      previousPosts.map((post) =>
        post.id === id ? { ...post, title, content } : post
      )
    );
  };

  // DELETE
 const deletePost = (id: string) => {
  setPosts((currentPosts) => {
    const updatedPosts = currentPosts.filter(
      (post) => post.id !== id
    );

    return updatedPosts;
  });
};

  return (
    <AppContext.Provider
      value={{
        posts,
        addPost,
        updatePost,
        deletePost,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp must be inside AppProvider");
  }

  return context;
}
