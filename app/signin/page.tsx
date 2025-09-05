import React from 'react';
import AuthLayout from '@/src/components/AuthLayout';
import { Linkedin } from 'lucide-react';
import Link from 'next/link';

function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px" {...props}>
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.223,0-9.651-3.356-11.303-8H6.306C9.656,35.663,16.318,40,24,40z" />
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C42.012,35.23,44,30.025,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
      </svg>
    );
}

export default function SignInPage() {
  return (
    <AuthLayout>
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Welcome back!</h1>
        <p className="text-gray-600">Sign in to your account</p>
      </div>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email Address</label>
          <input type="email" id="email" className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">Password</label>
          <input type="password" id="password" className="w-full p-2 border rounded-md" />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition">Sign In</button>
        <div className="text-right">
            <Link href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</Link>
        </div>
      </form>
      <div className="flex items-center my-6">
        <hr className="flex-grow border-t" />
        <span className="mx-4 text-sm text-gray-500">OR</span>
        <hr className="flex-grow border-t" />
      </div>
      <div className="space-y-3">
        <button className="w-full flex items-center justify-center p-2 border rounded-md hover:bg-gray-50 transition">
          <GoogleIcon className="mr-2" />
          Sign in with Google
        </button>
        <button className="w-full flex items-center justify-center p-2 border rounded-md hover:bg-gray-50 transition">
          <Linkedin className="mr-2" size={24} />
          Sign in with LinkedIn
        </button>
      </div>
      <p className="text-center mt-6 text-sm">
        Don&apos;t have an account? <Link href="/signup" className="font-semibold text-blue-600 hover:underline">Sign Up</Link>
      </p>
    </AuthLayout>
  );
}
