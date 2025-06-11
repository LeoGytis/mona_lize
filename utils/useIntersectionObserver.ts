import {useEffect, useRef, useState} from 'react';

export const useIntersectionObserver = (options = {}) => {
	const elementRef = useRef<HTMLDivElement>(null);
	const [isIntersecting, setIsIntersecting] = useState(false);

	useEffect(() => {
		const element = elementRef.current;
		if (!element) return;

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				setIsIntersecting(entry.isIntersecting);
				if (entry.isIntersecting) {
					element.classList.add('in-view');
				} else {
					element.classList.remove('in-view');
				}
			});
		}, options);

		observer.observe(element);

		return () => {
			if (element) {
				observer.unobserve(element);
			}
		};
	}, [options]);

	return {ref: elementRef, isIntersecting};
};
