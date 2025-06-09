'use client';
import {User} from 'firebase/auth';
import {createContext, useContext} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from './config';

interface AuthContextType {
	user: User | null;
	loading: boolean;
	signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
	user: null,
	loading: true,
	signOut: async () => {},
});

export function AuthProvider({children}: {children: React.ReactNode}) {
	const [user, loading] = useAuthState(auth);

	const signOut = async () => {
		try {
			await auth.signOut();
			localStorage.removeItem('token');
		} catch (error) {
			console.error('Error signing out:', error);
		}
	};

	const value: AuthContextType = {
		user: user ?? null,
		loading,
		signOut,
	};

	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
}
