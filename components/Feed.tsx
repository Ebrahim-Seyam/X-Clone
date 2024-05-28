import {
    collection,
    getDocs,
    getFirestore,
    orderBy,
    query,
} from 'firebase/firestore';

import { app } from '../app/firebase';
import Post from './Post';

export default async function Feed() {
    const db = getFirestore(app);
    const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
    const querySnapshot = await getDocs(q);
    let data:any = [];
    querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
    });
    return (
        <div>
            {data.map((post :any) => (
                <Post key={post.id} post={post} id={post.id} />
            ))}
        </div>
    );
}