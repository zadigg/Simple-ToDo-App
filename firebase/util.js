import db from "./firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  onSnapshotsInSync,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";

export const handleNew = async () => {
  const title = prompt("Enter title");
  const description = prompt("Enter description");
  const done = prompt("Enter done");
  const collectionRef = collection(db, "todos");
  const payload = {
    title: title,
    description: description,
    done: done,
    timestamp: serverTimestamp(),
  };
  await addDoc(collectionRef, payload);
};

export const handleEdit = async (id) => {
  const title = prompt("Enter title");
  const description = prompt("Enter description");
  const done = prompt("Enter done");
  const docRef = doc(db, "todos", id);
  const payload = {
    title: title,
    description: description,
    done: done,
    timestamp: serverTimestamp(),
  };
  updateDoc(docRef, payload);
};

export const handleDelete = async (id) => {
  const docRef = doc(db, "todos", id);
  await deleteDoc(docRef);
};

export const handleQueryDelete = async (id) => {
  const title = prompt("Enter the title you want to delete");
  const collectionRef = collection(db, "todos");
  const q = query(collectionRef, where("title", "==", title));
  const snapshot = await getDocs(q);

  const results = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  results.forEach(async (result) => {
    const docRef = doc(db, "todos", result.id);
    await deleteDoc(docRef);
  });
};
