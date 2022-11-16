/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\nquery property($id: ID!) {\n\tProperty_by_id(id: $id) {\n\t\tid\n\t\tname\n\t\tdescription\n\t\tlogo {\n\t\t\ttitle\n\t\t\tfilename_download\n\t\t\theight\n\t\t\twidth\n\t\t\tid\n\t\t}\n\t\tfavicon {\n\t\t\tfilename_download\n\t\t\tid\n\t\t}\n\t\theadline\n\t\tthumbnail {\n\t\t\ttitle\n\t\t\tfilename_download\n\t\t\theight\n\t\t\twidth\n\t\t\tid\n\t\t}\n\t\texcerpt\n\t\tsections {\n\t\t\tid\n\t\t\titem {\n\t\t\t\t... on compareSection {\n\t\t\t\t\tid\n\t\t\t\t\tsection\n\t\t\t\t}\n\t\t\t\t... on content {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}\n": types.PropertyDocument,
};

export function graphql(source: "\nquery property($id: ID!) {\n\tProperty_by_id(id: $id) {\n\t\tid\n\t\tname\n\t\tdescription\n\t\tlogo {\n\t\t\ttitle\n\t\t\tfilename_download\n\t\t\theight\n\t\t\twidth\n\t\t\tid\n\t\t}\n\t\tfavicon {\n\t\t\tfilename_download\n\t\t\tid\n\t\t}\n\t\theadline\n\t\tthumbnail {\n\t\t\ttitle\n\t\t\tfilename_download\n\t\t\theight\n\t\t\twidth\n\t\t\tid\n\t\t}\n\t\texcerpt\n\t\tsections {\n\t\t\tid\n\t\t\titem {\n\t\t\t\t... on compareSection {\n\t\t\t\t\tid\n\t\t\t\t\tsection\n\t\t\t\t}\n\t\t\t\t... on content {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}\n"): (typeof documents)["\nquery property($id: ID!) {\n\tProperty_by_id(id: $id) {\n\t\tid\n\t\tname\n\t\tdescription\n\t\tlogo {\n\t\t\ttitle\n\t\t\tfilename_download\n\t\t\theight\n\t\t\twidth\n\t\t\tid\n\t\t}\n\t\tfavicon {\n\t\t\tfilename_download\n\t\t\tid\n\t\t}\n\t\theadline\n\t\tthumbnail {\n\t\t\ttitle\n\t\t\tfilename_download\n\t\t\theight\n\t\t\twidth\n\t\t\tid\n\t\t}\n\t\texcerpt\n\t\tsections {\n\t\t\tid\n\t\t\titem {\n\t\t\t\t... on compareSection {\n\t\t\t\t\tid\n\t\t\t\t\tsection\n\t\t\t\t}\n\t\t\t\t... on content {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;