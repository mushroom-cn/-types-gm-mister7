interface GM {
	load: (path: string, options?: any) => void;
}
declare namespace NodeJS {
	interface Global {
		gm: GM;
	}
}