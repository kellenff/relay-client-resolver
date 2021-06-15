import { Environment, fetchQuery, graphql, RecordSource, Store } from "relay-runtime";
import MockNetwork, { create } from "./mock-network";
import { mockNetwork_Query, mockNetwork_QueryResponse } from "./__generated__/mockNetwork_Query.graphql";
import { mockNetworkArgument_Query } from "./__generated__/mockNetworkArgument_Query.graphql";

describe("mockNetwork", () => {
  let source: RecordSource;
  let store: Store;

  beforeEach(() => {
    source = new RecordSource();
    store = new Store(source);
  });

  it("should return the response from the custom resolver", async () => {
    const helloResponse = "world";
    const query = graphql`
      query mockNetwork_Query {
        hello
      }
    `;
    const network = create(`type Query { hello(name: String): String }`, {
      hello: () => helloResponse,
    });

    const environment = new Environment({ network, store });

    const response: mockNetwork_QueryResponse = await fetchQuery<mockNetwork_Query>(environment, query, {}).toPromise();

    expect(response.hello).toEqual(helloResponse);
  });

  it("should pass variables to the resolver", async () => {
    const name = "Tester";
    const query = graphql`
      query mockNetworkArgument_Query($name: String) {
        hello(name: $name)
      }
    `;
    const expectedHello = (n: string) => `Hello, ${n}!`;
    const source = new RecordSource();
    const store = new Store(source);
    const network = create(`type Query { hello(name: String): String }`, {
      hello: ({ name }) => expectedHello(name),
    });

    const environment = new Environment({ network, store });

    const response = await fetchQuery<mockNetworkArgument_Query>(environment, query, { name }).toPromise();

    expect(response.hello).toEqual(expectedHello(name));
  });
});
