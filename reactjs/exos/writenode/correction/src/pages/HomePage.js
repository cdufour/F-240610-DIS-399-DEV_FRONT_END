import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase/config';
import { PostCard } from '../components/PostCard';
import { useTitle } from '../hooks/useTitle';

export const HomePage = () => {
    useTitle('Home');
    const [posts, setPosts] = useState([]);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        async function getPosts() {
            const data = await getDocs(collection(db, 'posts'));
            setPosts(data.docs.map(doc => (
                {...doc.data(), id: doc.id}
            )))
        }
        getPosts();
    }, [toggle])


    return (
        <section>
            { posts.map(post => 
                <PostCard key={post.id} post={post} toggle={toggle} setToggle={setToggle} /> )}
        </section>
    )
}