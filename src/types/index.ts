export interface svgType {
	id: number;
	title: string;
	category: category;
	route: string;
	url: string;
}

export type category =
	| 'All'
	| 'AI'
	| 'Software'
	| 'Library'
	| 'Hosting'
	| 'Framework'
	| 'CMS'
	| 'Database'
	| 'Compiler'
	| 'Crypto'
	| 'Social'
	| 'Entertainment'
	| 'Browser'
	| 'Language'
	| 'Education'
	| 'Design';
