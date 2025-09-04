import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
  addDoc,
  updateDoc,
  arrayUnion,
  serverTimestamp,
} from 'firebase/firestore';
import { app } from './clientApp'; // Assuming clientApp.ts exports initialized 'app'
import { User, Program, Task, Enrollment } from '@/src/types/firestore';

const db = getFirestore(app);

// 1. Create User Profile
export async function createUserProfile(uid: string, data: Omit<User, 'uid'>): Promise<void> {
  const userRef = doc(db, 'users', uid);
  await setDoc(userRef, { ...data, uid });
}

// 2. Get User Profile
export async function getUserProfile(uid: string): Promise<User | null> {
  const userRef = doc(db, 'users', uid);
  const userSnap = await getDoc(userRef);
  if (userSnap.exists()) {
    return userSnap.data() as User;
  }
  return null;
}

// 3. Get All Programs
export async function getAllPrograms(): Promise<Program[]> {
  const programsCol = collection(db, 'programs');
  const programSnapshot = await getDocs(programsCol);
  return programSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Program));
}

// 4. Get Program Tasks
export async function getProgramTasks(programId: string): Promise<Task[]> {
  const tasksCol = collection(db, `programs/${programId}/tasks`);
  const taskSnapshot = await getDocs(tasksCol);
  return taskSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Task));
}

// 5. Get User Enrollments
export async function getUserEnrollments(uid: string): Promise<Enrollment[]> {
  const enrollmentsCol = collection(db, 'enrollments');
  const q = query(enrollmentsCol, where('userId', '==', uid));
  const enrollmentSnapshot = await getDocs(q);
  return enrollmentSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Enrollment));
}

// 6. Create Enrollment
export async function createEnrollment(uid: string, programId: string): Promise<string> {
  const enrollmentsCol = collection(db, 'enrollments');
  const newEnrollment = {
    userId: uid,
    programId: programId,
    status: 'in-progress' as const,
    startedAt: serverTimestamp(),
    completedTaskIds: [],
  };
  const docRef = await addDoc(enrollmentsCol, newEnrollment);
  return docRef.id;
}

// 7. Update Task Progress
export async function updateTaskProgress(enrollmentId: string, taskId: string): Promise<void> {
  const enrollmentRef = doc(db, 'enrollments', enrollmentId);
  await updateDoc(enrollmentRef, {
    completedTaskIds: arrayUnion(taskId),
  });
}
