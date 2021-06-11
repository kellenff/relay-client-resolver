/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type mockNetwork_QueryVariables = {};
export type mockNetwork_QueryResponse = {
    readonly hello: string | null;
};
export type mockNetwork_Query = {
    readonly response: mockNetwork_QueryResponse;
    readonly variables: mockNetwork_QueryVariables;
};



/*
query mockNetwork_Query {
  hello
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "hello",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "mockNetwork_Query",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "mockNetwork_Query",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "bc123fe7a8ed1385d8ca3c3bbaac5c95",
    "id": null,
    "metadata": {},
    "name": "mockNetwork_Query",
    "operationKind": "query",
    "text": "query mockNetwork_Query {\n  hello\n}\n"
  }
};
})();
(node as any).hash = '6e6f128bd47150d9ba946fb419dceeb9';
export default node;
