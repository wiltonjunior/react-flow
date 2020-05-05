import React from "react";

import NodeModel from './components/Flow/components/Node/model';
import NodeFactory from './components/Flow/components/Node/factory';

import createEngine, { DefaultLinkModel, DiagramModel } from '@projectstorm/react-diagrams';

import { CanvasWidget } from "@projectstorm/react-canvas-core";

import './App.css'

const App = () => {

// create an instance of the engine
const engine = createEngine();

// register the two engines
engine.getNodeFactories().registerFactory(new NodeFactory());

// create a diagram model
const model = new DiagramModel();

//####################################################
// now create two nodes of each type, and connect them

const node1 = new NodeModel({ color: 'rgb(192,255,0)' });
const node2 = new NodeModel({ color: 'rgb(192,255,0)' });

node1.setPosition(50, 50);
node2.setPosition(100, 100);

const link1 = new DefaultLinkModel();
link1.setSourcePort(node1.getPort('out'));
link1.setTargetPort(node2.getPort('in'));

model.addAll(node1 ,link1,node2 );

//####################################################

// install the model into the engine
engine.setModel(model);
  return <CanvasWidget className="diagram-container" engine={engine} />;
};

export default App;

