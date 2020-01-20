import { Component } from "react";
import { i18n } from "i18next";
import { Route } from "router5";
import { Reducer } from "redux";

declare global {
	/**
	|--------------------------------------------------
	| start: electron main interface.
	|--------------------------------------------------
	*/
	interface AppPluginResource {
		type: "html" | "js" | "css" | "svg" | "font" | "other";
		path: string;
		priority?: number;
	}
	interface IAppPlugin {
		getId(): string;
		getName(): string;
		getVersion(): string;
		getDescription(): string;
		getResources(): AppPluginResource[];
		run: () => void;
	}
	/**
	|--------------------------------------------------
	| end: electron main interface.
	|--------------------------------------------------
	*/

	/**
	|--------------------------------------------------
	| start: UI interface
	|--------------------------------------------------
	*/
	interface IPlugin {
		id: string;
		reducer: Reducer<any>;
		getRoutes(): Route[];
		getResourceBundles(): { ns: string; lng: string; resource: Dictionary<string>; }[];
		getMainComponent(): PromiseLike<React.Component<any, any>>;
	}
	interface IApp {
		start: (id: string) => void;
		installPlugin: (plugin: IPlugin) => void;
		uninstallPlugin: (pluginId: string) => void;
	}
	/**
	|--------------------------------------------------
	| end: UI interface
	|--------------------------------------------------
	*/
	declare class AppReadyEvent extends Event {
		new();
	}

	interface Window {
		__REDUX_DEVTOOLS_EXTENSION__: any;
		onLoadPlugin: (callback: () => IPlugin) => void;
		uninstallPlugin: (pluginId: string) => void;
		clearStore: () => void;
		useDispatch: () => Dispatch;
		t: (key, {
			ns: string,
		}) => string;
	}
	/**
	|--------------------------------------------------
	| start: global structure
	|--------------------------------------------------
	*/
	interface Dictionary<T> {
		[key: string | number]: T;
	}
	type Dispatch = (action: { type: string, [key: string]: any; }) => void;
	type Tran = (key: string, ...args) => string;
	interface TranProps {
		t?: Tran;
		i18n?: i18n;
	}
	interface ConnectProps {
		dispatch?: Dispatch;
	}
	interface Props extends TranProps, ConnectProps {
	}
	interface RequestError {
		code: string;
		msg: string;
	}
	interface QueryResult<T> {
		data: T;
		errors: RequestError[];
	}

	interface UpdateResult<T> {
		data: T;
		errors: RequestError[];

	}

	type SideBarHeaderDropdownItem = {
		isHeader: boolean;
		key: string;
		label: string;
		className: string;
	};
	type SideBarDividerDropdownItem = {
		key: string;
		isDivider: boolean;
		className: string;
	};
	type SideBarDropdownItem = {
		label: string;
		key: string;
		value: any;
		className: string;
		onClick: (value) => void;
	};
	type SideBarItem = {
		id: string;
		label: string;
		className?: string;
		icon: string;
		onClick?: (e) => void;
		onDropdownClick: (value: any) => void;
		dropdownItems: Array<SideBarDropdownItem | SideBarHeaderDropdownItem | SideBarDividerDropdownItem>;
	};
	/**
	|--------------------------------------------------
	| end: global structure
	|--------------------------------------------------
	*/
	const DEBUG: boolean;
}
export default global;