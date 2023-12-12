import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

import { SVGS } from '../../data/svgs';
import type { svgType } from '../../types';

export const load = (async ({ params }) => {
	const { slug } = params;

	if (!slug) {
		return error(404, 'Not found');
	}

	const svgsByCategory = SVGS.filter((svg: svgType) => svg.category.toLowerCase() === slug);

	return {
		category: slug as string,
		SVGS: svgsByCategory
	};
}) satisfies PageLoad;
