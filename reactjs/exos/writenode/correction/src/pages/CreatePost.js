import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../firebase/config';
import { useNavigate } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';

export const CreatePost = () => {
    useTitle('Create Post');
    const navigate = useNavigate();

    async function onSubmit(e) {
        e.preventDefault();

        const doc = {
            title: e.target.title.value,
            description: e.target.description.value,
            author: {
                id: auth.currentUser.uid,
                name: auth.currentUser.displayName
            }
        };
        await addDoc(collection(db, 'posts'), doc);
        navigate('/'); // redirects to homepage
    }

    return (
        <section className='create'>
            <div className='heading'>
                <h1>Add New Post</h1>
            </div>
            <form className='createPost' onSubmit={onSubmit}>
                <input type="text" className='title' name='title' placeholder='Title' maxLength="50" required />
                <textarea className='description' name="description" placeholder='description' maxLength="600" required></textarea>
                <button type="submit" className='submit'>Create</button>
            </form>
        </section>
    )
}