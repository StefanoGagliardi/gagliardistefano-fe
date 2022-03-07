/**
 * Le svg nell'app sono gesiste come componenti tramite una trasformazione in webpack e custom type.
 * Dobbiamo quindi fare il mock del componente.
 */
 import React from "react";

 export default "svg";
 const svgrMock = React.forwardRef((props, ref) => (
   <span ref={ref} {...props} />
 ));
 
 export const ReactComponent = svgrMock;
 