import { Timestamp } from 'firebase/firestore';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  university?: string;
  enrolledProgramIds: string[];
  completedProgramIds: string[];
}

export interface Program {
  id: string;
  title: string;
  companyName: string;
  companyLogoUrl: string;
  description: string;
  skills: string[];
  durationHours: number;
}

export interface Task {
  id: string;
  title: string;
  moduleNumber: number;
  taskNumber: number;
  videoUrl?: string;
  instructions: string; // Markdown content
}

export interface Enrollment {
  id: string;
  userId: string;
  programId: string;
  status: 'in-progress' | 'completed';
  startedAt: Timestamp;
  completedAt?: Timestamp;
  completedTaskIds: string[];
}
