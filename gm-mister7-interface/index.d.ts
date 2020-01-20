interface Version {
	id: string;
	version: number;
}

interface Revision<T> extends Version {
	data: T;
}

interface Address {
	id: string;
	provice: string;
	state: string;
	street: string;
}
interface AliPay { }
interface WeChatPay { }
interface Bank { }

interface FinancialAccount extends Version {
	accountId: string;
	type: "AliPay" | "WeChatPPay" | "Bank";
	icon: string;
	serviceLine: string;
	idCard: string;
	userName: string;
}

interface Role extends Version {
	name: string;
}

interface UserData extends Version {
	id: string;
	firstName: string;
	lastName: string;
	idCard: string;
	phone: string;
	backPhone: string;
	email?: string;
	telNumber?: string;
	contact: UserData[];
	roles: Role[];
	financialAccounts: FinancialAccount[];
}
interface Stock {
	id: string;
	count: string;
	productId: string;
}
interface Warehouse {
	id: string;
	stock: Stock;
	address: Address;
}
interface Price {
	id: string;
	price: number;
	productId: string;
	description?: string;
}

interface Category {
	id: string;
	name: string;
	description: string;
}

interface Product extends Version {
	id: string;
	name: string;
	barCode: string;
	qrCode: string;
	price: Price;
	url: string;
	images?: string;
	videos?: string;
	description?: string;
}

interface Cart extends Version {
	id: string;
	products: Product[];
	totalPrice: number;
}

interface Order extends Version {

}
const DEBUG: boolean;