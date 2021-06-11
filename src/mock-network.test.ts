import { Environment, fetchQuery, graphql, RecordSource, Store } from "relay-runtime";
import MockNetwork, { create } from "./mock-network";
import { mockNetwork_Query, mockNetwork_QueryResponse } from "./__generated__/mockNetwork_Query.graphql";

describe("mockNetwork", () => {
  it("should return the response from the custom resolver", async () => {
    const helloResponse = "world";
    const source = new RecordSource();
    const store = new Store(source);
    const network = create(`type Query { hello: String }`, {
      hello: () => helloResponse,
    });

    const environment = new Environment({ network, store });

    const response: mockNetwork_QueryResponse = await fetchQuery<mockNetwork_Query>(
      environment,
      graphql`
        query mockNetwork_Query {
          hello
        }
      `,
      {},
    ).toPromise();

    expect(response.hello).toEqual(helloResponse);
  });
});
