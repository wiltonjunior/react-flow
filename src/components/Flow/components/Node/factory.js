import * as React from 'react';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';

import  NodeModel from './model';
import NodeWidget  from './index';

 class NodeFactory extends AbstractReactFactory {
	constructor() {
		super('js-custom-node');
	}

	generateModel(event) {
		return new NodeModel();
	}

	generateReactWidget(event) {
		return <NodeWidget engine={this.engine} node={event.model} />;
	}
}

export default NodeFactory
