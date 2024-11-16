import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/graphql",
  documents: "src/graphql/*.graphql",
  generates: {
    "src/types/gql/graphql-types.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
        typesPrefix: "GraphQl",
        scalars: {
          FormattedDateScalar: "string",
        },
        namingConvention: {
          enumValues: "keep",
        },
      },
    },
    "schema.graphql": {
      plugins: ["schema-ast"],
    },
  },
};

export default config;
