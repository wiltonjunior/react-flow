import * as React from "react";
import { PortWidget } from "@projectstorm/react-diagrams";

import "./styles.css";

const Node = (props) => {
  const { node, engine } = props;
  return (
    <div className="node">
      <div className="node_header">
        <span>Brasil</span>
        <span>Holding</span>
      </div>
      <PortWidget engine={engine} port={node.getPort("in")} />
      <div className="node_main">
        <div className="node_body">
          <div className="node_body_header">Nome da Empresa (RB45)</div>
          <div className="node_body_main">
            <div className="item">
              <p>Outros</p>
              <span>100%</span>
            </div>
            <div className="item">
              <p>Outros</p>
              <span>100%</span>
            </div>
          </div>
        </div>
      </div>
      <PortWidget engine={engine} port={node.getPort("out")} />
    </div>
  );
};

export default Node;
