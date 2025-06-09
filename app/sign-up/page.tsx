'use client';
import {auth} from '@/components/auth/config';
import {useRouter} from 'next/navigation';
import {useState} from 'react';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';

const SignUp = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [createUserWithEmailAndPassword] =
		useCreateUserWithEmailAndPassword(auth);
	const router = useRouter();

	const handleSignUp = async () => {
		try {
			const res = await createUserWithEmailAndPassword(email, password);
			if (res?.user) {
				const token = await res.user.getIdToken();
				localStorage.setItem('token', token);
				setEmail('');
				setPassword('');
				router.push('/');
			}
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div className="flex items-center justify-center py-10 lg:py-32">
			<div className="border-4 border-black rounded-lg lg:w-1/3">
				<div className="flex flex-col gap-8 p-10 bg-black border-2 border-white rounded-lg shadow-lg">
					<h1 className="text-white">Sign Up</h1>
					<input
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="w-full p-3 text-white placeholder-gray-500 bg-gray-700 rounded outline-none"
					/>
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="w-full p-3 text-white placeholder-gray-500 bg-gray-700 rounded outline-none"
					/>
					<button
						onClick={handleSignUp}
						className="w-full btn-primary"
					>
						Sign Up
					</button>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
