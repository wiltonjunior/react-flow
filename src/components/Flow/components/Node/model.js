import { DefaultPortModel } from '@projectstorm/react-diagrams';
import * as ReactDiagrams from '@projectstorm/react-diagrams';

class NodeModel extends ReactDiagrams.NodeModel {
	constructor(options = {}) {
		super({
			...options,
			type: 'js-custom-node'
		});
		this.color = options.color || { options: 'red' };

		// setup an in and out port
		this.addPort(
			new DefaultPortModel({
				in: true,
				name: 'in'
			})
		);
		this.addPort(
			new DefaultPortModel({
				in: false,
				name: 'out'
			})
		);
	}

	serialize() {
		return {
			...super.serialize(),
			color: this.color
		};
	}

	deserialize(ob, engine) {
		super.deserialize(ob, engine);
		this.color = ob.color;
	}
}

export default NodeModel