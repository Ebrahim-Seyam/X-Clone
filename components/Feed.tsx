"use client"
import {
    collection,
    getDocs,
    getFirestore,
    orderBy,
    query,
} from 'firebase/firestore';

import { app } from '../app/firebase';
import Post from './Post';
import { useEffect, useState } from 'react';

export default function Feed() {
    const [ProductList, setProductList] = useState([])
    useEffect(() => {
        data()
    }, [])
    const data = async () => {
        const db = getFirestore(app);
        const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
        const querySnapshot = await getDocs(q);
        let data: any = [];
        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() });
        });
        setProductList(data)
 }
    return (
        <div>
            {ProductList.map((post :any) => (
                <Post key={post.id} post={post} id={post.id} />
            ))}
        </div>
    );
}
