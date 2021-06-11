import { Network, PayloadError } from "relay-runtime";
import { buildSchema, graphql } from "graphql";

export const create = (schema: string, resolver) =>
  Network.create(async (request, variables, cacheConfig, uploadables?) => {
    const gqlSchema = buildSchema(schema);
    const response = await graphql(gqlSchema, request.text, resolver);

    const { errors, ...rest } = response;
    const payloadErrors: PayloadError[] | undefined = errors?.map((e) => ({ message: e.message }));

    return { errors: payloadErrors, ...rest };
  });

export default { create };
