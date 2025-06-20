import React from 'react';

interface LoaderProps {
	size?: 'small' | 'medium' | 'large';
}

const Loader: React.FC<LoaderProps> = ({size = 'medium'}) => {
	const sizeClasses = {
		small: 'w-5 h-5',
		medium: 'w-8 h-8',
		large: 'w-12 h-12',
	};

	return (
		<div
			className={`${sizeClasses[size]} border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin`}
		/>
	);
};

export default Loader;
