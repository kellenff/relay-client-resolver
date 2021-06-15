/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type mockNetworkArgument_QueryVariables = {
    name?: string | null;
};
export type mockNetworkArgument_QueryResponse = {
    readonly hello: string | null;
};
export type mockNetworkArgument_Query = {
    readonly response: mockNetworkArgument_QueryResponse;
    readonly variables: mockNetworkArgument_QueryVariables;
};



/*
query mockNetworkArgument_Query(
  $name: String
) {
  hello(name: $name)
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      }
    ],
    "kind": "ScalarField",
    "name": "hello",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "mockNetworkArgument_Query",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "mockNetworkArgument_Query",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d2cd14709c74fd203fd6b93bc6b81906",
    "id": null,
    "metadata": {},
    "name": "mockNetworkArgument_Query",
    "operationKind": "query",
    "text": "query mockNetworkArgument_Query(\n  $name: String\n) {\n  hello(name: $name)\n}\n"
  }
};
})();
(node as any).hash = 'db0e16d55932540532202acae5de742d';
export default node;
