import { auth, db } from '../firebase/config';
import { doc, deleteDoc } from 'firebase/firestore';

export const PostCard = ({post, toggle, setToggle}) => {
    const isAuth = JSON.parse(localStorage.getItem('isAuth'));
    const {id, title, description, author} = post;

    async function onDelete() {
        const document = doc(db, 'posts', id);
        await deleteDoc(document);
        setToggle(!toggle);
    }

    return (
        <div className='card'>
            <p className='title'>{title}</p>
            <p className='description'>{description}</p>
            <p className='control'>
                <span className='author'>{author.name}</span>
                { isAuth && (author.id === auth.currentUser.uid) &&
                    <span onClick={onDelete} className='delete'><i className='bi bi-trash3'></i></span>
                }
            </p>
        </div>
    )
}