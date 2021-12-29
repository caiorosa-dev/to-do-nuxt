export default interface Task {
	id?: number;
	content: string;
	// eslint-disable-next-line camelcase
	collection_id?: number;
	collection?: number;
	check?: number;
}
