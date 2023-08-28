import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const VideoData = ({ data }) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((vidData) => {
        return <Card data={vidData} key={vidData._id} />;
      })}
    </div>
  );
};

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const fetching = async () => {
      try {
        const response = await axios.get('https://edu-tech-api.onrender.com/api/data');

        if (response.data) {
          setPosts(response.data.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log("fetching error", error);
        setIsLoading(false);
      }
    };
    fetching();
  }, []);

  let filteredPosts = posts;

  if (search !== '') {
    filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (isLoading) {
    return <div className='flex items-center justify-center font-bold text-3xl'>Loading...</div>;
  }

  return (
    <section className='feed px-3'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for languages'
          required
          className='search_input peer'
          onChange={handleChange}
          value={search}
        />
      </form>
      <VideoData data={filteredPosts} />
    </section>
  );
}
